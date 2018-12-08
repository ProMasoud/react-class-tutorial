import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const name = "Masoud";
const arr = ["masoud", "ali", "hossein", "mohammad"];

export default class App extends Component {
    render() {
        const name2 = this.props.navigation.getParam("name")
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{name2}</Text>
                <Text style={styles.text}>{name}</Text>
                {arr.map((item, index) => {
                    return (
                        <Text style={styles.text} key={index}>
                            {item}
                        </Text>
                    );
                })}
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                    <Text style={styles.text}>Go back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "row",
        justifyContent: "flex-end",
        // alignItems: "center",
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
