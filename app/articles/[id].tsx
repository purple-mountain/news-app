import { ArticlesData } from "@/constants/ArticleData";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function ArticleScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const articleData = ArticlesData.find((article) => article.id === id);

  if (!articleData) {
    return <Text>Article not found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/320/180?random=${id}` }}
        alt="Article Thumbnail"
      />
      <View style={styles.articleContent}>
        <Text style={styles.title}>{articleData.title}</Text>
        <Text style={styles.content}>{articleData.content}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 8,
    marginBottom: 15,
  },
  articleContent: {
    width: 320,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 18,
    paddingBottom: 60,
  },
});
