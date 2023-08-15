{

    const calculateResult = (PLN, currency) => {
        const rateEUR = 4.46;
        const rateUSD = 4.37;

        switch (currency) {
            case "EUR":
                return PLN / rateEUR;

            case "USD":
                return PLN / rateUSD;
        }
    };

const updateResultText = (result, currency) => {
    const resultElement = document.querySelector(".js-result");
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
}

    const onFormSubmit = (event) => {
        event.preventDefault();


        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        

        const PLN = amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(PLN, currency);

updateResultText (result, currency);  
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
