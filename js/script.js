let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.46;
let rateUSD = 4.37;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let PLN = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = PLN / rateEUR;
            break;

        case "USD":
            result = PLN / rateUSD;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});
