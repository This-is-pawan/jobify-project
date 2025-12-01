require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const fs = require("fs");
const morgan = require("morgan");
const multer = require("multer");
const router = require("./router/jobRouter");
const cookieParser = require("cookie-parser");
const { Authrouter } = require("./router/AuthRouter");
const { authenticateUser } = require("./middleware/Authmiddleware");
const { AuthDataGet } = require("./router/GetDataRoute");
const path = require("path");
// const jobs = require("./models/jobModels");
// const User = require("./models/userModel");
const { uploadimg, profileData } = require("./controllers/AuthController");

require("./db/mongodb");

server.use(express.json());
server.use(cookieParser());

server.use(
  cors({
    origin: "https://jobify-frontend-k519.onrender.com",
    credentials: true,
  })
);

// const __dirname/ = path.resolve(); // Needed if using ES module

// Serve static files
server.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
// console.log(server.use("/uploads", express.static(path.join(__dirname, "public/uploads"))));

// Ensure uploads folder exists
const uploadPath = path.join(__dirname, "public/uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // Absolute path
  },
  filename: (req, file, cb) => {
    const suffix = Date.now();
    cb(null, suffix + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Upload route
server.post("/profile-upload", upload.single("photo"), uploadimg);
// server.get("/profile-data", authenticateUser, profileData);

if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.json("home api is ready");
});
server.get('/api/test/proxy', (req, res) => {
  res.json({ name: 'sham', msg: 'proxy is ready' });
});
// vallidation in  nodejs libaray with express

//##################

server.use("/api/v1/jobs", authenticateUser, router);
server.use("/api/v1/auth",Authrouter);
server.use("/api/user", AuthDataGet);

server.use((req, res) => {
  res.status(404).json({ msg: "not found" });
});
server.listen(port, () => {
  console.log(`server is listen on port:${port}`);
});
