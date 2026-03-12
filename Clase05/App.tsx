import React from "react";
import { View } from "react-native";
import { CountScreen } from "./Components/screens/CountScreen/CountScreen";
import { appStyles } from "./App.styles";

type AppProps = {};

export class App extends React.Component<AppProps> {

  valorActual = "";
  valorAnterior = "";
  operacion = "";

  handleNumero = (num: string) => {
    this.valorActual += num;
    console.log("Numero:", this.valorActual);
  };

  handleOperacion = (op: string) => {
    this.valorAnterior = this.valorActual;
    this.valorActual = "";
    this.operacion = op;

    console.log("Operacion:", op);
  };

  calcular = () => {

    const a = Number(this.valorAnterior);
    const b = Number(this.valorActual);

    let resultado = 0;

    if (this.operacion === "+") resultado = a + b;
    if (this.operacion === "-") resultado = a - b;
    if (this.operacion === "*") resultado = a * b;
    if (this.operacion === "/") resultado = a / b;

    console.log("Resultado:", resultado);

    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = "";
  };

  limpiar = () => {
    this.valorActual = "";
    this.valorAnterior = "";
    this.operacion = "";
    console.log("Calculadora limpia");
  };

  render() {

    return (

      <View style={appStyles.container}>

        <View style={appStyles.row}>
          <CountScreen label="7" OnPress={() => this.handleNumero("7")} />
          <CountScreen label="8" OnPress={() => this.handleNumero("8")} />
          <CountScreen label="9" OnPress={() => this.handleNumero("9")} />
          <CountScreen label="/" OnPress={() => this.handleOperacion("/")} />
        </View>

        <View style={appStyles.row}>
          <CountScreen label="4" OnPress={() => this.handleNumero("4")} />
          <CountScreen label="5" OnPress={() => this.handleNumero("5")} />
          <CountScreen label="6" OnPress={() => this.handleNumero("6")} />
          <CountScreen label="*" OnPress={() => this.handleOperacion("*")} />
        </View>

        <View style={appStyles.row}>
          <CountScreen label="1" OnPress={() => this.handleNumero("1")} />
          <CountScreen label="2" OnPress={() => this.handleNumero("2")} />
          <CountScreen label="3" OnPress={() => this.handleNumero("3")} />
          <CountScreen label="-" OnPress={() => this.handleOperacion("-")} />
        </View>

        <View style={appStyles.row}>
          <CountScreen label="0" OnPress={() => this.handleNumero("0")} />
          <CountScreen label="C" OnPress={() => this.limpiar()} />
          <CountScreen label="=" OnPress={() => this.calcular()} />
          <CountScreen label="+" OnPress={() => this.handleOperacion("+")} />
        </View>

      </View>
    );
  }
}
