import { ArticleList } from "@/components/articles/articleList";
import { SafeAreaView, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ArticleList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    marginTop: 40,
  },
});
