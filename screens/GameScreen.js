import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const LIMIT_ATTEMPTS = 5;

const GameScreen = ({ userNumber, setIsGameOver, setWin }) => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [attempts, setAttempts] = useState(LIMIT_ATTEMPTS);
  const [minLimit, setMinLimit] = useState(1); // Límite inferior inicial
  const [maxLimit, setMaxLimit] = useState(100); // Límite superior inicial

  useEffect(() => {
    generateRandomNumber(minLimit, maxLimit);
  }, []);

  useEffect(() => {
    if (attempts === 0) {
      setIsGameOver(true);
      setWin(false);
      return;
    }

    if (randomNumber === userNumber) {
      setIsGameOver(true);
      setWin(true);
      return;
    }
  }, [randomNumber, attempts]);

  const generateRandomNumber = (min, max) => {
    const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(newRandomNumber);
  };

  const handlePlus = () => {
    if (randomNumber < userNumber) {
      // Adivinanza correcta, reducir el rango para estar entre el actual y el userNumber
      setMinLimit(randomNumber + 1); // Ajustamos el límite inferior
      generateRandomNumber(randomNumber + 1, maxLimit);
    } else {
      // Adivinanza incorrecta, aumenta el conteo de intentos
      setAttempts(attempts - 1);
    }
  };

  const handleLess = () => {
    if (randomNumber > userNumber) {
      // Adivinanza correcta, reducir el rango para estar entre el actual y el userNumber
      setMaxLimit(randomNumber - 1); // Ajustamos el límite superior
      generateRandomNumber(minLimit, randomNumber - 1);
    } else {
      // Adivinanza incorrecta, aumenta el conteo de intentos
      setAttempts(attempts - 1);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.title}>GUESS THE NUMBER</Text>
      <View style={styles.guessContainer}>
        <Text style={styles.guess}>{randomNumber}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <PrimaryButton onPress={handlePlus}>+</PrimaryButton>
        <PrimaryButton onPress={handleLess}>-</PrimaryButton>
      </View>
      <View style={styles.attempts}>
        <Text style={styles.attemptNumber}>Attempts : {attempts}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 12,
  },
  attempts: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    marginTop: "auto",
  },
  attemptNumber: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  guessContainer: {
    color: "white",
    backgroundColor: "orange",
    opacity: 0.8,
    padding: 12,
    borderRadius: 24,
    shadowColor: "black",
    shadowOffset: { whidth: 0, height: 5 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginBottom: 24,
    marginTop: "auto",
  },
  guess: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
    color: 'white'
  },
});

export default GameScreen;
