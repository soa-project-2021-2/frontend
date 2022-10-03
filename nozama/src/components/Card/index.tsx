import {
    Box,
    Text,
    Button
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import styles from './styles.module.scss'


interface CardProps {
    title: string;
    price: number;
    imageUrl: string;
    imageAlt: string;
    handleAdd: () => void
}

export default function Card({ title, price, imageUrl, imageAlt, handleAdd }: CardProps) {

    return (
        <Box className={styles.card} >
            <Image height={150} width={150} src={imageUrl} alt={imageAlt} />

            <Box className={styles.card__info}>
                <Box className={styles.card__info__line}>
                    <Text as='b'>{title}</Text>
                </Box>
                <Box className={styles.card__info__line}>
                    <Text>${price}</Text>
                    <Button onClick={handleAdd} size='xs' colorScheme="blue" leftIcon={<FontAwesomeIcon icon={faPlus} />}>{'Add'}</Button>
                </Box>
            </Box>
        </Box>
    )

}