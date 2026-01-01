import axios from 'axios';

const baseURL = "https://api.blockchain.com/v3/exchange";

export async function getCoinBuyersSellers(coin , currency){

    try{

        const response = await axios.get(`${baseURL}/l2/${coin}-${currency}`);
        const data = response.data;

        return {
            bestBid: {
                price: data.bids[0].px,
                quantity: data.bids[0].qty
            },
            bestAsk: {
                price: data.asks[0].px,
                quantity: data.asks[0].qty
            }
        };

    }
    catch (error){
        console.log(error);
    }
}

export async function getCoinCurrentPrice(coin, currency){

    try{

        const response = await axios.get(`${baseURL}/tickers/${coin}-${currency}`);
        const data = response.data;

        return {
            lastTradePrice: data.last_trade_price
        };

    }
    catch (error){
        console.log(error);
    }
}


