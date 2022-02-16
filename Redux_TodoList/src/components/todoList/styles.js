import {StyleSheet} from 'react-native';

const List = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  ComponentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },
  ListContainer: {
    backgroundColor: 'whitesmoke',
    height: 'auto',
    width: 380,
    marginTop: 30,
    borderRadius: 10,
  },
  Text: {
    color: 'black',
    width: 260,
    height: 'auto',
    fontSize: 20,
    marginTop: 10,
    marginRight: 20,
    fontFamily: 'poppins-regular',
    padding: 10,
  },
  btn: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 50,
    margin: 10,
  },
});

export default List;
