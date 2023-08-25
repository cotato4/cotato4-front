import { Text, View } from "react-native";
import Searchbar from "../common/Searchbar";
import HomeScreenMap from "../common/HomeScreenMap";

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Searchbar />
      <HomeScreenMap />
    </View>
  );
};
export default HomeScreen;
