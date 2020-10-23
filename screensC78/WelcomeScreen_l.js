import React, {Component} from 'react';
import {View, Text} from 'react-native';
import BookAnimation from '../components/BookAnimation';

export default class WelcomeScreen extends Component {
    render(){
        return(
            <View>
                <BookAnimation />
            </View>
        )
    }
}