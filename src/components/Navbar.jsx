import { Box, Flex, Heading, Text, Avatar } from '@chakra-ui/react'
import { InputGroup, InputRightElement, IconButton, Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'

const Navbar = () => {
  return (
    <Flex as='nav' justify='space-between' align='center'>

      <Heading as='h5' color="gray.500">G'day Blogger</Heading>

      <InputGroup maxW='50%' border='12px'>

        <InputRightElement>

          <IconButton variant='outline' colorScheme='teal' icon={<Search2Icon />} />

        </InputRightElement>

        <Input borderRadius='8px' type='Text' placeholder='Search ...' />

      </InputGroup>

      <Box display='flex' alignItems='center'>

      <Avatar name='Segun Adebayo' src='/img/mario.png' />


      <Text fontSize='1.2rem' ml='2'>janedoe@gmail.com</Text>
     
      </Box>

    </Flex>
  )
}

export default Navbar