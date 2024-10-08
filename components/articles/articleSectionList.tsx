import { SectionList, StyleSheet, Text } from "react-native";
import { ArticleItem } from "./articleItem";
import { ArticlesSectionData } from "@/constants/ArticleData";

export function ArticleSectionList() {
  return (
    <SectionList
      contentContainerStyle={styles.container}
      sections={ArticlesSectionData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ArticleItem
          id={item.id}
          title={item.title}
          description={item.description}
        />
      )}
      renderSectionHeader={({ section }) => (
        <Text style={styles.category}>{section.category}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  category: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    width: 320,
    marginLeft: 40,
  },
});
