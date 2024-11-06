import { TextInput, SafeAreaView, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = ({setUserNumber}) => {
    const [inputInfo, setInputInfo] = useState('');

    const numberInputHandler = (enteredText) => {
        setInputInfo(enteredText);
    }

    const handleReset = () => {
        setInputInfo('');
    }  

    const handleConfirm = () => {
       const chosenNumber = parseInt(inputInfo);

       if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
        Alert.alert('Invalid number', 'Number has to be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: handleReset}])
        return
       }

       setUserNumber(chosenNumber)
    }


  return (
    <SafeAreaView style={styles.inputContainer}>
      <View style={styles.mainContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="type a number.."
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={inputInfo}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },
  textInput: {
    color: "black",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    height: 50,
    fontSize: "32",
    fontWeight: "bold",
  },
  mainContainer: {
    paddingHorizontal: 32,
    width: "80%",
    backgroundColor: "yellow",
    borderRadius: 8,
    shadowColor: "black",
    elevation: 24,
    shadowOffset: { width: 0, height: 15 },
    shadowRadius: 6,
    padding: 32,
    shadowOpacity: 0.7,
    alignItems: "center",
  },
});

export default StartGameScreen;
