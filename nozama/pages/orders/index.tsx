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
import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

export default function Orders() {
    const [obj, setObj] = useState(
        [
            {
                id: 1,
                list_products: [
                    {
                        name: 'TV',
                        price: 1200,
                        qtd: 1
                    },
                    {
                        name: 'Smartphone',
                        price: 1800,
                        qtd: 4
                    },
                    {
                        name: 'Mouse',
                        price: 200,
                        qtd: 2
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
                                                            <ListItem key={uuid()}>{product.qtd} {product.name} (${product.price})</ListItem>
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


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { ['nozama_token']: token } = parseCookies(ctx)
    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}