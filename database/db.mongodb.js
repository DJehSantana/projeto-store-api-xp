import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
//função de conexão com o MongoDb
async function connect() {
    const uri = process.env.MONGODB_URL;
    return await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

export default connect; 