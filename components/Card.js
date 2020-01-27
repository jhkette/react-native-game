import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Card = (props) => {
    return (
        <View style={{...styles.container, ...props.style}}>
           {props.children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        padding: 10,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        zIndex: 999
    }
})

export default Card;