import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Text, Button, Box } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

const Details = () => {
  const [clickedBlog, setClickedBlog] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch("http://localhost:5000/getBlog/:id")
    .then(response => response.json())
    .then(data => {setClickedBlog(data)})
   
  
  }, []) 
  console.log('clicked:', clickedBlog)
  return (

    <SimpleGrid mt='4' minChildWidth='300px' spacing='8'>

      {clickedBlog.map((blog) => (
        <Card maxW='md' borderTop='8px' borderColor='teal.500' bg='white' _hover={{shadow: '2xl'}}  key={blog.id}>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Blogging App' src='/img/yoshi.png' />

                <Box>
                <Text fontSize='1.2rem' fontWeight='bold'> {blog.title} by {blog.author}</Text> 
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
            <Button flex='1' variant='ghost' leftIcon={<EditIcon />}>
              Edit
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<DeleteIcon />}>
              Delete
            </Button>
          </CardFooter>
        </Card>
        
        ))}
    </SimpleGrid>
  )
}

export default Details