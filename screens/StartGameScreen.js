import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import Card from "../components/Card";
// import Inputfield from "../components/Input";
import colors from "../constants/colors";


const StartGameScreen = props => {
  const [valueadd, setvalueadd] = useState("");
  const [confirm, setconfirm] = useState(false);
  const [selectedvalue, setselectedvalue] = useState("");

  const changeHandler = (val) => {
    const x = val.replace(/[^0-9]/g, '')
    setvalueadd(x)
    console.log(val)
    
  };

  const reset = () => {
      setvalueadd('')
  }

  const confirmed = () => {
    console.log(valueadd)
      setconfirm(true)
      setselectedvalue(parseInt(valueadd))
      setvalueadd('')

  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text>Start a new game</Text>
        <Card>
          <Text style={styles.title}>Select a number</Text>
          <TextInput style={{...styles.inputs, ...props.style}}
            
          
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={changeHandler}
          />
          <View style={styles.buttonContainer}>
            <Button 
            style={styles.button} 
            title="reset" 
            color={colors.accent} 
            onPress={reset}/>
            <Button
              style={styles.button}
              title="confirm"
              color={colors.accent}
              onPress={confirmed}
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  inputs: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
},
  button: {
    width: 100
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  }
});

export default StartGameScreen;
