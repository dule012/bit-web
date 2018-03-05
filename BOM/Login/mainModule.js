var mainModule = (function (UlModule, dataModule) {

    function addLoginButtonLisetener() {

        document.querySelector(UlModule.UlSelectors.buttonSelector).addEventListener("click", function () {

            // procitati podatke iz formulara
            var formData = UlModule.getFormData();


            // validirati podatke 
            var validationResult = UlModule.validateData(formData.username, formData.password)
            if (validationResult == UlModule.status.MISSING_DATA) {
                UlModule.setError(UlModule.status.MISSING_DATA);
                return;
            }

            // proveriti da li korisnik postoji
            var checkUsernameAndPasswordResult = dataModule.checkUsernameAndPassword(formData.username, formData.password);
            if (checkUsernameAndPasswordResult == false) {
                UlModule.setError(UlModule.status.WRONG_DATA);
                return;
            }

            UlModule.setError(UlModule.status.OK);

        });
    }
    return {
        init: function() {
            console.log("lets go ...");
            addLoginButtonLisetener();
            
        }
    }

})(UlModule, dataModule);

mainModule.init();