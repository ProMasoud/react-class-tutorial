// import Image2 from "./image"
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
    ImageScreen: Image,
    JsxComponent: {
        screen: Jsx
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })


export const stack = createStackNavigator({
    ImageScreen: Image,
    JsxComponent: {
        screen: Jsx
    },
    StylePage: Style
}, {
        headerMode: "none",
        // initialRouteName: "JsxComponent"
    })