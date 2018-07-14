import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ListView,
    TouchableOpacity,
    RefreshControl
} from 'react-native'
import NavigationBar from './navigationBar';
import Toast, {DURATION} from 'react-native-easy-toast'

var data = {
    "result": [
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
        {
            "email": "yy@163.com",
            "fullName": "张三"
        },
    ]
};


class ListViewTest extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data.result),
            isLoading: true,
        };
        this.onLoad()
    }

    renderRow(item) {
        return (
            <View style={styles.row}>
                <TouchableOpacity onPress={() => {
                    this.toast.show(`你单击了${item.fullName}`, DURATION.LENGTH_SHORT)
                }}>
                    <Text style={styles.tips}>{item.fullName}</Text>
                    <Text style={styles.tips}>{item.email}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={rowID} style={styles.line}></View>
        )
    }

    renderFooter() {
        return <Image style={{width: 400, height: 100}}
                      source={{uri: 'https://img1.360buyimg.com/pop/jfs/t20074/49/2326992461/94728/59e4d06b/5b3c53f2N6a28631d.jpg'}}/>

    }

    onLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    }

    render() {
        return <View style={styles.container}>
            <NavigationBar
                title='ListViewTest'
            />
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(item) => this.renderRow(item)}
                renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                renderFooter={() => this.renderFooter()}
                refreshControl={
                    <RefreshControl refreshing={this.state.isLoading} onRefresh={() => this.onLoad()}/>
                }
            />
            <Toast ref={toast => {
                this.toast = toast
            }}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    tips: {
        fontSize: 18,
    },
    row: {
        height: 50,
    },
    line: {
        height: 1,
        backgroundColor: 'black'
    },
});

export default ListViewTest