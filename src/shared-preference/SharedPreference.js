import DefaultPreference from 'react-native-default-preference';

class SharedPreference {
  static instance = null;

  static getInstance() {
    if (SharedPreference.instance === null) {
      SharedPreference.instance = new SharedPreference();
    }

    return this.instance;
  }

  saveToken =  (deepLink) => {
    var url = deepLink.split("?");
    var token = url[1].replace("token=", '');
    if (token !== undefined) {
      this.setUserToken(token);
      this.setSignUp(true)
    }
  }

  setUserToken(token) {
    DefaultPreference.set('token', token).then(function () {
      console.log('TOKEN USER [' + token + '] WAS STORED');
    });
  }

  getUserToken(onSuccess) {
    DefaultPreference.get('token').then(function(value) {
        onSuccess(value);
    });
  }

  setSignUp(value){
    DefaultPreference.set('signUp', value.toString()).then(function () {
        console.log('LOGIN [' + value + '] WAS STORED');
      });
  }

  getSignUp(onSuccess){
    DefaultPreference.get('signUp').then(function(value) {
        console.log("GET SESSION : "+  value );
        if (value === "true"){
            onSuccess(true);
        } else{
            onSuccess(false);
        } 
    });
  }

}
export default SharedPreference;
