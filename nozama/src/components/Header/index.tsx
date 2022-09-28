import styles from './styles.module.scss'
import {
    Box,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    useDisclosure,
    HStack
} from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../../public/images/logo.png'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faSearch, faList, faCartShopping, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import DrawerCart from '../Drawer'
import Link from 'next/link'
import { destroyCookie } from 'nookies'
import { useRouter } from 'next/router'
import useCartStore from '../../stories/cartStore'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const route = useRouter();
    const { cart, removeProductCart } = useCartStore()
    const logout = () => {
        destroyCookie(undefined, 'nozama_token');
        route.push("/");
    }

    const handleRemove = (name: string) => {
        removeProductCart(name)
    }
    return (
        <Box className={styles.header}>
            <Link href="/search">
                <Image src={Logo} width={120} height={55} alt="Logo" className={styles.header__img} />
            </Link>
            <InputGroup maxWidth={600}>
                <InputRightElement><FontAwesomeIcon icon={faSearch} /></InputRightElement>
                <Input placeholder='Search for products...' variant='filled' />
            </InputGroup>
            <HStack spacing='20px'>
                <Link href="/orders">
                    <Button leftIcon={<FontAwesomeIcon icon={faList} />}>
                        Your orders
                    </Button>
                </Link>
                <Button onClick={onOpen} leftIcon={<FontAwesomeIcon icon={faCartShopping} />}>
                    Your Cart
                </Button>
                <Button onClick={logout} leftIcon={<FontAwesomeIcon icon={faArrowRightToBracket} />}></Button>
            </HStack>
            <DrawerCart handleRemove={handleRemove} cart={cart} isOpen={isOpen} onClose={onClose} />
        </Box>
    )
}
