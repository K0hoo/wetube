import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import Video from "./models/Video";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`Listening on: localhost${PORT}`);

app.listen(PORT, handleListening)