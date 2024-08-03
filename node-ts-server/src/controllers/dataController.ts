import {Request,Response} from 'express';
import CryptocurrenciesModel from '../models/datamodel';

export const getRecentData = async(req : Request, res : Response) => {
    try{
        let data = await CryptocurrenciesModel.find({});
        console.log("cryptos list : ",data);
        res.json(data);
    } catch(error){
        res.status(500).json({message : "Error fetching data"});
    }
};

export const ping = (req : Request, res : Response) => {
    res.json({message : "Hello world!"});
};