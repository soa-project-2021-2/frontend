import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Image, Box, Text
} from '@chakra-ui/react'
import Card from '../Card'
import styles from './styles.module.scss'

export default function ModalContainer({ isOpen, onClose }: any) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>My cart(1)</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box className={styles.product}>
                        <Box className={styles.product__container}>
                            <Image height={200} width={200} src={'https://bit.ly/2Z4KKcF'} alt='casa' />
                            <Box className={styles.product__texts}>
                                <Text>
                                    House
                                </Text>
                                <Text>
                                    10.000
                                </Text>
                            </Box>
                        </Box>
                    </Box>

                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Finish Purchase
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
