import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";

const app = express();
const corsOptions = {
    origin: process.env.CLIENT_URL
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRoute)


app.listen(process.env.PORT, ()=>{
 console.log(`App is listing to port: ${process.env.PORT}`);
});
