var UlModule = (function () {

    var UlSelectors = {
        usernameSelector: "#username",
        passwordSelector: "#password",
        errorSelector: "#error-block",
        buttonSelector: "#login-button"
    }

    var usernameInput = document.querySelector(UlSelectors.usernameSelector);
    var passwordInput = document.querySelector(UlSelectors.passwordSelector);
    var errorBLock = document.querySelector(UlSelectors.errorSelector);

    var status = {
        OK: "OK",
        MISSING_DATA: "Please insert username and/or password",
        WRONG_DATA: "Please insert username and/or password"
    };

    // dohvatiti podatke
    function getFormData() {
        var formData = {};
        formData.username = usernameInput.value;
        formData.password = passwordInput.value;

        return formData;
    }

    //validacija podataka
    function validateData(username, password) {
        if (username == "" || password == "") {
            return status.MISSING_DATA;
        }
        return status.OK;
    }

    //prikazati greske
    function setError(message) {
        errorBlock.textContent = message;
    }

    // brisanje gresaka
    function clearError(message) {
        errorBlock.textContent = "";
    }

    return {
        getFormData: getFormData,
        validateData: validateData,
        setError: setError,
        clearError: clearError,
        status: status,
        UlSelectors: UlSelectors
    }


})();