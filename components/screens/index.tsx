//@ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ActivityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: "https://via.placeholder.com/40" }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.userName}>Nicolas Doflamingo! 👋</Text>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationCount}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Progress Card */}
      <View style={styles.progressCard}>
        <View style={styles.progressInfo}>
          <Text style={styles.progressTitle}>Workout Progress</Text>
          <Text style={styles.exerciseLeft}>12 Exercise left</Text>
        </View>
        <View style={styles.progressCircle}>
          <Text style={styles.progressPercentage}>65%</Text>
        </View>
      </View>

      {/* Today's Activity */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Today's Activity</Text>
        <TouchableOpacity>
          <Text style={styles.editButton}>Edit ✎</Text>
        </TouchableOpacity>
      </View>

      {/* Calories Card */}
      <View style={styles.activityContainer}>
        <LinearGradient
          colors={["#E57373", "#EF5350"]}
          style={styles.caloriesCard}
        >
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🏋️</Text>
          </View>
          <Text style={styles.caloriesText}>1,350</Text>
          <Text style={styles.caloriesLabel}>Calories</Text>
        </LinearGradient>

        {/* Exercise List */}
        <View style={styles.exerciseList}>
          <ExerciseItem
            name="Push-ups"
            muscles="Biceps, triceps, shoulders"
            reps="15 x3"
            color="#E57373"
          />
          <ExerciseItem
            name="Squads"
            muscles="calves, legs, thighs"
            reps="25 x3"
            color="#64B5F6"
          />
          <ExerciseItem
            name="Lunges"
            muscles="calves, hamstrings, glutes"
            reps="15 x3"
            color="#4FC3F7"
          />
        </View>
      </View>

      {/* Overall Status */}
      <View style={styles.statusSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overall Status</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See more →</Text>
          </TouchableOpacity>
        </View>

        <StatusItem
          icon="🔥"
          title="Calories Loss"
          value="12,182 Kcal"
          increase="+2.8%"
          progress={37}
        />
        <StatusItem
          icon="⚖️"
          title="Weight Loss"
          value="10.7 Kg"
          increase="+2.8%"
          progress={80}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>📊</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const ExerciseItem = ({ name, muscles, reps, color }) => (
  <View style={styles.exerciseItem}>
    <View style={[styles.exerciseIndicator, { backgroundColor: color }]} />
    <View style={styles.exerciseInfo}>
      <Text style={styles.exerciseName}>{name}</Text>
      <Text style={styles.exerciseMuscles}>{muscles}</Text>
    </View>
    <Text style={styles.exerciseReps}>{reps}</Text>
  </View>
);

const StatusItem = ({ icon, title, value, increase, progress }) => (
  <View style={styles.statusItem}>
    <View style={styles.statusInfo}>
      <Text style={styles.statusIcon}>{icon}</Text>
      <View>
        <Text style={styles.statusTitle}>{title}</Text>
        <View style={styles.statusValues}>
          <Text style={styles.statusValue}>{value}</Text>
          <Text style={styles.statusIncrease}>{increase}</Text>
        </View>
      </View>
    </View>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
  },
  notificationBadge: {
    backgroundColor: "#FF4081",
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationCount: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  progressCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  exerciseLeft: {
    color: "#999",
    fontSize: 14,
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#4FD1C5",
    alignItems: "center",
    justifyContent: "center",
  },
  progressPercentage: {
    color: "#4FD1C5",
    fontSize: 16,
    fontWeight: "600",
  },
  // ... rest of the styles
});

// DiscoverScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const DiscoverScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <TouchableOpacity style={styles.notificationBadge}>
          <Text style={styles.notificationCount}>2</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Popular Exercises */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Exercises</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See more →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ExerciseCard
              title="Home Workout"
              exercises={12}
              rating={4.9}
              image="workout1.jpg"
              backgroundColor="#E57373"
            />
            <ExerciseCard
              title="Hand Exercise"
              exercises={12}
              rating={4.9}
              image="workout2.jpg"
              backgroundColor="#424242"
            />
          </ScrollView>
        </View>

        {/* Our Collection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Collection</Text>

          <CollectionCard
            title="Chest & abdominal exercises"
            exercises={12}
            image="chest.jpg"
            backgroundColor="#FFE0B2"
          />

          <CollectionCard
            title="Back & shoulder exercises"
            exercises={12}
            image="back.jpg"
            backgroundColor="#E1BEE7"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {/* ... similar to ActivityScreen */}
      </View>
    </SafeAreaView>
  );
};

// StatsScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { LineChart } from "react-native-chart-kit";

const StatsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Overall stat</Text>
        <TouchableOpacity>
          <Text style={styles.moreButton}>⋯</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.weightSection}>
        <Text style={styles.weightLabel}>Current Weight</Text>
        <Text style={styles.weightValue}>75,3 kg</Text>
        <TouchableOpacity style={styles.periodSelector}>
          <Text style={styles.periodText}>Weekly</Text>
        </TouchableOpacity>
      </View>

      {/* Weight Chart */}
      <View style={styles.chartContainer}>
        {/* Implementation of chart using react-native-chart-kit */}
      </View>

      {/* Workout Goals */}
      <View style={styles.goalsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Workout Goals</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See more →</Text>
          </TouchableOpacity>
        </View>

        <GoalItem
          title="Arm & shoulder muscle"
          exercises={15}
          progress={37}
          color="#E57373"
        />
        <GoalItem
          title="Hand grip muscle"
          exercises={10}
          progress={83}
          color="#64B5F6"
        />
        <GoalItem
          title="Leg muscle"
          exercises={10}
          progress={83}
          color="#FFB74D"
        />
      </View>
    </SafeAreaView>
  );
};

export { ActivityScreen, DiscoverScreen, StatsScreen };
