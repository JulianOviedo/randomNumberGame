import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [win, setWin] = useState(false);

  let screen =
    userNumber && !isGameOver ? (
      <GameScreen
        userNumber={userNumber}
        setIsGameOver={setIsGameOver}
        setWin={setWin}
      />
    ) : !userNumber && !isGameOver ? (
      <StartGameScreen setUserNumber={setUserNumber} />
    ) : (
      <GameOver
        win={win}
        setUserNumber={setUserNumber}
        setWin={setWin}
        setIsGameOver={setIsGameOver}
        userNumber={userNumber}
      />
    );

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require("./assets/images/dices.jpg")}
        resizeMode="cover"
        imageStyle={styles.img}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  img: {
    opacity: 0.25,
  },
});
