import axios from 'axios';

const baseURL = "https://api.blockchain.com/v3/exchange";

export async function getCoinBuyersSellers(coin , currency){

    try{

        const response = await axios.get(`${baseURL}/l2/${coin}-${currency}`);
        const data = response.data;

        const currentBuyingPrice = data.bids[0].px;
        const currentBuyingQuantity = data.bids[0].qty;
        const currentAsksPrice = data.asks[0].px;
        const currentAsksQuantity = data.asks[0].qty;

        const response1 = `Someone is willing to buy ${currentBuyingQuantity} ${coin} at $${currentBuyingPrice} (This is currently the highest bid (best buy price).)`
        const response2 = `Someone wants to sell ${currentAsksQuantity} ${coin} at $${currentAsksPrice} This is the lowest ask (best sell price).)`
        console.log(response1);
        console.log(response2);

    }
    catch (error){
        console.log(error);
    }
}

// function coinNameFun(coin){

//     let coinName;

//     switch(coin){
//         case "BTC-USD":
//         coinName = "Bitcoin";
//         break;
//         case "ETH-USD"
//     }
// }


