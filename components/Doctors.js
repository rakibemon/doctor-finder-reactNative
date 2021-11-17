import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import { useNavigate } from 'react-router';
import Doctor from './Doctor'

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://lit-ridge-71610.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, []);
    const navigate = useNavigate();
    const onPressLearnMore=() =>{
        navigate('/home')
    };
    return (
        <View>
            <Text>This is Doctor : {doctors.length}</Text>
            <ScrollView>
                {
                    doctors.map(doctor => <Doctor key={doctor?._id} doctor={doctor}></Doctor>)
                }
                <Button
                    onPress={onPressLearnMore}
                    title="Home"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </ScrollView>
        </View>
    )
}