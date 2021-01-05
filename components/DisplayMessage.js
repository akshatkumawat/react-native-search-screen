import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DisplayMessage = ({ message }) => {
    return (
        <View style={styles.messageLayout} >
            <Text>{message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    messageLayout: { alignItems: "center", justifyContent: "center", marginTop: 50 },

});

export default DisplayMessage;