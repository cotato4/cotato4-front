import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AnnouncementScreen from "../pages/AnnouncementScreen";
import CommunityScreen from "../pages/CommunityScreen";
import SellerScreen from "../pages/SellerScreen";
import FavoriteScreen from "../pages/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#4893EB",
      }}
    >
      <Tab.Navigator
        initialRouteName="StartScreen"
        screenOptions={() => ({
          tabBarStyle: {
            backgroundColor: "#BBD4FC",
            height: 60,
            width: "100%",
          },
        })}
      >
        <Tab.Screen
          name="SellerScreen"
          component={SellerScreen}
          options={{
            headerShown: false,
            tabBarLabel: "판매",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -10,
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: -10,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{
            headerShown: false,
            tabBarLabel: "구매",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -10,
            },
            tabBarIcon: () => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: -10,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"AnnoucementScreen"}
          component={AnnouncementScreen}
          options={{
            headerShown: false,
            tabBarLabel: "마이페이지",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -10,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: -10,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"FavoriteScreen"}
          component={FavoriteScreen}
          options={{
            headerShown: false,
            tabBarLabel: "쪽지",
            tabBarLabelStyle: {
              fontSize: 12,
              color: "#FFFFFF",
              top: -10,
            },
            tabBarIcon: ({ focused }) => (
              <Image
                source={{
                  uri: "https://velog.velcdn.com/images/kkaerrung/post/5bd78097-aebb-48ac-91b5-8a9b9ccd7e9f/image.png",
                }}
                style={{
                  top: -10,
                  width: 7,
                  height: 7,
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingBottom: 0,
  },
});
