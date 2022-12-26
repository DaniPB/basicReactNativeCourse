import React from "react";
import { Text } from "react-native"
import PropTypes from "prop-types"

export default function SayHi(props) {
    const { name, lastName } = props

    return <Text>Hi Friend { name } { lastName } 🤝</Text>
}

SayHi.defaultProps = {
    name: 'Koala 🐨'
}


SayHi.PropTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string
}