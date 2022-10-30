import express from "express"
import userRouter from "./routes/users.js"
import postRouter from "./routes/posts.js"
import likeRouter from "./routes/likes.js"
import commentRouter from "./routes/comments.js"
import authRouter from "./routes/auth.js"


const app = express();

// middlewares
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments", likeRouter);
app.use("/api/likes", commentRouter);
app.use("/api/auth", authRouter);

app.listen(8800, () => {
    console.log("API working!");
})