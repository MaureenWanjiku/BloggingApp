import React, {useEffect, useState} from 'react'
import {Text, Box} from '@chakra-ui/react'

const Profile = () => {
  const [users, setusers] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:5000/api")
    .then(response => response.json())
    .then(data => {setusers(data)})
   
  
  }, [])

console.log('Blogs:', users)

  return (
    <div>
      <Text>Testing</Text>

      {users.map((user) => (
        <Box key={user.id}>
          <p>{user.author}</p>
        </Box>
      ))}


    </div>
  )
}

export default Profile