import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NavigationBar from '../common/navigationBar';
import DataRepository from '../expand/dao/DataRepository'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        }
    }

    loadData() {
        let url = this.genUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(res => {
                this.setState({
                    result: JSON.stringify(res)
                })
            })
            .catch(err => {
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
                <ScrollableTabView
                    tabBarPosition="top"
                    renderTabBar={()=><ScrollableTabBar/>}
                >
                    <PopularTab tabLabel="Java">Java</PopularTab>
                    <PopularTab tabLabel="iOS">IOS</PopularTab>
                    <PopularTab tabLabel="Android">Android</PopularTab>
                    <PopularTab tabLabel="JavaScript">JavaScript</PopularTab>
                </ScrollableTabView>
   {/*             <Text
                    onPress={() => {
                        this.loadData()
                    }}
                    style={styles.tips}>获取数据</Text>
                <TextInput
                    autoCapitalize={'none'}
                    style={{height: 40, borderWidth: 1}}
                    onChangeText={text => this.text = text}/>
                <Text style={{height: 500}}>{this.state.result}</Text>*/}
            </View>
        )
    }

}
class PopularTab extends  Component{
    constructor(props){
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: ''
        }
    }
    componentDidMount(){
        this.loadData()
    }
    loadData() {
        let url = URL+this.props.tabLabel+QUERY_STR
        this.dataRepository.fetchNetRepository(url)
            .then(res => {
                this.setState({
                    result: JSON.stringify(res)
                })
            })
            .catch(err => {
                this.setState({
                    result: JSON.stringify(err)
                })
            })
    }


    render(){
        return(
            <View>
                <Text style={{height:600}}>{this.state.result}</Text>
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

