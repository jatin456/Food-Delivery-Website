

import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
// import cartRouter from './routes/cartROute.js';
import cartRouter from './routes/cartRout.js';
import orderRouter from './routes/orderRoute.js';



// app config

const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();


// api end points
app.use("/api/food",foodRouter)
app.use('/images', express.static('uploads'))
app.use("/api/user",userRouter)
// app.use('api/cart',cartRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get('/', (req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Connected to ${port}`);
})



//mongodb+srv://AmanTripathi:Aman1234@cluster0.e9w390a.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0