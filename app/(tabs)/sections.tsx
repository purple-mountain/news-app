import { ArticleSectionList } from "@/components/articles/articleSectionList";
import { SafeAreaView, StyleSheet } from "react-native";

export default function SectionScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ArticleSectionList />
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
