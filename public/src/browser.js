let selectedCurrency = "EUR";


function changeCurrency(){

    const currencyType = document.querySelectorAll(".currencyCheck");
    const usdCurrency = document.getElementById("usdCurrency");
    const eurCurrency = document.getElementById("eurCurrency");

    currencyType.forEach(currency => {
        currency.addEventListener("click", () => {

            const currencyID = currency.id;

            if(currencyID === "usdCurrency" && currency.classList.contains("unchecked")){
                eurCurrency.classList.remove("checked");
                eurCurrency.classList.add("unchecked");
                usdCurrency.classList.remove("unchecked");
                usdCurrency.classList.add("checked");

                selectedCurrency = "USD"

            }
            else if(currencyID === "eurCurrency" && currency.classList.contains("unchecked")){
                usdCurrency.classList.remove("checked");
                usdCurrency.classList.add("unchecked");
                eurCurrency.classList.remove("unchecked");
                eurCurrency.classList.add("checked");

                selectedCurrency = "EUR"
            }
            
        });
    });

};

function currencyChoice(){

    const cryptoChoice = document.querySelectorAll(".crypto-choice a")

    cryptoChoice.forEach(link => {

    link.addEventListener("click", (e) => {
        e.preventDefault();

        console.log(selectedCurrency);

        const coin = link.href.split("/").pop();
        window.location.href = `/getCoin/${coin}?currency=${selectedCurrency}`;
    });
});
}



changeCurrency();
currencyChoice();