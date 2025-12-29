import express from "express";
import { getCoinBuyersSellers } from './public/src/server.js'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.render("index.ejs", {

    });
});

app.get("/getCoin/:coin", async (req, res) => {

    const coin = req.params.coin;
    const currency = req.query.currency;

    console.log("XD " + currency);

    getCoinBuyersSellers(coin, currency);

});


app.listen(port, () => {
    console.log("App is working on port 3000.");
});