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
import { useReceivedNumber } from "../context/userid";

const LoginScreen = () => {
const { setReceivedNumber } = useReceivedNumber();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    const userData = {
      email,
      password,
    };

    console.log("전송할 userData:", userData);

    fetch("http://43.200.138.39:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("서버 응답:", data);
        setReceivedNumber(data.number);  
        navigation.navigate("HomeScreen"); 
      });
    };

  
  return (
    <>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://velog.velcdn.com/images/thgus05061/post/b8778508-bed3-4d5c-9601-245fb1a605ea/image.png",
          }}
          style={styles.image}
        />
        <Text style={styles.text}>우산 중고거래 서비스</Text>
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
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>로그인</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.signinText}>회원가입</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 161,
    height: 168,
    marginTop: 132,
  },
  text: {
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: 14,
    marginBottom: 25,
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
    marginTop: 39,
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
export default LoginScreen;
