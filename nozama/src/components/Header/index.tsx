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
import { faSearch, faHeart, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import ModalContainer from '../Modal'
import styles from './styles.module.scss'

export default function Header() {
    const heart = <FontAwesomeIcon icon={faHeart} />
    const cart = <FontAwesomeIcon icon={faCartShopping} />
    const user = <FontAwesomeIcon icon={faUser} />
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box className={styles.header}>
            <Image src={Logo} width={120} height={55} alt="Logo" />
            <InputGroup maxWidth={600}>
                <InputRightElement> <FontAwesomeIcon icon={faSearch} /></InputRightElement>
                <Input placeholder='Search for products...' variant='filled' />
            </InputGroup>
            <HStack spacing='20px'>
                <Button rightIcon={heart}>
                    Wishlist
                </Button>
                <Button onClick={onOpen} rightIcon={cart}>
                    Your Cart
                </Button>
                <Avatar icon={user} bg="#EDF2F7" />
            </HStack>
            <ModalContainer isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}
