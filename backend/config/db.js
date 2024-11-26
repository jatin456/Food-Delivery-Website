
import mongoose from "mongoose";

 export const connectDB = async  ()=>{
    //await mongoose.connect('mongodb://127.0.0.1:27017/food-del').then(()=>console.log("DB Connected"))
     await mongoose.connect('mongodb+srv://AmanTripathi:Aman1234@cluster0.dykhwnm.mongodb.net/food-del').then(()=>console.log("DB connected"))
    // await mongoose.connect('mongodb+srv://tripathiaman1011:830333@cluster0.dztrxtf.mongodb.net/food-del').then(()=>console.log("DB connected"))
    //  mongoose.connect('mongodb+srv://aman:1234@cluster0.dztrxtf.mongodb.net/food-del').then(()=>console.log("DB connected"))
}


