import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Animated,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const progress = useRef(new Animated.Value(0)).current; // Animated value for the progress

  useEffect(() => {
    // Start the animation when the component mounts
    Animated.timing(progress, {
      toValue: 65, // Target value (e.g., 65%)
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: false, // Set to false for width animation
    }).start();
  }, [progress]);

  // Interpolate the animated value to a width percentage
  const animatedWidth = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <ScrollView style={styles.container}>
      {/* Welcome and Header Section */}
      <View style={styles.header}>
        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={{
                uri: "https://lh3.googleusercontent.com/a/AEdFTp6WWHMid_rPIbStVUiL6tsXnbppuw8K98gaVdij=s96-c",
              }}
              height={35}
              width={35}
              style={{ borderRadius: 1000 }}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.usernameText}>Nicolas Doflamingo ✌️</Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={28} color="#7F7F7F" />
      </View>

      {/* Workout Progress Section */}
      <View style={styles.progressSection}>
        <LinearGradient
          colors={["#FF6A6A", "#FF8A65"]}
          style={styles.progressCard}
        >
          <View style={styles.progressHeader}>
            <Text style={styles.progressText}>Workout Progress</Text>
            <Text style={styles.progressPercent}>65%</Text>
          </View>
          <View style={styles.progressBarBackground}>
            {/* Animated width for progress bar */}
            <Animated.View
              style={[styles.progressBarFill, { width: animatedWidth }]}
            />
          </View>
          <Text style={styles.exerciseLeft}>12 Exercises Left</Text>
        </LinearGradient>
      </View>

      {/* Remaining Sections (Activity and Status) */}
      <View style={styles.activitySection}>
        <Text style={styles.sectionTitle}>Today's Activity</Text>

        {/* Activity Item 1 */}
        <View style={styles.activityCard}>
          <View style={styles.activityInfo}>
            <MaterialCommunityIcons
              name="weight-lifter"
              size={30}
              color="#FF8A65"
            />
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Push-ups</Text>
              <Text style={styles.activityDetail}>15 x 3</Text>
            </View>
          </View>
          <Text style={styles.caloriesBurned}>350 Cal</Text>
        </View>

        {/* Activity Item 2 */}
        <View style={styles.activityCard}>
          <View style={styles.activityInfo}>
            <Ionicons name="accessibility" size={30} color="#FF8A65" />
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Squats</Text>
              <Text style={styles.activityDetail}>25 x 3</Text>
            </View>
          </View>
          <Text style={styles.caloriesBurned}>500 Cal</Text>
        </View>

        {/* Activity Item 3 */}
        <View style={styles.activityCard}>
          <View style={styles.activityInfo}>
            <MaterialCommunityIcons name="run" size={30} color="#FF8A65" />
            <View style={styles.activityDetails}>
              <Text style={styles.activityName}>Lunges</Text>
              <Text style={styles.activityDetail}>15 x 3</Text>
            </View>
          </View>
          <Text style={styles.caloriesBurned}>500 Cal</Text>
        </View>
      </View>

      {/* Overall Status Section */}
      <View style={styles.statusSection}>
        <Text style={styles.sectionTitle}>Overall Status</Text>
        <View style={styles.statusCard}>
          <View style={styles.statusItem}>
            <Text style={styles.statusName}>Calories Loss</Text>
            <Text style={styles.statusValue}>12,182 Kcal</Text>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusName}>Weight Loss</Text>
            <Text style={styles.statusValue}>10.7 Kg</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 20,
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: "#7F7F7F",
  },
  usernameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  progressSection: {
    marginVertical: 20,
  },
  progressCard: {
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  progressText: {
    fontSize: 16,
    color: "white",
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 4,
    marginTop: 10,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 4,
  },
  exerciseLeft: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
  },
  activitySection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  activityCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  activityInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityDetails: {
    marginLeft: 10,
  },
  activityName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  activityDetail: {
    fontSize: 14,
    color: "#7F7F7F",
  },
  caloriesBurned: {
    fontSize: 14,
    color: "#FF8A65",
  },
  statusSection: {
    marginBottom: 20,
  },
  statusCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  statusItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  statusName: {
    fontSize: 16,
    color: "#333",
  },
  statusValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF8A65",
  },
});

export default HomeScreen;
