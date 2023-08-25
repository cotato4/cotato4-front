import { Text, View, StyleSheet, Image ,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SellerScreen = () => {

  const navigation = useNavigation();

  const handleGoToSellerDetailScreen=()=>{
    navigation.navigate('SellerDetailScreen')
  }

  return (
    <View>
      <Image 
        source={{uri:'https://velog.velcdn.com/images/thgus05061/post/a32469f0-ac24-4db1-a6e1-c4cc4f8ef039/image.png'}}
        style={styles.logoImage}
      />
      <Text style={styles.text}>지금 회원님이랑 가장 가까운 지하철역을 찾았어요!</Text>

      <View style={styles.LocationButton}>
      <Text style={{color:'#0075FF',padding:4,left:8,}}>현 위치: </Text>
      </View>

      <TouchableOpacity onPress={handleGoToSellerDetailScreen}>
      <View style={styles.subwayButton}>
        <Text></Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.subwayButton}>
        <Text></Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={styles.subwayButton}>
        <Text></Text>
      </View>
      </TouchableOpacity>
    </View>
  );
};
export default SellerScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage:{
    width:138,
    height:23,
    marginTop:50,
    left:20,
  },
  text:{
    fontSize:16,
    fontStyle:'normal',
    fontWeight:'400',
    marginTop:152,
    color:'#6C91DF',
    alignSelf:'center',
  },
  LocationButton:{
    width:134,
    height:30,
    backgroundColor:'#FFFFFF',
    alignSelf:'center',
    marginTop:40,
    borderRadius:20,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    marginBottom:40,

  },
  subwayButton:{
    width:329,
    height:76,
    backgroundColor:'#BBD4FC',
    borderRadius:10,
    marginBottom:26,
    alignSelf:'center',
  },
});