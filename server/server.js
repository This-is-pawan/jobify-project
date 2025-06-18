require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const router = require("./router/jobRouter");
const cookieParser = require("cookie-parser");
const { Authrouter } = require("./router/AuthRouter");
const { authenticateUser } = require("./middleware/Authmiddleware");
const { AuthDataGet } = require("./router/GetDataRoute");

require("./db/mongodb");
server.use(express.json());
server.use(cookieParser());
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
if (process.env.NODE_ENV === "development") {
  server.use(morgan("dev"));
}

const port = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.json("home api is ready");
});
// server.get('/api/test/proxy', (req, res) => {
//   res.json({ name: 'sham', msg: 'proxy is ready' });
// });
// vallidation in  nodejs libaray with express

//##################

server.use("/api/v1/jobs", authenticateUser, router);
server.use("/api/v1/auth", Authrouter);
server.use("/api/user", AuthDataGet);

server.use((req, res) => {
  res.status(404).json({ msg: "not found" });
});
server.listen(port, () => {
  console.log(`server is listen on port:${port}`);
});
