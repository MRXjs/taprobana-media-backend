const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const AuthRoute = require("./Routes/AuthRoute.js");
const UserRoute = require("./Routes/UserRoute.js");
const PostRoute = require("./Routes/PostRoute.js");
const UploadRoute = require("./Routes/UploadRoute.js");
const ChatRoute = require("./Routes/ChatRoute.js");
const MessageRoute = require("./Routes/MessageRoute.js");
const CommentRoutes = require("./Routes/CommentRoutes.js");

// //Routes

const app = express();

// to serve images for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

// Connection DB
let PORT = process.env.PORT || 8090;
mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(PORT, () => console.log(`Listenig at PORT = ${PORT} 🔥`))
  )
  .catch((error) => console.log(error));

// usage of routes
app.get("/", (req, res, next) => {
  res.send("<h2>Taprobana Media API 🦁</h2>");
  next();
});

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);
app.use("/comment", CommentRoutes);
