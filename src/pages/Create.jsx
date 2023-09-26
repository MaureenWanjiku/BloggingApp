import { Box, Button, Container, FormLabel, Input, Text, Textarea } from "@chakra-ui/react"
import { useFormik } from "formik"
import * as Yup from 'yup'


export default function Create() {

  const formik = useFormik({

    initialValues: {
      author: '',
      title: '',
      blog: '',
    },
    validationSchema: Yup.object({
      author: Yup.string().max(12, 'Name must be 12 characters or less').required('Name is required'),
      title: Yup.string().max(40, 'Please enter a short title, 40 words max').required('Title is required'),
      blog: Yup.string().required('Blog is required')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('http://localhost:5000/api/createBlog', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(values)
        });
        
        if(!response.ok) {

          throw new Error('Oops! Network Error')

        } else {
          console.log('Blog send successfully')
        }
      
      } catch(error) {
        console.log('error:', error)
      }
      
      resetForm()
      
    } 

  })
  console.log(formik.touched)
  return (

    <Container>
      <form onSubmit={formik.handleSubmit}>

        <Text fontSize='1.5rem' fontWeight='600' mt={3}>Create a Blog</Text>

        <Box mt='5'>

          <FormLabel fontWeight='600'>Your Name</FormLabel>
          <Input type="text"
            name="author"
            placeholder='Please enter your name'
            value={formik.values.author}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb='6' border='1px solid black' />

          {formik.touched.author && formik.errors.author ? <Text mt={-4} color='red'>{formik.errors.author}</Text> : null}

          <FormLabel fontWeight='600'>Blog Title</FormLabel>
          <Input type="text"
            name="title"
            placeholder='E.g "blogging is fun"'
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb='6' border='1px solid black' />

          {formik.touched.title && formik.errors.title ? <Text mt={-4} color='red'>{formik.errors.title}</Text> : null}


          <FormLabel fontWeight='600'>Blog</FormLabel>
          <Textarea type="text"
            name="blog"
            value={formik.values.blog}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            mb='6' border='1px solid black' />

          {formik.touched.blog && formik.errors.blog ? <Text mt={-4} color='red'>{formik.errors.blog}</Text> : null}

        </Box>

        <Button type="submit" colorScheme="teal">Submit</Button>



      </form>

    </Container>
  )
}
