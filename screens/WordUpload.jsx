import React from 'react'
import { Center, Input, Flex, FormControl, Button, Heading } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import WordList from '../components/WordList'

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
    <Center flex='1' justifyContent='flex-start' p='0' safeArea>
      <Heading>Upload Words</Heading>
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
      {list?.length > 0 && <WordList list={list} />}
    </Center>
  )
}
