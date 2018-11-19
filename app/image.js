import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default class ImageClass extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Image
                        style={{ width: width * 0.9, height: 100 }}
                        source={require("./../images/google.png")}
                    />
                    <Image
                        source={{
                            uri:
                                "https://cdn.vox-cdn.com/thumbor/RdrJk_NhT3Vm3ZhBRfHqiuzN_fk=/0x0:640x427/320x213/filters:focal(269x162:371x264):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61160835/binglogo.1419979907.0.jpg"
                        }}
                        style={{ width: width, height: height * 0.3 }}
                    />

                    <TouchableHighlight
                        underlayColor={"blue"}
                        onPress={() => alert("Hellow world!")}>
                        <Image
                            style={{ width: width * 0.9, height: 100 }}
                            source={require("./../images/google.png")}
                        />
                    </TouchableHighlight>
                    <TouchableOpacity onPress={() => console.log("Hi there")}>
                        <Text style={{ fontSize: 50, color: "orange" }}>
                            Press me!
                        </Text>
                    </TouchableOpacity>
                    <TouchableWithoutFeedback
                        onLongPress={() => alert("I am long press!")}>
                        <Text style={{ fontSize: 50, color: "orange" }}>
                            Long press on me!
                        </Text>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "row",
        // justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    },
    text: {
        fontSize: 30
    }
});
