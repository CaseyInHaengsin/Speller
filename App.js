import { StatusBar } from 'expo-status-bar'

import { NativeBaseProvider, Center } from 'native-base'
import WordUploadScreen from './screens/WordUpload'

export default function App () {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg='#fff' justifyContent='center' safeArea>
        <StatusBar style='auto' />
        <WordUploadScreen />
      </Center>
    </NativeBaseProvider>
  )
}
