import {
    Box,
    Text,
    Button
} from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faPlus, faClose } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartNotFull } from '@fortawesome/free-regular-svg-icons'
import Image from 'next/image'
import styles from './styles.module.scss'


interface CardProps {
    title: string;
    price: string;
    imageUrl: string;
    imageAlt: string;
    isFav: boolean;
    isAdd: boolean;
}

export default function Card({ title, price, imageUrl, imageAlt, isFav, isAdd }: CardProps) {

    return (
        <Box className={styles.card} >
            <Image height={150} width={150} src={imageUrl} alt={imageAlt} />

            <Box className={styles.card__info}>
                <Box className={styles.card__info__line}>
                    <Text as='b'>{title}</Text>
                    <FontAwesomeIcon icon={isFav ? faHeart : faHeartNotFull} color={isFav ? 'red' : 'gray'} className={styles.card__info__line__icon} />
                </Box>
                <Box className={styles.card__info__line}>
                    <Text>${price}</Text>
                    <Button size='xs' colorScheme="blue" leftIcon={<FontAwesomeIcon icon={isAdd ? faClose : faPlus} />}>{isAdd ? 'Remove' : 'Add'}</Button>
                </Box>
            </Box>
        </Box>
    )

}