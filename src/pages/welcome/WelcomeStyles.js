import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 208,
    height: 103,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    alignItems: 'center',
  },
  image: {
    width: 133,
    height: 133,
    resizeMode: 'contain',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  buttonAlign: {
    position: 'absolute',
    top: 650,
    width: '70%',
  },
  linkAlign: {
    position: 'absolute',
    top: 720,
  },
  modalContainer: {
    width: '100%',
    height: '80%',
    backgroundColor: '#003E7E',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle:{
      fontSize: 32,
      color:'#FFFFFF',
      fontWeight: 'bold',
  },
  modalText:{
    fontSize: 16,
    color:'#FFFFFF',
},
});

export default styles;
