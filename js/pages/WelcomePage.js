import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Navigator

} from 'react-native'
import NavigationBar from '../common/navigationBar';
import HomePage from './HomePage';

class WelcomePage extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
       this.timer =  setTimeout(()=>{
            this.props.navigator.resetTo({
                component:HomePage
            })
        },2000)
    }
    componentWillUnmount(){
        this.timer&& clearTimeout(this.timer)
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'welcome'}
                />
                <Text>Welcome</Text>
            </View>
        )
    }
}

export default WelcomePage