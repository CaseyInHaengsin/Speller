import { Stack, FlatList, Badge, Pressable, Flex, Text } from 'native-base'

export default function WordList ({ list }) {
  return (
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
            <Badge
              rounded='md'
              flexBasis={'30%'}
              p={2}
              m={2}
              colorScheme='coolGray'
            >
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
  )
}
