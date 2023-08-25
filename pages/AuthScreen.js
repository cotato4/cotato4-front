import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  const handleSignUp = () => {
    const userData = {
      email,
      nickname,
      phoneNumber,
      password,
    };

    fetch("http://43.200.138.39:8080/user/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("서버 응답:", data);
      });
    navigation.navigate("LoginScreen");
  };

  return (
    <>
      <Image
        source={{
          uri: "https://velog.velcdn.com/images/thgus05061/post/a32469f0-ac24-4db1-a6e1-c4cc4f8ef039/image.png",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>회원가입</Text>
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="이메일"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="비밀번호 확인"
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="닉네임"
            value={nickname}
            onChangeText={setNickname}
          />
        </View>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            placeholder="전화번호"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>가입하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: "center",
  },
  image: {
    width: 133,
    height: 23,
    marginTop: 76,
    left: 33,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 14,
    marginBottom: 25,
    left: 42,
  },
  loginContainer: {
    width: 320,
    height: 45,
    backgroundColor: "#D0DDF6",
    borderRadius: 10,
    marginTop: 24,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 9,
    left: 4,
  },
  loginButton: {
    width: 304,
    height: 45,
    backgroundColor: "#6C91DF",
    borderRadius: 10,
    marginTop: 166,
  },
  loginText: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 14,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  signinText: {
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 14,
    color: "#000000",
    left: 110,
  },
});
export default AuthScreen;
