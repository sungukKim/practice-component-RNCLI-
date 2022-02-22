import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";

const MyButton = () => {
    return (
        <TouchableOpacity 
        style={{
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
        }}
        onPress={() => Alert.alert("clicked!!!")}
        >
            <Text style={{ color: 'white', fontSize: 24 }}>My Button</Text>
        </TouchableOpacity>
    );
};

export default MyButton;