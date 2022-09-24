import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Avatar,
    useDisclosure,
    HStack
} from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch, faList, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import ModalContainer from '../Modal'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function Header() {
    const list = <FontAwesomeIcon icon={faList} />
    const cart = <FontAwesomeIcon icon={faCartShopping} />
    const user = <FontAwesomeIcon icon={faUser} />
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box className={styles.header}>
            <Link href="/search">
                <Image src={Logo} width={120} height={55} alt="Logo" className={styles.header__img} />
            </Link>
            <InputGroup maxWidth={600}>
                <InputRightElement> <FontAwesomeIcon icon={faSearch} /></InputRightElement>
                <Input placeholder='Search for products...' variant='filled' />
            </InputGroup>
            <HStack spacing='20px'>
                <Link href="/orders">
                    <Button leftIcon={list}>
                        Your orders
                    </Button>
                </Link>
                <Button onClick={onOpen} leftIcon={cart}>
                    Your Cart
                </Button>
                <Avatar icon={user} bg="#EDF2F7" />
            </HStack>
            <ModalContainer isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}
