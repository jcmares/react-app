import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
    paddingStart: 40,
    paddingEnd: 40,
  },
  titleH: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#9E9E9E',
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
    fontSize: 14,
  },
  buttonContainer: {
    width: 183,
    right: 40,
    top: 650,
    position: 'absolute',
  },
  profileImg:{
      width: 120,
      height: 120,
      borderRadius: 60,
  },
  iconCamera: {
    width: 25,
    height: 25,
    position: 'absolute',
    bottom: 5,
    right: 0,
  }
});

export default styles;
