import React from 'react'
import {
  Text,
  Center,
  Input,
  Flex,
  FormControl,
  Button,
  ScrollView
} from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function WordUploadScreen () {
  const [url, setUrl] = React.useState('')
  const [listName, setListName] = React.useState('')
  const [list, setList] = React.useState([])

  async function onSubmit () {
    const response = await axios.get(url)
    const data = response.data
    const words = data.split('\n')
    await AsyncStorage.setItem(listName, JSON.stringify(words))
    setList(words)
  }

  return (
    <Center flex='1' justifyContent='flex-start' p='0'>
      <Text>WordUploadScreen</Text>
      <Flex flexDirection='column' justifyContent='center' m={2}>
        <FormControl my={2}>
          <FormControl.Label>URL</FormControl.Label>
          <Input
            p={2}
            placeholder='URL'
            w='100%'
            value={url}
            onChangeText={urlText => setUrl(urlText)}
          />
        </FormControl>
        <FormControl my={2}>
          <FormControl.Label>List Name</FormControl.Label>
          <Input
            p={2}
            placeholder='List Name'
            w='100%'
            value={listName}
            onChangeText={name => setListName(name)}
          />
        </FormControl>
        <Button
          my={2}
          onPress={() => {
            onSubmit()
          }}
        >
          Pull Data
        </Button>
      </Flex>
      <ScrollView>
        <Text>Scroll me plz</Text>
        {list?.map(item => {
          return <Text key={item}>{item}</Text>
        })}
      </ScrollView>
    </Center>
  )
}
