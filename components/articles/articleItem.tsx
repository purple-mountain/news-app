import { Image, StyleSheet, View } from "react-native";
import { ArticleTitle } from "./articleTitle";
import { ArticleDescription } from "./articleDescription";

type ArticleProps = {
  id: string;
  title: string;
  description: string;
};

export function ArticleItem({ id, title, description }: ArticleProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: `https://picsum.photos/320/180?random=${id}` }}
        alt="Article Thumbnail"
      />
      <View style={styles.articleContent}>
        <ArticleTitle id={id} styles={styles.title} title={title} />
        <ArticleDescription
          styles={styles.description}
          description={description}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 4,
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  articleContent: {
    width: 320,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});
