
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
 



 
// ✅ CORS Configuration (Allow Frontend Requests)
app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));


// ✅ MongoDB Connection String (Avoid Hardcoding in Production)

const MONGO_URI = 'mongodb://localhost:27017/testdb'
const JWT_SECRET = "your_secret_key";  // Use a strong secret key

// ✅ Connect to MongoDB
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));
// Create upload directory if not exists
const doctorUploadDir = "./uploads/doctors";
if (!fs.existsSync(doctorUploadDir)) {
  fs.mkdirSync(doctorUploadDir, { recursive: true });
}
// Multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, doctorUploadDir);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });
  const upload = multer({ storage });
  
  // Static folder to serve photos
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));
  

// ✅ User Schema & Model
const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role:String,
    phone: String,
    address: String,
    gender: String,
    birthday: String,

});

const User = mongoose.model("User", UserSchema);
const Adminuser = mongoose.model("Adminuser", UserSchema);  

// ✅ Register Route
app.post("/create", async (req, res) => {
    try {
        console.log("Receve Data:", req.body);
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        // Hash password and save new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ fullname, email, password: hashedPassword });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ error: "Server error. Try again later." });
    }
});


// GET user profile by ID with token verification
app.get("/api/users/:id", async (req, res) => {
  try {
    // Check if there's an Authorization header
    const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET); // decode token with secret
    const userIdFromToken = decoded.id;

    // If the token's userId doesn't match the requested ID, reject the request
    if (userIdFromToken !== req.params.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    // Fetch user from database 
    const user = await User.findById(req.params.id); 
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    // console.error("Fetch error:", error);
    res.status(500).json({ message: "Failed to fetch user" });
  } 
});


// UPDATE user profile by ID
app.put("/api/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Failed to update user" });
  }
});

//to fetch doctor details
app.get("/api/doctors/:id",async (req,res)=>{
  try{
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({message: "Doctor not found"})
    res.json(doctor)
  }
  catch(error){
    res.status(500).json({message: "Failed to fetch doctors"})
  }
})


app.get("/api/doctors", async (req, res) => {
    try {
      const doctors = await Doctor.find();
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch doctors" });
    }
  });
  app.put("/api/update-doctor/:id", upload.single("photo"), async (req, res) => {
    try {
      const doctorId = req.params.id;
  
      const updateData = { ...req.body };
  
      if (req.file) {
        updateData.photo = req.file.path;
      }
  
      if (updateData.password) {
        updateData.password = await bcrypt.hash(updateData.password, 10);
      }
  
      const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updateData, {
        new: true,
      });
  
      if (!updatedDoctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      res.json({ message: "Doctor updated successfully", updatedDoctor });
    } catch (error) {
      console.error("Update Error:", error);
      res.status(500).json({ message: "Failed to update doctor" });
    }
  });

  app.delete("/api/delete-doctor/:id", async (req, res) => {
    try {
      const doctorId = req.params.id;
      const deletedDoctor = await Doctor.findByIdAndDelete(doctorId);
  
      if (!deletedDoctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }
  
      res.json({ message: "Doctor deleted successfully" });
    } catch (error) {
      console.error("Delete Error:", error);
      res.status(500).json({ message: "Failed to delete doctor" });
    }
  });


// ✅ Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "User not found" });

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

        // res.json({ message: "Login successful", token });
        res.json({ message: "Login successful", token, user: { _id: user._id, fullname: user.fullname, email: user.email } });
        // Store the token in localStorage after login
        // localStorage.setItem('token', response.data.token);

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Server error. Try again later." });
    }
});


//doctor login
app.post("/doctor-login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user exists
        const doctor = await User.findOne({ email });
        if (!doctor) return res.status(400).json({ error: "doctor not found" });

        // Validate password
        const validPassword = await bcrypt.compare(password, doctor.password);
        if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign({ id: doctor._id }, JWT_SECRET, { expiresIn: "1h" });

        // res.json({ message: "Login successful", token });
       

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Server error. Try again later." });
    }
});

