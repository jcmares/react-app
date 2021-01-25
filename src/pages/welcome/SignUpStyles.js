import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    width: '100%',
    height: '100%',
  },
  titleH: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    top: 650,
    paddingHorizontal: 30,
  },
  logo: {
    width: 147,
    height: 73,
    resizeMode: 'contain',
  },
  logoContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 21,
  },
  privacyContainer: {
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    padding: 31,
  },
  legendPrivacy: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#668BB2',
  },
});

export default styles;
