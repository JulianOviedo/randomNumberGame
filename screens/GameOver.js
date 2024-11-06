import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export const GameOver = ({ win, setUserNumber, setWin, setIsGameOver, userNumber }) => {
  const handleReset = () => {
    setUserNumber(null);
    setWin(false);
    setIsGameOver(false);
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      {win ? (
        <View>
        <Text style={styles.text}>YOU WIN !!!! CONGRATS</Text>
        <Text style={styles.text}>The opponent number was: {userNumber}</Text>
        </View>
      ) : (
        <Text style={styles.text}>YOU LOSE :/ </Text>
      )}
      <PrimaryButton onPress={handleReset}>Play Again</PrimaryButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 24,
    textAlign:'center'
  },
});

export default GameOver;
