import mongoose from "mongoose";


mongoose
    .connect('mongodb+srv://user:1234@cluster0.folehlz.mongodb.net/food-ordering?retryWrites=true&w=majority', { useNewUrlParser: true})
    .catch(e => {
            console.error('Connection error', e.message)
    })

const db = mongoose.connection
export default db