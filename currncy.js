let APIKEY = "207a5fc02fa07eba94c2978b";
let API=`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`;

const fromdropdown = document.getElementById("from-currency-select");
const todropdown = document.getElementById("to-currency-select");
const resetBtn = document.getElementById("reset-button");
const amount = document.getElementById("amount");
const result = document.getElementById("result"); // Fixed typo here
const convert = document.getElementById("convert-button");

resetBtn.addEventListener('click', () => resetpage());

function resetpage() {
    console.log("Resetting the page!");
    amount.value = "";
    result.innerHTML = ""; // Fixed typo here
}

// Populate dropdown options from the array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromdropdown.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    todropdown.add(option);
});

// Set default values
fromdropdown.value = "USD";
todropdown.value = "INR";

let convertcurrency = () => {
    const fromcurrency = fromdropdown.value;
    const tocurrency = todropdown.value;

    // If the amount input field is not empty
    if (amount.value.length != 0) {
        fetch(API)
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                let fromExchangerate = data.conversion_rates[fromcurrency];
                let toExchangerate = data.conversion_rates[tocurrency];
                const convertedamount = ((amount.value) / fromExchangerate) * toExchangerate;
                result.innerHTML = `${amount.value} ${fromcurrency} = ${convertedamount.toFixed(2)} ${tocurrency}`;
            })
            .catch((error) => {
                console.error("Error fetching the data:", error);
                result.innerHTML = "Error fetching conversion rates. Please try again later.";
            });
    }
}

// Fixed function reference here (no parentheses)
convert.addEventListener('click', convertcurrency);

































































































































































