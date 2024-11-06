import { Pressable, StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({children, onPress}) => {
    return (
        <View  >
            <Pressable style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.buttonOuterContainer] : styles.buttonInnerContainer } onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 16,
        color: 'white'
    },
    buttonInnerContainer: {
        borderRadius: 6,
        backgroundColor: '#72063c',
        paddingHorizontal: 18,
        paddingVertical: 10,
        shadowColor: 'black',
        shadowOffset: {whidth: 0, height: 5},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    buttonOuterContainer: {
        opacity: .5
    },
})
export default PrimaryButton;