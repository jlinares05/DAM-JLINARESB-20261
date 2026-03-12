import { Pressable, Text } from "react-native";
import { stylesCountScreen } from "./CountScreen.style";

type CountScreenProps = {
    label: String;
    OnPress: () => void;
}


export const CountScreen: React.FC<CountScreenProps> = (
    {label, OnPress}
) => {
    return(
        <Pressable style={stylesCountScreen.button} onPress={OnPress}>
            <Text style={stylesCountScreen.labelText} >
                {
                    label
                }

            </Text>
        </Pressable>

    )
};

export default CountScreen