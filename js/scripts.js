//catch all necessary objects
let navigation__themeButton = document.querySelector(".js-navigation__themeButton");
let body = document.querySelector(".body");
let navigationCurrency = document.querySelector(".js-navigation__radioElement");
let navigationForm = document.querySelector(".js-navigation__form");
let currencyField = document.querySelector(".js-currency__field");
let cryptoCurrencyField = document.querySelector(".js-cryptoCurrencyField");
let baseCurrency = document.querySelector(".js-currency__baseCurrency");
let currencyInput = document.querySelector(".js-currency__input");
let currencyOutput = document.querySelector(".js-currency__output");
let quoteCurrency = document.querySelector(".js-currency__quoteCurrency");
let baseCryptocurrency = document.querySelector(".js-cryptoCurrency__baseCryptocurrency");
let quoteCryptocurrency = document.querySelector(".js-cryptoCurrency__quoteCryptocurrency");
let cryptoCurrencyInput = document.querySelector(".js-cryptoCurrency__input");
let cryptoCurrencyOutput = document.querySelector(".js-cryptoCurrency__output");

//Set default disabled for 2 sections
cryptoCurrencyField.setAttribute("disabled", "");
currencyField.setAttribute("disabled", "");

navigation__themeButton.addEventListener("click", () => {
    body.classList.toggle("bodyTheme");
    navigation__themeButton.classList.toggle("navigation__themeButtonColor");
});

//watching navigation input for select currency
navigationForm.addEventListener("input", () => {
    if (navigationCurrency.checked === true) {
        cryptoCurrencyField.setAttribute("disabled", "");
        currencyField.removeAttribute("disabled");
    }
    else {
        currencyField.setAttribute("disabled", "");
        cryptoCurrencyField.removeAttribute("disabled");
    }
})

//calculate values
currencyField.addEventListener("input", () => {

    if (currencyInput.value < 0 ||
        currencyInput.value === "00" ||
        currencyInput.value === "-0") {
        currencyInput.value = 0;
    }
    switch (baseCurrency.value) {
        case "EUR":
            switch (quoteCurrency.value) {
                case "EUR":
                    currencyOutput.value = currencyInput.value;
                    break;
                case "GBP":
                    currencyOutput.value = currencyInput.value * 0.87;
                    break;
                case "PLN":
                    currencyOutput.value = currencyInput.value * 4.71;
                    break;
                case "USD":
                    currencyOutput.value = currencyInput.value * 1.03;
                    break;
            }
            break;
        case "GBP":
            switch (quoteCurrency.value) {
                case "EUR":
                    currencyOutput.value = currencyInput.value * 1.15;
                    break;
                case "GBP":
                    currencyOutput.value = currencyInput.value;
                    break;
                case "PLN":
                    currencyOutput.value = currencyInput.value * 5.41;
                    break;
                case "USD":
                    currencyOutput.value = currencyInput.value * 1.19;
                    break;
            }
            break;
        case "PLN":
            switch (quoteCurrency.value) {
                case "EUR":
                    currencyOutput.value = currencyInput.value * 0.21;
                    break;
                case "GBP":
                    currencyOutput.value = currencyInput.value * 0.18;
                    break;
                case "PLN":
                    currencyOutput.value = currencyInput.value;
                    break;
                case "USD":
                    currencyOutput.value = currencyInput.value * 0.22;
                    break;
            }
            break;
        case "USD":
            switch (quoteCurrency.value) {
                case "EUR":
                    currencyOutput.value = currencyInput.value * 0.97;
                    break;
                case "GBP":
                    currencyOutput.value = currencyInput.value * 0.84;
                    break;
                case "PLN":
                    currencyOutput.value = currencyInput.value * 4.56;
                    break;
                case "USD":
                    currencyOutput.value = currencyInput.value;
                    break;
            }
            break;
    }
});

cryptoCurrencyField.addEventListener("input", () => {
    if (cryptoCurrencyInput.value < 0 ||
        cryptoCurrencyInput.value === "00" ||
        cryptoCurrencyInput.value === "-0") {
        cryptoCurrencyInput.value = 0;
    }
    switch (baseCryptocurrency.value) {
        case "BTC":
            switch (quoteCryptocurrency.value) {
                case "BTC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value;
                    break;
                case "ETH":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 14.19;
                    break;
                case "USDC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 16568;
                    break;
            }
            break;
        case "ETH":
            switch (quoteCryptocurrency.value) {
                case "BTC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 0.07;
                    break;
                case "ETH":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value;
                    break;
                case "USDC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 1180;
                    break;
            }
            break;
        case "USDC":
            switch (quoteCryptocurrency.value) {
                case "BTC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 0.00006;
                    break;
                case "ETH":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value * 0.00085;
                    break;
                case "USDC":
                    cryptoCurrencyOutput.value = cryptoCurrencyInput.value;
                    break;
            }
            break;

    }
});