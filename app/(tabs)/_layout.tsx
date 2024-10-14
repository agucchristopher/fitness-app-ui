import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Svg, { Circle, Path } from "react-native-svg";

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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "code-slash" : "code-slash-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
