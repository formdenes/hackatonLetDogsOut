import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import config from '../../config'


class Post extends Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      screenWidth: Dimensions.get('window').width
    }
  }

  likeToggled() {
    this.setState({ liked: !this.state.liked })
  }

  render() {
    const imageHeight = this.state.screenWidth * 1.1;
    const imageUri = "http://static.food2fork.com/icedcoffee5766.jpg";
    const heartIconColor = this.state.liked ? 'rgb(252,61,57)' : null;
    return (
      <View style={{ flex: 1, width: 100 + '%' }}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={styles.userPic}
              source={{ uri: "https://picsum.photos/id/2/500/500" }} />
            <Text style={{ marginLeft: 10 }}>Max Smith</Text>
          </View>
          <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>...</Text></View>
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.likeToggled()
            }}>
            <Image
              style={{ width: this.state.screenWidth, height: imageHeight }}
              source={{ uri: imageUri }} />
          </TouchableOpacity>
        </View>
        <View style={styles.iconBar}>
          <Image source={config.images.heartIcon} style={{ height: 40, width: 40, tintColor: heartIconColor }} />
        </View>
        <View style={styles.commentBar}></View>
      </View >

    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 56,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: 'rgb(230,230,230)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userBar: {
    width: 100 + '%',
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'rgb(230,230,230)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  },
  commentBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + '%',
    borderColor: 'rgb(230,230,230)',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,

  }
})

export default Post