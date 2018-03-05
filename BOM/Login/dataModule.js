var dataModule = (function () {

    function User(username, password) {
        this.username = username;
        this.password = password;
    }

    function DataBase() {
        this.database = [];

    }

    DataBase.prototype.checkUsername = function (username) {
        var userExist = false;
        this.database.forEach(function (user) {
            if (user.username == username) {
                userExist = true;
                return;
            }
        });

        return userExist;
    }

    DataBase.prototype.checkUsernameAndPassword = function (username, password) {
        var userExist = false;
        this.database.forEach(function (user) {
            if (user.username == username && user.password == password) {
                userExist = true;
                return;
            }
        });

        return userExist;
    }




    DataBase.prototype.addUser = function (user) {
        // var user = new User(username, password);

        if (this.checkUsername(user.username) == false) {
            this.database.push(user);
        }

    }



    //pravimo bazu podataka
    var database = new DataBase();
    //pravimo korisnike
    var pera = new User('pera', 'pera123');
    var zika = new User('zika', 'zika13413');

    database.addUser(pera);
    database.addUser(zika);

    return {
        checkUsernameAndPassword :  function(username, password){
        database.checkUsernameAndPassword(username, password);
        }
     }

    // if(database.checkUsernameAndPassword('pera', 'pera123')) {
    //     console.log("user exist");
        
    // } else {
    //     console.log("user does not exist");
        
    // }

})();