import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://sunilkumar:sunilK123@cluster0.dxz9wto.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}