import { View } from "react-native";
import { Display } from "../../components/Display";
import { Keyboard } from "../../components/Keyboard";

export function TimerDefinitionScreen() {
    return (
        <View>
            <Display />
            <Keyboard />
        </View>
    );
}