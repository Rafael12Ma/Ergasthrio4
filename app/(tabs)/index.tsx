import { Image, StyleSheet, Platform } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text } from "react-native";
export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          AI Books!
        </ThemedText>
        <ThemedText style={styles.underTitle}>This week's selection</ThemedText>
      </ThemedView>

      <ThemedView style={styles.book}>
        <ThemedText style={styles.bookTitle}>Think and Grow Rich</ThemedText>
        <ThemedView style={styles.innerView}>
          <Image
            source={require("./str.png")}
            style={{ width: 100, height: 100 }}
          ></Image>
          <ThemedText style={styles.desc}>
            The main idea of the book is to make the reader to understand the
            actual value of money and to make him thinking cleverly so he can
            make his own money as well.
          </ThemedText>
        </ThemedView>
      </ThemedView>

      {/* ------------------ */}

      <ThemedView>
        <ThemedText></ThemedText>
        <ThemedView>
          <Image></Image>
          <ThemedText></ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  innerView: {
    display: "flex",
    flexDirection: "row",
  },
  book: {
    alignContent: "center",
    margin: "auto",
  },
  bookTitle: {
    alignSelf: "center",
    fontSize: 20,
  },
  desc: {
    color: "red",
    fontSize: 16,
  },
  title: {
    color: "white",
    margin: "auto",
    fontSize: 32,
  },
  underTitle: {
    color: "red",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
