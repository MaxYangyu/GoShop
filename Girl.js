import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
}
    from 'react-native';
import NavigationBar from './navigationBar'

class Girl extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'Girl'}
                    statusBar={{
                        backgroundColor:'red'
                    }}
                />
                <Text style={styles.text}>I am Girl</Text>
                <Text style={styles.text}>收到了{this.props.word}</Text>
                <Text style={styles.text} onPress={() => {
                    this.props.onCallBack('一盒巧克力');
                    this.props.navigator.pop();
                }}>回赠巧克力</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 22
    }
})
export default Girl