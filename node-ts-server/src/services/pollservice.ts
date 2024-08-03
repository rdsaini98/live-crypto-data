import axios from 'axios';
import Data from '../models/datamodel';

const COINGECKO_API_URL = "api.coingecko.com/api/v3/simple/price";

export const pollApi = async() => {
    try{
        const response = await axios.get(COINGECKO_API_URL);
        const newData = new Data({value: response.data});
        await newData.save();
        console.log("New data fetched for cryptocurrencies");
    } catch (error){
        console.log("Error in polling data",error);
    }
};

export const startPolling = (interval : number) => {
    setInterval(pollApi,interval);
}