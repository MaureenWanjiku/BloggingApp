import React, { useState, useEffect } from 'react'
import { Box, Button, Card, CardBody, CardHeader, CardFooter, SimpleGrid, Flex, Heading, Avatar, Text } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
import { BiLike} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const [blogs, setBlogs] = useState([])
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    console.log('clicked')
  }

  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then(response => response.json())
    .then(data => {setBlogs(data)})
   
  
  }, [])

  return (

    <SimpleGrid mt='4' minChildWidth='300px' spacing='8'>

     
      
        {blogs.map((blog) =>(

<Link to={'/details'}>

        <Card maxW='md' borderTop='8px' borderColor='teal.500' bg='white' _hover={{shadow: '2xl'}} key={blog.id}>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Blogging App' src='/img/yoshi.png' />

                <Box>
                <Text fontSize='1.2rem' fontWeight='bold'>{blog.title} by {blog.author}</Text> 
                </Box>
              </Flex>

            </Flex>
          </CardHeader>
          <CardBody>
            <Text>{blog.blog}</Text>
          </CardBody>
          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
            <Button flex='1' variant='ghost' color={isLiked ? 'blue.500' : '' } leftIcon={<BiLike onClick={handleLike} />}>
              Like
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<ViewIcon />}>
              Watch
            </Button>
          </CardFooter>
        </Card>

        </Link>
   ))}


        
     
    </SimpleGrid>
  )
}

export default Dashboard
