import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SearchBar = ({ query, fetchData, setQuery }) => {
    return (
        <View style={styles.parent}>

            <TextInput style={styles.search} placeholder="Search..." onChangeText={(q) => { setQuery(q) }} value={query} />
            <TouchableOpacity activeOpacity={0.7} style={styles.iconTouch} onPress={fetchData} >
                <Ionicons name="ios-search" style={{ fontSize: 30, color: "grey" }} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    parent: {
        flexDirection: "row",
        flex: 1
    },
    search: {
        flex: 1,
        paddingHorizontal: 15,
        borderColor: "black",
        backgroundColor: '#E8E8E8',
        borderRadius: 20,
        margin: 10
    },
    iconTouch: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 20
    }
});

export default SearchBar;