/** @format */
import React from "react"
import { AppRegistry } from "react-native";
import App from "./app/image";
import { name as appName } from "./app.json";

import Route from "./app/route"

export default class Noavari extends React.Component {

    render() {
        return (<Route />)
    }
}
AppRegistry.registerComponent(appName, () => Noavari);
