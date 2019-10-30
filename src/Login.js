import React from 'react';

import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  BackHandler,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {connect} from 'react-redux';

// import {Colors, styles} from '../../common/variables';

class HeaderTitle extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            color: Colors.whiteColor,
            fontWeight: 'bold',
            fontFamily: 'roboto',
            fontSize: 20,
          }}>
          Login
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    goOffline: () =>
      dispatch({type: 'Offline/STATUS_CHANGED', payload: {online: false}}),
    goOnline: () =>
      dispatch({type: 'Offline/STATUS_CHANGED', payload: {online: true}}),
    setUser: data => dispatch({type: 'SET_USER', payload: data}),
  };
};

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      login: true,
      auth: true,
    };

    this.doLogin = this.doLogin.bind(this);
  }

  static navigationOptions = ({navigation}) => {
    return {headerTitle: <HeaderTitle />};
  };

  static goBack(navigation) {
    navigation.navigate('Home');
  }

  componentDidMount() {
    console.warn(this.props.user);
    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackPress,
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  profile() {
    return this.props.user ? (
      <View>
        <Text>Email :</Text>
        <Text>{this.props.user.user.email}</Text>
        <Text>Password :</Text>
        <Text>{this.props.user.user.password}</Text>
      </View>
    ) : null;
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Tabs'); // works best when the goBack is async
    return true;
  };

  doLogin() {
    console.warn(this.state);
    this.props.setUser(this.state);
    this.setState({auth: false});
  }

  render() {
    return this.state.auth ? (
      <View
        style={{
          flex: 1,
          backgroundColor: '#f4fafb',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="#42979b" />
        <View
          style={{
            flex: 1,
            padding: 20,
          }}>
          <ScrollView>
            <View
              style={{
                backgroundColor: '#fff',
                padding: 24,
                marginVertical: 10,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: '#eee',
              }}>
              <TextInput
                style={{
                  height: 60,
                  borderBottomWidth: 1,
                  borderColor: '#eee',
                }}
                value={this.state.email}
                onChangeText={email => {
                  this.setState({email});
                }}
                returnKeyType={'next'}
                onSubmitEditing={event => {
                  this.refs.password.focus();
                }}
                placeholder="Email"
              />
              <TextInput
                style={{
                  height: 60,
                  borderBottomWidth: 1,
                  borderColor: '#eee',
                }}
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={password => {
                  this.setState({password});
                }}
                ref="password"
                placeholder="Password"
              />
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple()}
                onPress={this.doLogin}>
                <View
                  style={{
                    backgroundColor: '#455A64',
                    borderRadius: 2,
                    marginVertical: 10,
                    padding: 10,
                    height: 40,
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontFamily: 'roboto',
                    }}>
                    {' '}
                    LOGIN
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Signup')}>
              <Text style={{color: '#56c5d0', fontSize: 14}}>
                {' '}
                No Account? SIGNUP{' '}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    ) : (
      this.profile()
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
