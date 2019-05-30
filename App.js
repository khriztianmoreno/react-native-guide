import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Avatar, Card, ListItem, Button, Icon } from 'react-native-elements'

const users = [
  {
     name: 'brynn',
     avatar: 'https://khriztianmoreno.com/img/profile.jpg'
  },
 ];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingTop: 40}}>
          <Card
            title='HELLO WORLD'
            image={{uri: 'https://pbs.twimg.com/profile_banners/57435440/1520374386/1500x500'}}>
            <Text style={{marginBottom: 10}}>
              The idea with React Native Elements is more about component structure than actual design.
            </Text>
            <View style={{height: 100}}>
                <Avatar
                  rounded
                  size="large"
                  source={{
                    uri:
                      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
              </View>
            <Button
              icon={<Icon name='code' color='#ffffff' />}
              backgroundColor='#03A9F4'
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='VIEW NOW' />
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    paddingTop: 300
  }
});
