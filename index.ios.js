/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy'

export default class MyApp extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>
            <TabNavigator.Item
              selected={this.state.selectedTab=='home'}
              title='home'
            ></TabNavigator.Item>
        </TabNavigator>*/}
                <Navigator
                    initialRoute={{component: Boy}}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component navigator={navigator} {...route.params}/>
                    }}></Navigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyApp', () => MyApp);
