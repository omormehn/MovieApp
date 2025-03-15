import { images } from "@/constants/image";
import { ImageBackground, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface TabBarProps {
    iconName: string
    name: string
    focused: any
}

const TabIcon = ({ focused, iconName, name }: TabBarProps) => {
    return (
        focused ? (
            <ImageBackground source={images.highlight}
                style={{ flexDirection: "row", 
                         gap: 6, minWidth: 80, top: 3, height: 50, borderRadius: 30, 
                         overflow: 'hidden', justifyContent: "center", alignItems: "center" 
                }}
            >
                <Icon name={iconName} size={20} />

                <Text>{name}</Text>

            </ImageBackground>
        ) : (
            <View
                style={{ top: 3 }}
            >
                <Icon name={iconName} color='white' size={20} style={{ opacity: 0.5 }} />
            </View>
        )
    )
}

export default TabIcon;