app.post("/adminlogin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const user = await Adminuser.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(400).json({ error: "User not found" });
    // Direct comparison (plain text - for dev only)
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword){
      return res.status(400).json({ error: "Invalid credentials" });
  }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});










// ✅ Doctor Schema & Model
const doctorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    experience: String,
    fees: String,
    speciality: String,
    degree: String,
    address1: String,
    address2: String,
    about: String,
    photo: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

// ✅ API Route to add doctor
app.post("/api/add-doctor",upload.single("photo"), async (req, res) => {
    console.log("Add doctor route hit"); // ← Check this shows in console
    try {
        const { name, email, password, experience, fees, speciality, degree, address1, address2, about } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newDoctor = new Doctor({
            name, email, password: hashedPassword, experience, fees, speciality, degree, address1, address2, about,photo: req.file ? req.file.path : null,
        });
        console.log("Body:", req.body);
        console.log("File:", req.file);

        await newDoctor.save(); 
        res.status(201).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.error("Error adding doctor:", error);
        res.status(500).json({ message: "Error adding doctor", error });
    }
});

// Appointment
const appointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
  reason: String,
  status: { type: String, default: "Pending" }, // e.g., Pending, Confirmed, Cancelled
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);



// const verifyUserToken = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1]; // Expect: Bearer <token>
//   if (!token) {
//     return res.status(401).json({ message: "Access denied. No token provided." });
//   }

//   try {
//     const decoded = jwt.verify(token, "your_jwt_secret"); // Replace with your secret
//     req.user = decoded; // Add user payload to request
//     next();
//   } catch (err) {
//     return res.status(400).json({ message: "Invalid token." });
//   }
// };
app.post("/api/appointments", async (req, res) => {
  try {
    const { userId, doctorId, day, time, reason } = req.body;

    if (!userId || !doctorId || !day || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newAppointment = new Appointment({
      userId,
      doctorId,
      day,
      time,
      reason,
    });

    await newAppointment.save();
    res.json({ success: true, appointment: newAppointment });
  } catch (err) {
    console.error("Error saving appointment:", err);
    res.status(500).json({ message: "Server error" });
  }
});


app.get("/api/appointments", async (req, res) => {
  const { userId } = req.query;
  if (!userId) return res.status(400).json({ message: "User ID required" });

  try {
    const appointments = await Appointment.find({ userId })
      .populate("doctorId", "name speciality photo")
      .sort({ createdAt: -1 });

    res.json(appointments);
  } catch (err) {
    console.error("Error fetching appointments:", err);
    res.status(500).json({ message: "Server error" });
  }
});


//appintment cancellation
app.delete("/api/cancel-appointment/:id", async (req, res) => {
    try {
      const appintmentId = req.params.id;
      const cancelAppointment = await Appointment.findByIdAndDelete(appintmentId);
  
      if (!cancelAppointment) {
        return res.status(404).json({ message: "Appointment not found" });
      }
  
      res.json({ message: "Doctor deleted successfully" });
    } catch (error) {
      console.error("Delete Error:", error);
      res.status(500).json({ message: "Failed to cancel appointment" });
    }
  });

  //admin Appoointments
 app.get("/api/adappointments", async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("userId", "full_name birthday") 
      .populate("doctorId", "name fees"); 

    res.json(appointments);
  } catch (error) {
    console.error("Failed to fetch appointments:", error);
    res.status(500).json({ message: "Server error" });
  }
});


//time slote
app.get("/api/booked-slots",async(req,res)=>{
  const{doctorId ,day} = req.query;
  try{
    const appointments = await Appointment.find({doctorId,day});
    const bookedTime = appointments.map(appt => appt.time);
    res.json(bookedTime);
  }
  catch(err){
    console.error("error fetching booked slots:",err);
    res.status(500).send("server error");
  }
});





// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

  