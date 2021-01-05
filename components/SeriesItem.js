import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SeriesItem = ({ series, index }) => {
    return (
        <View style={styles.movieCard} >

            <View style={{ flex: 1, flexDirection: "row", maxHeight: 250 }} >
                <Image source={{ uri: series.image_url }} style={{ flex: 1, resizeMode: "contain", backgroundColor: "#F5F5F5" }} />
                <View style={{ flex: 2, padding: 10, justifyContent: "space-around" }} >
                    <Text style={styles.title} >{series.title}</Text>
                    <View
                        style={{ flexDirection: "row", justifyContent: "space-around" }}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Ionicons name="ios-star" style={{ fontSize: 30, margin: 5, color: "#E4BB24" }} />
                            <View style={{ alignItems: "center" }} >
                                <Text style={{ fontSize: 22, fontWeight: "bold", borderBottomWidth: 0.5, borderBottomColor: "grey" }} >{series.score}</Text>

                                <Text style={{ color: "grey", fontWeight: "bold" }} >{series.members}</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Ionicons name="ios-videocam" style={{ fontSize: 22, margin: 5, color: "#0087FF", alignSelf: "center" }} />
                            <Text style={{ color: "grey", fontWeight: "bold", fontSize: 20, alignSelf: "center" }} >{series.episodes}</Text>
                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1 }}>
                            <Text style={{ color: "grey", fontWeight: "bold", color: "#FF6F0C" }} >{series.rated || "Not Rated"}</Text>
                        </View>
                    </View>
                    <Text style={styles.synopsis} >{series.synopsis}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    movieCard: {
        alignItems: "center",
        marginHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 6,
        elevation: 5,
        shadowColor:"000",
        shadowOffset :{x:0 , y : 0},
        shadowOpacity:0.2,
        marginTop: 10,
        minHeight: 200,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#505050",
        fontFamily: 'menlo',
        flexWrap: "wrap"
    },
    synopsis: {
        fontSize: 14,
        fontWeight: "200",
        color: "grey",
        flexShrink: 1
    }
});

export default SeriesItem;