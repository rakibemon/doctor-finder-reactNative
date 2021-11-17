import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default function Home() {
    return (
        <View>
            <Text>This is Home</Text>
            <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type here"
      />
      <Button
        onPress={(e)=>(alert("Hello React Native"))}
        title="Home"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
                />
        </View>
    )
}
