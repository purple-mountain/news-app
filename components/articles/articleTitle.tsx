import { Link } from "expo-router";
import { StyleProp, TextStyle } from "react-native";

export function ArticleTitle({
  title,
  styles,
  id,
}: {
  title: string;
  styles: StyleProp<TextStyle>;
  id: string;
}) {
  return (
    <Link style={styles} href={`/articles/${id}`}>
      {title}
    </Link>
  );
}
