import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeBaseProvider, Center } from 'native-base'
import WordUploadScreen from './screens/WordUpload'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Word Upload Bro'
          component={withNativeBase(WordUploadScreen)}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function withNativeBase (WrappedComponent) {
  return function (props) {
    return (
      <NativeBaseProvider>
        <StatusBar style='auto' />
        <Center flex={1} bg='#fff' justifyContent='center' safeArea>
          <WrappedComponent {...props} />
        </Center>
      </NativeBaseProvider>
    )
  }
}
