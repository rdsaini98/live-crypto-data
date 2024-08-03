import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.port || 3000;
const POLL_INTERVAL = 20000; // 20 seconds

// Mongodb connection
const mongodbURI = 'mongodb+srv://rishabhds1998:WIguNZwXI1EBNI5j@cluster0.3cqufa1.mongodb.net/live_crypto_prices?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongodbURI)
.then(() => {
    console.log('Mongodb connected!');
    app.listen(PORT , () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => console.log("Mongodb connection error : ",err));