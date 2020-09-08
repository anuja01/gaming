import React, {PureComponent} from 'react';
import {StatusBar, StyleSheet, View, Alert} from 'react-native';
import Entities from './src/entities';
import Systems from './src/systems';
import {GameEngine} from 'react-native-game-engine';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.gameEngine = null;
    console.disableYellowBox = true;
  }
  onEvent = (e) => {
    if (e.type === 'gameOver') {
      Alert.alert('Game Over');
      this.setState({running: false});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <GameEngine
          ref={(ref) => {
            this.gameEngine = ref;
          }}
          style={styles.gameContainer}
          entities={Entities()}
          systems={Systems}
          running={this.state.running}
          onEvent={this.onEvent}>
          <StatusBar hidden={true} />
        </GameEngine>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
