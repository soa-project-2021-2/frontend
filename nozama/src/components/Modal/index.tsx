import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Button,
    HStack,
    VStack,
    Text,
    useNumberInput
} from '@chakra-ui/react'
import Card from '../Card'
import styles from './styles.module.scss'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function DrawerCart({ isOpen, onClose }: any) {
    const [qtd, setQtd] = useState(1)
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'sm'}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>My Cart(1)</DrawerHeader>
                <DrawerBody>
                    <Input placeholder='Type here...' />
                    <HStack className={styles.product}>
                        <HStack>
                            <Image height={80} width={80} src="data:image/jpeg;base64,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" alt={'mouse'} />
                            <VStack className={styles.product__info}>
                                <Text className={styles.product__info__name} >Mouse</Text>
                                <Text >$1200</Text>
                            </VStack>
                        </HStack>
                        <VStack className={styles.product__actions}>
                            <FontAwesomeIcon icon={faClose} />
                            <HStack className={''} maxW='100px'>
                                <FontAwesomeIcon className={styles.product__actions__icons} onClick={() => setQtd(qtd + 1)} icon={faPlus} />
                                <Input value={qtd} />
                                <FontAwesomeIcon className={styles.product__actions__icons} onClick={() => setQtd(qtd - 1)} icon={faMinus} />
                            </HStack>
                        </VStack>
                    </HStack>
                </DrawerBody>
                <DrawerFooter className={styles.footer}>
                    <HStack className={styles.footer__price}>
                        <Text className={styles.footer__price__text} >SubTotal</Text>
                        <Text className={styles.footer__price__text} >$1200</Text>
                    </HStack>
                    <Button className={styles.footer__button} colorScheme='blue'>Finish purchase</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
