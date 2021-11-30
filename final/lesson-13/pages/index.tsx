import { useState } from 'react'
import {
  chakra,
  List,
  ListItem,
  Container,
  Heading,
  HStack,
  VStack,
  Button,
  Text
} from '@chakra-ui/react'

import users from '../data/users'
import type { User } from '../data/users'

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<User>()

  const fetchUser = async (id: number) => {
    const res = await fetch(`/api/users/${id}`)
    const data = await res.json()

    setSelectedUser(data)
  }

  return (
    <Container maxW="container.xl" pt={10}>
      <HStack w="full" alignItems="flex-start" spacing={20}>
        <VStack alignItems="flex-start" spacing={8}>
          <Heading>Users:</Heading>
          <List spacing={4}>
            {users.map(({ id, name }) => (
              <ListItem key={id}>
                <Button
                  onClick={() => fetchUser(id)}
                  isActive={selectedUser?.id === id}
                >
                  {name}
                </Button>
              </ListItem>
            ))}
          </List>
        </VStack>
        <VStack spacing={8} alignItems="flex-start">
          <Heading>Details:</Heading>
          <VStack spacing={4} alignItems="flex-start">
            {selectedUser && (
              <>
                <Text>
                  Name:{' '}
                  <chakra.span fontWeight="bold">
                    {selectedUser?.name}
                  </chakra.span>
                </Text>
                <Text>
                  Email:{' '}
                  <chakra.span fontWeight="bold">
                    {selectedUser?.email}
                  </chakra.span>
                </Text>
                <Text>
                  Profession:{' '}
                  <chakra.span fontWeight="bold">
                    {selectedUser?.profession}
                  </chakra.span>
                </Text>
              </>
            )}
            {!selectedUser && <Text>Select a user from the list</Text>}
          </VStack>
        </VStack>
      </HStack>
    </Container>
  )
}

export default Home
