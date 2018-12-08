import React, { Component } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList } from "react-native";
import axios from "axios"

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        // this.getRequestText()
        await this.getRequestUser()
    }

    getRequestText = () => {
        const data = axios({
            "url": "https://jsonplaceholder.typicode.com/posts",
            method: "get"
        }).then(response => {
            console.log(response);
            this.setState({ posts: response.data });
            alert("successfuly recieved data")
        }).catch(err => {
            alert(err.message)
        })
    }

    getRequestUser = async () => {
        let response = null
        try {
            response = await axios({
                "url": "https://randomuser.me/api/?results=20",
                method: "post",
                data: {
                    username: this.state.username,
                    password: this.state.password
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        console.log(response);
        this.setState({ posts: response.data.results });
        alert("successfuly recieved data")
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.getRequest()} >
                    <Text>Load Data</Text>
                </TouchableOpacity>

                <FlatList
                    data={this.state.posts}
                    renderItem={({ item, index }) => <View>
                        <Text>{item.name.first + " " + item.name.last}</Text>
                        <Image source={{ uri: item.picture.thumbnail }} style={{ width: 100, height: 100 }} />
                    </View>}
                    keyExtractor={() => Math.random().toString()}
                    style={{ flex: 1 }}
                />

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
