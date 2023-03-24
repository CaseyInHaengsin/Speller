import React from 'react'
import {
  Stack,
  FlatList,
  Badge,
  Pressable,
  Flex,
  Text,
  Heading,
  SectionList
} from 'native-base'
import * as Speech from 'expo-speech'

export default function WordList ({ list }) {
  const [voice, setVoice] = React.useState(null)

  React.useEffect(() => {
    Speech.getAvailableVoicesAsync().then(voices => {
      // TODO: find voice for android or ios
      const voiceV = voices.find(voice => voice.name === 'Samantha')
      setVoice(voiceV)
    })
  }, [voice])

  if (!voice)
    return (
      <Stack space='4' direction='row'>
        <Heading>Loading..</Heading>
      </Stack>
    )

  return (
    <Stack space='4' direction='row' flex={1}>
      <FlatList
        data={list}
        keyExtractor={item => item}
        renderItem={item => WordListItem({ ...item, voice })}
      />
    </Stack>
  )
}

function WordListItem ({ item, voice }) {
  return (
    <Flex
      flex='1'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      marginLeft={2}
      marginRight={2}
    >
      <Pressable
        flexBasis={'30%'}
        onPress={() => Speech.speak(item, { voice: voice.identifier, rate: 1 })}
      >
        <Badge rounded='md' p={2} m={2} colorScheme='coolGray'>
          {item}
        </Badge>
      </Pressable>
      <Flex flexBasis='40%' flexDirection='row' justifyContent='space-evenly'>
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
  )
}
