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
  VStack
} from '@chakra-ui/react'
import Logo from '../public/images/logo.png'
import Image from 'next/image'
import styles from './styles.module.scss'
import Link from 'next/link'
import UseUserStore from '../src/stories/userStore'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export default function Home() {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const { handleLogin, getUserLoginInfo } = UseUserStore();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      await handleLogin({
        email: values.email,
        password: values.password
      })
      await getUserLoginInfo()
      router.push("/search")
    },
  });
  return (
    <section className={styles.login}>
      <Image src={Logo} width={220} height={100} alt="Logo" />
      <form onSubmit={formik.handleSubmit} className={styles.login__form}>
        <VStack spacing='20px'>
          <FormControl>
            <FormLabel>Enter your email</FormLabel>
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
            <FormLabel>Enter your password</FormLabel>
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
          <Button colorScheme="blue" type="submit" width="100%">Sign In</Button>
          <Divider />
          <Link href="/register">
            <Button width="100%">Create an account</Button>
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