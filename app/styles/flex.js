import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const name = "Masoud";
const arr = ["masoud", "ali", "hossein", "mohammad"];

export default class Flex extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.flex,
                        { backgroundColor: "red", flexDirection: "row" }
                    ]}>
                    <View style={[styles.flex, { backgroundColor: "blue" }]}>
                        <Text style={styles.text}>Flex 1</Text>
                    </View>
                    <View style={[{ backgroundColor: "yellow", flex: 2 }]}>
                        <Text style={styles.text}>Flex 1</Text>
                    </View>
                    <View style={[styles.flex, { backgroundColor: "orange" }]}>
                        <Text style={styles.text}>Flex 1</Text>
                    </View>
                </View>
                <View style={[{ backgroundColor: "green", flex: 2 }]}>
                    <Text style={styles.text}>Flex 1</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "row",
        // justifyContent: "flex-end",
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
    },
    flex: {
        flex: 1
    }
});
