
import { StatusBar, useColorScheme } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { CountScreen } from './components/screens';
import React from 'react';
import { colors } from './components/themes/colors';

type AppProps={
  attribute: string;
}

class App extends React.Component{
  private count: number=0;
  private label: string = 'Hello'

  handleOnPress = ()=>{
    console.log("Press button");
    this.count++;
    console.log(this.count);
  
  };

  render(){
    return (
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content' backgroundColor={colors.white}}/>
        <CountScreen label={this.label} OnPress={this.handleOnPress}></CountScreen>
      </SafeAreaProvider>
    );
  }

}