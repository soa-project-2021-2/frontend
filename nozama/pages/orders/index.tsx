import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    UnorderedList,
    ListItem
} from "@chakra-ui/react"
import { useState } from "react"
import Header from "../../src/components/Header"
import TagStatus from "../../src/components/TagStatus"
import uuid from 'react-uuid'

export default function Orders() {
    const [obj, setObj] = useState(
        [
            {
                id: 1,
                list_products: [
                    {
                        name: 'TV',
                        price: 1200
                    },
                    {
                        name: 'Smartphone',
                        price: 1800
                    },
                    {
                        name: 'Mouse',
                        price: 200
                    },
                ],
                price_total: 3200,
                status: "created"
            }
        ]
    )

    return (
        <>
            <Header />
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ORDERS</Th>
                            <Th>ITENS</Th>
                            <Th isNumeric>TOTAL PRICE</Th>
                            <Th>STATUS</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            obj.map(item => {
                                return (
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>
                                            <UnorderedList>
                                                {
                                                    item.list_products.map(product => {
                                                        return (
                                                            <ListItem key={uuid()}>{product.name} (${product.price})</ListItem>
                                                        )
                                                    })
                                                }
                                            </UnorderedList>
                                        </Td>
                                        <Td isNumeric>{item.price_total}</Td>
                                        <Td>
                                            <TagStatus status={item.status} />
                                        </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}


