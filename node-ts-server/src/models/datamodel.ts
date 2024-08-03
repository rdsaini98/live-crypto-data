import mongoose from 'mongoose';

// interface ICryptocurrency extends Document{
//     id : string;
//     symbol : string;
//     name : string;
// }
const Schema = mongoose.Schema;

const CryptocurrenciesSchema = new Schema({
    _id : Schema.ObjectId,
    id: String,
    symbol: String,
    name: String
});

const CryptocurrenciesModel = mongoose.model('cryptocurrencies',CryptocurrenciesSchema);

export default CryptocurrenciesModel;