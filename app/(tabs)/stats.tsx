//@ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const WorkoutStats = () => {
  const workoutData = {
    exercises: [
      {
        name: "Push-ups",
        reps: 15,
        muscles: "Biceps, triceps, shoulders",
        sets: 3,
      },
      {
        name: "Squads",
        reps: 25,
        muscles: "calves, legs, thighs",
        sets: 3,
      },
      {
        name: "Lunges",
        reps: 15,
        muscles: "calves, hamstrings, glutes",
        sets: 3,
      },
    ],
    calories: 1350,
    progress: 65,
    exercisesLeft: 12,
  };

  const stats = {
    caloriesLoss: {
      value: 12182,
      increase: 2.8,
      progress: 37,
    },
    weightLoss: {
      value: 10.7,
      increase: 2.8,
      progress: 80,
    },
  };

  const ProgressCircle = ({ progress }) => (
    <View style={styles.progressCircle}>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.avatar} />
          <View>
            <Text style={styles.welcomeText}>Welcome Back</Text>
            <Text style={styles.nameText}>Nicolas Doflamingo! 👋</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBadge}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.progressCard}>
        <View style={styles.progressHeader}>
          <Text style={styles.progressTitle}>Workout Progress</Text>
          <ProgressCircle progress={workoutData.progress} />
        </View>
        <Text style={styles.exercisesLeft}>
          {workoutData.exercisesLeft} Exercise left
        </Text>
      </View> */}

      <View style={styles.activitySection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Activity</Text>
          <TouchableOpacity>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.calorieCard}>
          <LinearGradient
            colors={["#FF6B6B", "#FF8E8E"]}
            style={styles.calorieGradient}
          >
            <Ionicons name="barbell-outline" size={24} color="#fff" />
            <Text style={styles.calorieText}>{workoutData.calories}</Text>
            <Text style={styles.calorieLabel}>Calories</Text>
          </LinearGradient>
        </View>

        {workoutData.exercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseItem}>
            <View style={styles.exerciseInfo}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseMuscles}>{exercise.muscles}</Text>
            </View>
            <Text style={styles.exerciseReps}>
              {exercise.reps} x{exercise.sets}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.statsSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Overall Status</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See more →</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statCard}>
          <View style={styles.statInfo}>
            <View style={[styles.statIcon, styles.calorieIcon]}>
              <Ionicons name="flame" size={20} color="#FF6B6B" />
            </View>
            <View>
              <Text style={styles.statLabel}>Calories Loss</Text>
              <View style={styles.statValue}>
                <Text style={styles.statNumber}>
                  {stats.caloriesLoss.value}
                </Text>
                <Text style={styles.statUnit}> Kcal</Text>
                <Text style={styles.statIncrease}>
                  +{stats.caloriesLoss.increase}%
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${stats.caloriesLoss.progress}%` },
              ]}
            />
          </View>
        </View>

        {/* Weight Loss Stat Card */}
        <View style={styles.statCard}>
          <View style={styles.statInfo}>
            <View style={[styles.statIcon, styles.weightIcon]}>
              <Ionicons name="body-outline" size={20} color="#4A90E2" />
            </View>
            <View>
              <Text style={styles.statLabel}>Weight Loss</Text>
              <View style={styles.statValue}>
                <Text style={styles.statNumber}>{stats.weightLoss.value}</Text>
                <Text style={styles.statUnit}> Kg</Text>
                <Text style={styles.statIncrease}>
                  +{stats.weightLoss.increase}%
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${stats.weightLoss.progress}%` },
              ]}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 12,
  },
  welcomeText: {
    fontSize: 14,
    color: "#666",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  notificationBadge: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#FF6B6B",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  progressCard: {
    backgroundColor: "#000",
    borderRadius: 15,
    padding: 16,
    marginBottom: 20,
  },
  progressHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  progressCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
  },
  progressText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  exercisesLeft: {
    color: "#999",
    marginTop: 8,
  },
  activitySection: {
    marginBottom: 20,
    marginTop: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editButton: {
    color: "#666",
  },
  calorieCard: {
    marginBottom: 16,
  },
  calorieGradient: {
    borderRadius: 15,
    padding: 16,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  calorieText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 4,
  },
  calorieLabel: {
    color: "#fff",
    opacity: 0.8,
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  exerciseMuscles: {
    color: "#666",
    fontSize: 12,
  },
  exerciseReps: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
  },
  statsSection: {
    marginBottom: 20,
  },
  seeMore: {
    color: "#666",
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
  },
  statInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  calorieIcon: {
    backgroundColor: "#FFEDED",
  },
  weightIcon: {
    backgroundColor: "#EDF5FF",
  },
  statLabel: {
    color: "#666",
    marginBottom: 4,
  },
  statValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  statNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statUnit: {
    color: "#666",
  },
  statIncrease: {
    color: "#4CD964",
    marginLeft: 8,
    fontSize: 12,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 2,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CD964",
    borderRadius: 2,
  },
});

export default WorkoutStats;
