import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import NavigationBar from '../common/navigationBar';
import DataRepository from '../expand/dao/DataRepository'

const URL = 'https://www.v2ex.com/api/nodes/show.json';
const QUERY_STR = '?name='

class PopularPage extends Component {
    constructor(props) {
        super(props)
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        }
    }

    onLoad() {
        let url = this.genUrl(this.text)
        this.dataRepository.fetchNetRepository(url)
            .then(res => {
                this.setState({
                    result: JSON.stringify(res)
                })
            })
            .catch(err=>{
                this.setState({
                    result: JSON.stringify(err)
                })
            })
    }

    genUrl(key) {
        return URL + QUERY_STR + key
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title={'最热'}
                    style={{backgroundColor: '#6495ED'}}
                />
                <Text
                    onPress={() => {
                        this.onLoad()
                    }}
                    style={styles.tips}>获取数据</Text>
                <TextInput
                    autoCapitalize={'none'}
                    style={{height: 40,borderWidth:1}}
                    onChangeText={text => this.text = text}/>
                <Text style={{height:500}}>{this.state.result}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tips: {
        fontSize: 29
    }
});
export default PopularPage