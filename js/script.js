
const elForm = document.querySelector (".form");

const elFormInput = document.querySelector (".form-control");

const elFormSelector = document.querySelector (".form-select");

const elFormResult = document.querySelector (".form__result");

elForm.addEventListener ("submit", function (evt) {
    evt.preventDefault();

    const inputUserMoney = elFormInput.value;
    const selectCurrency = elFormSelector.value;

    if (selectCurrency == "uzsumTo_usd") {

        const exchangeMoney = Math.round(inputUserMoney / 11092.5);

        elFormResult.textContent = `$ ${exchangeMoney}`

    } else if (selectCurrency == "uzsumTo_euro") {

        const exchangeMoney = Math.round (inputUserMoney / 11735.6);

        elFormResult.textContent = `${exchangeMoney}`

    } else if (selectCurrency == "uzsumTo_tenge") {

        const exchangeMoney = Math.round (inputUserMoney / 26.27);

        elFormResult.textContent = `${exchangeMoney}`

    } else if (selectCurrency == "usdTo_uzsum") {

        const exchangeMoney = Math.round (inputUserMoney * 11092.5);

        elFormResult.textContent = `${exchangeMoney} UZS`

    } else if (selectCurrency == "euroTo_uzsum") {

        const exchangeMoney = Math.round (inputUserMoney * 11735.6);

        elFormResult.textContent = `${exchangeMoney} UZS`

    } else if (selectCurrency == "tengeTo_uzsum") {

        const exchangeMoney = Math.round (inputUserMoney * 26.27);

        elFormResult.textContent = `${exchangeMoney} UZS`

    }

})