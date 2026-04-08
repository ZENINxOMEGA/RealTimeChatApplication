import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";


const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;



server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});