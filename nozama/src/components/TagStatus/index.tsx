import { Tag } from "@chakra-ui/react"

interface TagStatusProps {
    status: string;
}

function getConfigStatus(status: string) {
    switch (status) {
        case "created":
            return {
                color: "teal",
                title: "CREATED"
            }
            break;
        case "waiting_for_payment":
            return {
                color: "mensseger",
                title: "WAITING PAYMENT"
            }
            break;
        case "payment_approved":
            return {
                color: "whatsapp",
                title: "PAID OUT"
            }
            break;
        case "on_route":
            return {
                color: "yellow",
                title: "ON ROUTE"
            }
            break;
        case "delivered":
            return {
                color: "pink",
                title: "DELIVERED"
            }
            break;
        case "canceled":
            return {
                color: "red",
                title: "CANCELED"
            }
            break;
        default:
            return {
                color: "gray",
                title: "UNDEFINED"
            }
    }
}

export default function TagStatus({ status }: TagStatusProps) {
    return (
        <Tag size='md' key='md' variant='solid' colorScheme={getConfigStatus(status).color}>
            {getConfigStatus(status).title}
        </Tag>
    )
}