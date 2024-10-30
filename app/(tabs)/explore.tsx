//@ts-nocheck
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Svg, {
  Path,
  Circle,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

// Workout Image SVG Component
const WorkoutImage = ({ style }) => (
  <Svg width={style.width} height={style.height} viewBox="0 0 200 150">
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#FF8C8C" stopOpacity="0.2" />
        <Stop offset="1" stopColor="#FF8C8C" stopOpacity="0.1" />
      </LinearGradient>
    </Defs>
    <Rect width="200" height="150" fill="url(#grad)" />
    <Path
      d="M100 40 C85 40, 75 50, 75 65 C75 80, 85 90, 100 90 C115 90, 125 80, 125 65 C125 50, 115 40, 100 40"
      fill="#FF8C8C"
      opacity="0.3"
    />
    <Circle cx="100" cy="65" r="20" fill="#FF8C8C" opacity="0.5" />
  </Svg>
);

// Hand Exercise Image SVG Component
const HandExerciseImage = ({ style }) => (
  <Svg width={style.width} height={style.height} viewBox="0 0 200 150">
    <Defs>
      <LinearGradient id="darkGrad" x1="0" y1="0" x2="1" y2="1">
        <Stop offset="0" stopColor="#333" stopOpacity="0.2" />
        <Stop offset="1" stopColor="#333" stopOpacity="0.1" />
      </LinearGradient>
    </Defs>
    <Rect width="200" height="150" fill="url(#darkGrad)" />
    <Path
      d="M90 40 L110 40 L110 70 L120 70 L100 90 L80 70 L90 70 Z"
      fill="#444"
      opacity="0.5"
    />
  </Svg>
);

// Chest Exercise Image SVG Component
const ChestExerciseImage = ({ style }) => (
  <Svg width={style.width} height={style.height} viewBox="0 0 80 80">
    <Rect width="80" height="80" fill="#FFB74D" opacity="0.2" />
    <Path
      d="M20 20 Q40 20 40 40 Q40 60 20 60"
      stroke="#FFB74D"
      strokeWidth="4"
      fill="none"
    />
    <Path
      d="M60 20 Q40 20 40 40 Q40 60 60 60"
      stroke="#FFB74D"
      strokeWidth="4"
      fill="none"
    />
  </Svg>
);

// Back Exercise Image SVG Component
const BackExerciseImage = ({ style }) => (
  <Svg width={style.width} height={style.height} viewBox="0 0 80 80">
    <Rect width="80" height="80" fill="#CE93D8" opacity="0.2" />
    <Path
      d="M20 30 H60 M20 40 H60 M20 50 H60"
      stroke="#CE93D8"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </Svg>
);

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover</Text>
        <View style={styles.notificationBadge}>
          <Text style={styles.badgeText}>2</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Popular Exercises Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Popular Exercises</Text>
            <TouchableOpacity>
              <Text style={styles.seeMore}>See more →</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.exerciseCards}
          >
            {/* Home Workout Card */}
            <TouchableOpacity style={styles.exerciseCard}>
              <WorkoutImage style={{ width: 200, height: 150 }} />
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseName}>Home Workout</Text>
                <Text style={styles.exerciseCount}>12 Exercise</Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={styles.rating}>4.9</Text>
                </View>
              </View>
            </TouchableOpacity>

            {/* Hand Exercise Card */}
            <TouchableOpacity style={[styles.exerciseCard, styles.darkCard]}>
              <HandExerciseImage style={{ width: 200, height: 150 }} />
              <View style={styles.exerciseInfo}>
                <Text style={[styles.exerciseName, styles.darkCardText]}>
                  Hand Exercise
                </Text>
                <Text style={[styles.exerciseCount, styles.darkCardText]}>
                  12 Exercise
                </Text>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={16} color="#FFD700" />
                  <Text style={[styles.rating, styles.darkCardText]}>4.9</Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Our Collection Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Collection</Text>

          {/* Chest & Abdominal Card */}
          <TouchableOpacity style={styles.collectionCard}>
            <View
              style={[styles.collectionContent, { backgroundColor: "#FFF3E0" }]}
            >
              <View>
                <Text style={styles.collectionTitle}>
                  Chest & abdominal exercises
                </Text>
                <View style={styles.exerciseIndicator}>
                  <Ionicons name="fitness" size={16} color="#666" />
                  <Text style={styles.collectionCount}>12 Exercise</Text>
                </View>
              </View>
              <ChestExerciseImage style={{ width: 80, height: 80 }} />
            </View>
          </TouchableOpacity>

          {/* Back & Shoulder Card */}
          <TouchableOpacity style={styles.collectionCard}>
            <View
              style={[styles.collectionContent, { backgroundColor: "#F3E5F5" }]}
            >
              <View>
                <Text style={styles.collectionTitle}>
                  Back & shoulder exercises
                </Text>
                <View style={styles.exerciseIndicator}>
                  <Ionicons name="fitness" size={16} color="#666" />
                  <Text style={styles.collectionCount}>12 Exercise</Text>
                </View>
              </View>
              <BackExerciseImage style={{ width: 80, height: 80 }} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  notificationBadge: {
    backgroundColor: "#FF4B4B",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    padding: 0,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeMore: {
    color: "#666",
  },
  exerciseCards: {
    flexDirection: "row",
  },
  exerciseCard: {
    width: 200,
    height: 250,
    marginRight: 15,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#FF8C8C",
  },
  darkCard: {
    backgroundColor: "#1A1A1A",
  },
  exerciseInfo: {
    padding: 15,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  exerciseCount: {
    fontSize: 14,
    color: "#fff",
    opacity: 0.8,
    marginBottom: 5,
  },
  darkCardText: {
    color: "#fff",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
    color: "#fff",
    fontWeight: "bold",
  },
  collectionCard: {
    marginBottom: 15,
    borderRadius: 20,
    overflow: "hidden",
  },
  collectionContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    alignItems: "center",
  },
  collectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    maxWidth: "80%",
  },
  exerciseIndicator: {
    flexDirection: "row",
    alignItems: "center",
  },
  collectionCount: {
    marginLeft: 5,
    color: "#666",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  navItem: {
    padding: 10,
  },
  activeNavItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  },
});

export default ExploreScreen;
