import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export const getPhoto = (onSuccess, onError) => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      saveToPhotos: true,
      quality: 0.5,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        onError('user cancelled image picker');
      } else if (response.error) {
        onError('ImagePicker Error: ' + error)
      } else {
        console.log('response: ' + JSON.stringify(response.uri));
        //setImageProfile(response.uri);
        onSuccess(response.uri)
      }
    });
};