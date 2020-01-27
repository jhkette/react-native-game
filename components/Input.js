import React from 'react'
import { StyleSheet, TextInput, View , Input} from 'react-native';

const Inputfield = props => {
    return (
     <TextInput style={{...styles.inputs, ...props.style}} />
    )
}
const styles = StyleSheet.create({
   

})

export default Inputfield;