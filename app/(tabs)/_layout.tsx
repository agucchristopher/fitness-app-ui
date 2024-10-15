import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Svg, { Circle, G, Path } from "react-native-svg";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) {
              return (
                <Svg width={25} height={25} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  />
                  <Path
                    d="M12 15L12 18"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  fill="none"
                  // xmlns="http://www.w3.org/2000/svg"
                >
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.33537 7.87495C1.79491 9.00229 1.98463 10.3208 2.36407 12.9579L2.64284 14.8952C3.13025 18.2827 3.37396 19.9764 4.54903 20.9882C5.72409 22 7.44737 22 10.8939 22H13.1061C16.5526 22 18.2759 22 19.451 20.9882C20.626 19.9764 20.8697 18.2827 21.3572 14.8952L21.6359 12.9579C22.0154 10.3208 22.2051 9.00229 21.6646 7.87495C21.1242 6.7476 19.9738 6.06234 17.6731 4.69181L16.2882 3.86687C14.199 2.62229 13.1543 2 12 2C10.8457 2 9.80104 2.62229 7.71175 3.86687L6.32691 4.69181C4.02619 6.06234 2.87583 6.7476 2.33537 7.87495ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15C11.25 14.5858 11.5858 14.25 12 14.25C12.4142 14.25 12.75 14.5858 12.75 15V18C12.75 18.4142 12.4142 18.75 12 18.75Z"
                    fill={color}
                  />
                </Svg>
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) {
              return (
                <Svg width={35} height={35} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M18.5397 7.7619L17.7046 12.7726C17.2831 15.3014 15.3014 17.2831 12.7726 17.7046L7.7619 18.5397C6.40826 18.7653 5.23471 17.5917 5.46032 16.2381L6.29543 11.2274C6.71691 8.69856 8.69856 6.71691 11.2274 6.29543L16.2381 5.46032C17.5917 5.23471 18.7653 6.40826 18.5397 7.7619Z"
                    stroke="#33363F"
                    stroke-linecap="round"
                  />
                  <Circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke="#2A4157"
                    stroke-opacity="0.24"
                    stroke-linecap="round"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg width={35} height={35} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M18.5397 7.7619L17.7046 12.7726C17.2831 15.3014 15.3014 17.2831 12.7726 17.7046L7.7619 18.5397C6.40826 18.7653 5.23471 17.5917 5.46032 16.2381L6.29543 11.2274C6.71691 8.69856 8.69856 6.71691 11.2274 6.29543L16.2381 5.46032C17.5917 5.23471 18.7653 6.40826 18.5397 7.7619Z"
                    stroke={color}
                    fill={color}
                    stroke-linecap="round"
                  />
                  <Circle
                    cx="12"
                    cy="12"
                    r="2.5"
                    stroke={color}
                    stroke-opacity="0.24"
                    stroke-linecap="round"
                    fill={"white"}
                  />
                </Svg>
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) {
              return (
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                  <Path
                    d="M3 7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7Z"
                    stroke="#000000"
                    stroke-width="2"
                  />
                  <Path
                    d="M8 11L8 16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <Path
                    d="M16 13L16 16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <Path
                    d="M12 8L12 16"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </Svg>
              );
            } else {
              return (
                <Svg width={30} height={30} viewBox="0 0 24 24">
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V8ZM8 10C8.55228 10 9 10.4477 9 11V16C9 16.5523 8.55229 17 8 17C7.44772 17 7 16.5523 7 16V11C7 10.4477 7.44772 10 8 10ZM16 12C16.5523 12 17 12.4477 17 13V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V13C15 12.4477 15.4477 12 16 12Z"
                    fill={color}
                  />
                </Svg>
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => {
            if (!focused) {
              return (
                <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                  <G id="SVGRepo_bgCarrier" stroke-width="0"></G>
                  <G
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></G>
                  <G id="SVGRepo_iconCarrier">
                    <Path
                      opacity="0.1"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.71297 5.1753C8.68625 5.62451 9.84239 5.1775 10.2547 4.18801C10.901 2.63687 13.0984 2.63687 13.7447 4.18801C14.157 5.1775 15.3132 5.62451 16.2864 5.1753C17.8968 4.43205 19.5676 6.10283 18.8243 7.71321C18.3751 8.68649 18.8221 9.84263 19.8116 10.2549C21.3628 10.9012 21.3628 13.0987 19.8116 13.745C18.8221 14.1573 18.3751 15.3134 18.8243 16.2867C19.5676 17.8971 17.8968 19.5678 16.2864 18.8246C15.3132 18.3754 14.157 18.8224 13.7447 19.8119C13.0984 21.363 10.901 21.363 10.2547 19.8119C9.84239 18.8224 8.68625 18.3754 7.71297 18.8246C6.10259 19.5678 4.4318 17.8971 5.17505 16.2867C5.62426 15.3134 5.17725 14.1573 4.18776 13.745C2.63663 13.0987 2.63663 10.9012 4.18776 10.2549C5.17725 9.84263 5.62426 8.68649 5.17505 7.71321C4.4318 6.10283 6.10259 4.43205 7.71297 5.1753ZM11.9997 8.74994C10.2048 8.74994 8.7497 10.205 8.7497 11.9999C8.7497 13.7949 10.2048 15.2499 11.9997 15.2499C13.7946 15.2499 15.2497 13.7949 15.2497 11.9999C15.2497 10.205 13.7946 8.74994 11.9997 8.74994Z"
                      fill="#323232"
                    ></Path>
                    <Path
                      d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
                      stroke="#323232"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></Path>
                    <Path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="#323232"
                      stroke-width="2"
                    ></Path>
                  </G>
                </Svg>
              );
            } else {
              return (
                <Svg width={30} height={30} viewBox="0 0 24 24" stroke={color}>
                  <Path
                    fill={color}
                    stroke={color}
                    d="M10.255 4.18806C9.84269 5.17755 8.68655 5.62456 7.71327 5.17535C6.10289 4.4321 4.4321 6.10289 5.17535 7.71327C5.62456 8.68655 5.17755 9.84269 4.18806 10.255C2.63693 10.9013 2.63693 13.0987 4.18806 13.745C5.17755 14.1573 5.62456 15.3135 5.17535 16.2867C4.4321 17.8971 6.10289 19.5679 7.71327 18.8246C8.68655 18.3754 9.84269 18.8224 10.255 19.8119C10.9013 21.3631 13.0987 21.3631 13.745 19.8119C14.1573 18.8224 15.3135 18.3754 16.2867 18.8246C17.8971 19.5679 19.5679 17.8971 18.8246 16.2867C18.3754 15.3135 18.8224 14.1573 19.8119 13.745C21.3631 13.0987 21.3631 10.9013 19.8119 10.255C18.8224 9.84269 18.3754 8.68655 18.8246 7.71327C19.5679 6.10289 17.8971 4.4321 16.2867 5.17535C15.3135 5.62456 14.1573 5.17755 13.745 4.18806C13.0987 2.63693 10.9013 2.63693 10.255 4.18806Z"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <Path
                    d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                    stroke={color}
                    fill={"white"}
                    stroke-width="1"
                  />
                </Svg>
              );
            }
          },
        }}
      />
    </Tabs>
  );
}
