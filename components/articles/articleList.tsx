import { FlatList, StyleSheet } from "react-native";
import { ArticleItem } from "./articleItem";
import { ArticlesData } from "@/constants/ArticleData";

export function ArticleList() {
  return (
    <FlatList
      style={styles.container}
      data={ArticlesData}
      renderItem={({ item }) => (
        <ArticleItem
          id={item.id}
          title={item.title}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
