import { useState } from 'react'
import { useFormik } from 'formik'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  VStack,
  Checkbox
} from '@chakra-ui/react'
import Logo from '../../public/images/logo.png'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import { register } from '../../src/services/auth'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'


export default function Register() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const route = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      sendEmail: true
    },
    onSubmit: values => {
      if (values.password === values.confirmPassword) {
        register({
          name: values.name,
          email: values.email,
          password: values.password,
          sendEmail: values.sendEmail
        })
        route.push("/")
      }
      else {
        alert("Passwords not matched")
      }
    },
  });

  return (
    <section className={styles.register}>
      <Image src={Logo} width={220} height={100} alt="Logo" />
      <form onSubmit={formik.handleSubmit} className={styles.register__form}>
        <VStack spacing='20px'>
          <FormControl>
            <FormLabel>Enter your name</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter an email</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="exemple@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter a password</FormLabel>
            <InputGroup size='md'>
              <Input
                id="password"
                name="password"
                type={show ? 'text' : 'password'}
                placeholder='*********'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <InputRightElement width='4.5rem'>
                <Button size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Confirm password</FormLabel>
            <InputGroup size='md'>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={show ? 'text' : 'password'}
                placeholder='*********'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
              <InputRightElement width='4.5rem'>
                <Button size='sm' onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox name="sendEmail" id="sendEmail" onChange={formik.handleChange}>
            Do you want receive emails about promos and new products?
          </Checkbox>
          <Button colorScheme="blue" type="submit" width="100%">Sign Up</Button>
          <Divider />
          <Link href="/">
            <Button width="100%">Back to login</Button>
          </Link>
        </VStack>
      </form>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nozama_token']: token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: '/search',
        permanent: false
      }
    }
  }
  return {
    props: {}
  }
}