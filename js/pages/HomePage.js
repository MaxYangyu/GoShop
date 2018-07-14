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
    Image,
    Navigator,
    ListView
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import PopularPage from './PopularPage'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'polular',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'polular'}
                        title="最热"
                        selectedTitleStyle={{color: 'red'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('../../res/images/ic_polular.png')}/>}
                        badgeText="1"
                        onPress={() => this.setState({selectedTab: 'polular'})}>
                        <PopularPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'trending'}
                        title="趋势"
                        selectedTitleStyle={{color: 'green'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                         source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'trending'})}>
                        <View style={{backgroundColor:'green',flex:1}}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'favorite'}
                        title="收藏"
                        selectedTitleStyle={{color: 'yellow'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}
                                                         source={require('../../res/images/ic_favorite.png')}/>}
                        onPress={() => this.setState({selectedTab: 'favorite'})}>
                        <View style={{backgroundColor:'yellow',flex:1}}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my'}
                        title="我的"
                        selectedTitleStyle={{color: 'blue'}}
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'my'})}>
                        <View style={{backgroundColor:'blue',flex:1}}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image:{
        width:22,
        height:22
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

