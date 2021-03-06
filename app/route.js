import Image2 from "./image"
import Networking from "./networking"
import Jsx from "./jsx"
import Style from "./styles/flex"
import { Image } from "react-native";
import {
    createStackNavigator,
    createTabNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from "react-navigation";
export default createDrawerNavigator({
    Networking: Networking,
    ImageScreen: Image2,
    JsxComponent: {
        screen: Jsx,
        navigationOptions: {
            tabBarIcon: ({ tint }) => (
                <Image
                    style={{ width: 25, height: 25, alignSelf: "center" }}
                    source={require("./../images/telegram.png")}
                />
            ),
            drawerLabel: "جی اس ایکس"
        }
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })

export const bottom = createBottomTabNavigator({
    // ImageScreen: Image2,
    JsxComponent: {
        screen: Jsx,
        navigationOptions: {
            tabBarIcon: () => (
                <Image
                    style={{ width: 25, height: 25, alignSelf: "center" }}
                    source={require("./../images/telegram.png")}
                />
            )
        }
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })

export const top = createTabNavigator({
    ImageScreen: Image2,
    JsxComponent: {
        screen: Jsx
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })


export const stack = createStackNavigator({
    ImageScreen: Image2,
    JsxComponent: {
        screen: Jsx
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })