import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import UserContext from "../contexts/UserContext";

const axios = require("axios").default;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.login = this.login.bind(this);
  }

  login = () => {
    const { email, password } = this.state;
    const { setLoggedIn } = this.context;

    axios
      .get("http://10.0.2.2:3000/get-user-credentials")
      .then(function (response) {
        if (
          response.data[0].email === email &&
          response.data[0].password === password
        )
          setLoggedIn(true);
        else {
          Alert.alert("Error", "wrong email or password");
        }
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Image
            source={require("../assets/logo.jpg")}
            alt="image"
            style={styles.image}
          />
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={styles.input1}
            placeholder="password"
            onChangeText={(password) => this.setState({ password })}
          />
          <TouchableOpacity style={styles.button}>
            <Button title="Login" color="white" onPress={this.login} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Login.contextType = UserContext;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center",
  },

  image: {
    marginTop: 110,
    height: 200,
    width: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "lightgrey",
    marginTop: 60,
    marginBottom: 20,
    padding: 8,
    width: 200,
    paddingLeft: 20,
  },
  input1: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "lightgrey",
    marginBottom: 40,
    padding: 8,
    width: 200,
    width: 200,
  },
  button: {
    backgroundColor: "#fb607f",
    borderRadius: 12,
    marginLeft: 15,
    padding: 1,
    width: 160,
    height: 40,
  },
});
