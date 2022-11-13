import { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Button } from "../../components/Button";
import { useTimer } from "../../contexts/TimerContext";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

const screenWidth = Dimensions.get("screen").width;

export function TimerScreen() {
    // Passos:
    // 1º Obter o timer que foi definido na tela de definição
    const { timer } = useTimer();

    // 2º Converter ele para segundos
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {
        
    }, []);
    // 3º Decrementar o valor a cada segundo
    // 4º Implementar a funcionalidade de pausa

    return (
        <>
            <View style={styles.progressBarContainer}>
                <AnimatedCircularProgress
                    size={screenWidth * .8}
                    width={5}
                    fill={100}
                    tintColor={colors.buttonBlue}
                    backgroundColor={"#3D5875"}
                >
                    {
                        () => <Text style={styles.text}>00:00:00</Text>
                    }
                </AnimatedCircularProgress>
            </View>
            <View style={styles.buttonsContainer}>
                <Button text="||" onPress={() => {}} />
                <Button text="▶" onPress={() => {}} />
            </View>
        </>
    );
}