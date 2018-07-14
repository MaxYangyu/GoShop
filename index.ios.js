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
    ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';
import ListViewTest from './ListViewTest';

export default class MyApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('./res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={styles.page1}>首页</View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="Profile"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image source={require('./res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('./res/images/ic_trending.png')}/>}
                        renderBadge={() => <CustomBadgeView/>}
                        onPress={() => this.setState({selectedTab: 'profile'})}>
                        <View style={styles.page2}></View>
                    </TabNavigator.Item>
                </TabNavigator>*/}
                <ListViewTest/>
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
