import { StyleProp, Text, TextStyle } from "react-native";

export function ArticleDescription({
  description,
  styles,
}: {
  description: string;
  styles: StyleProp<TextStyle>;
}) {
  return <Text style={styles}>{description}</Text>;
}
