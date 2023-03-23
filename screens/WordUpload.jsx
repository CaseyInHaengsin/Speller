import React from 'react'
import {
  Text,
  Center,
  Input,
  Flex,
  FormControl,
  Button,
  FlatList,
  Badge,
  Stack,
  Heading,
  Pressable
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
      {list?.length > 0 && (
        <Stack space='4' direction='row'>
          <FlatList
            data={list}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Flex
                flexDirection='row'
                alignItems='center'
                flexGrow={1}
                justifyContent='space-between'
                marginLeft={2}
                marginRight={2}
              >
                <Badge flexBasis={'30%'} p={2} m={2} colorScheme='coolGray'>
                  {item}
                </Badge>
                <Flex
                  flexBasis='40%'
                  flexDirection='row'
                  justifyContent='space-evenly'
                >
                  <Pressable
                    bgColor='gray.400'
                    p={2}
                    rounded='md'
                    onPress={() => console.log('delete')}
                  >
                    <Text>Edit</Text>
                  </Pressable>
                  <Pressable
                    bgColor='red.400'
                    p={2}
                    rounded='md'
                    onPress={() => console.log('delete')}
                  >
                    <Text>Delete</Text>
                  </Pressable>
                </Flex>
              </Flex>
            )}
          />
        </Stack>
      )}
    </Center>
  )
}
