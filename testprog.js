import React, { Component } from 'react';

import {
  App,
  AppRegistry,
  Window,
  View,
  Text,
  TouchableWithoutFeedback,
} from './src/';

class Example extends Component {
  state = {
    test: 'dsdasdsa',
    a: true,
  };
  componentDidMount() {
    setTimeout(() => this.setState({ test: 'dsawewwww' }), 3000);
    setTimeout(() => this.setState({ a: false }), 3000);
  }
  render() {
    return (
      <App>
        <Window style={{ height: '50%', width: '10%' }}>
          <View
            style={{ backgroundColor: 'red', flex: 1, margin: 30, padding: 30 }}
          >
            <View
              style={{
                backgroundColor: 'black',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => console.log('Pressed')}
                onLongPress={() => console.log('Long pressed')}
              >
                <View style={{ backgroundColor: 'white', height: 10 }} />
              </TouchableWithoutFeedback>
              <View style={{ backgroundColor: 'yellow', height: 10 }} />
              <View style={{ backgroundColor: 'purple', height: 10 }} />
            </View>
            {this.state.a && (
              <View style={{ backgroundColor: 'green', flex: 1 }} />
            )}
            <View style={{ backgroundColor: 'blue', flex: 1 }} />
            <Text style={{ fontSize: 20 }}>
              {this.state.test}
              {this.state.a && <Text style={{ color: 'white' }}>Hello2</Text>}
            </Text>
          </View>
        </Window>

        <Window style={{ height: '40%', width: '20%', top: 100, left: 100 }}>
          <View
            style={{
              backgroundColor: 'blue',
              flex: 1,
              margin: 30,
              padding: 30,
            }}
          >
            <View
              style={{
                backgroundColor: 'black',
                flex: 1,
                justifyContent: 'space-between',
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => console.log('Pressed')}
                onLongPress={() => console.log('Long pressed')}
              >
                <View style={{ backgroundColor: 'white', height: 10 }} />
              </TouchableWithoutFeedback>
              <View style={{ backgroundColor: 'yellow', height: 10 }} />
              <View style={{ backgroundColor: 'purple', height: 10 }} />
            </View>
            {this.state.a && (
              <View style={{ backgroundColor: 'green', flex: 1 }} />
            )}
            <View style={{ backgroundColor: 'blue', flex: 1 }} />
            <Text style={{ fontSize: 20 }}>
              {this.state.test}
              {this.state.a && <Text style={{ color: 'white' }}>Hello2</Text>}
            </Text>
          </View>
        </Window>

        {this.state.a && (
          <Window>
            <View style={{ backgroundColor: 'blue' }} />
          </Window>
        )}
      </App>
    );
  }
}

AppRegistry.registerComponent('Test', <Example />);
