import { React } from "react";
import { Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen(props) {
    const { navigation } = props

    const goToPage = () => {
        navigation.navigate("Home")
    }
    return (
        <SafeAreaView>
            <Text>This is SettingsScreen</Text>
            <Text>This is SettingsScreen</Text>
            <Text>This is SettingsScreen</Text>
            <Text>This is SettingsScreen</Text>
            <Text>This is SettingsScreen</Text>
            <Button onPress={goToPage} title="Go to Home"/>
        </SafeAreaView>
    )
}