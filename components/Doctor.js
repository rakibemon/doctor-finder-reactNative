import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    doctorName:{
        fontSize: 20,
        color: 'green'
    }
})

export default function Doctor({ doctor }) {
    const { name, email, img } = doctor || {}
    return (
        <View>
            <Image
                source={{
                    uri: `data:image/jpeg;base64,${img}`,
                }}
                style={{width:150, height: 150}}
            />
            <Text style={styles.doctorName}>Name: {name}</Text>
            <Text>Email: {email}</Text>
        </View>
    )
}
