import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    UnorderedList,
    ListItem,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import Header from "../../src/components/Header"
import TagStatus from "../../src/components/TagStatus"
import uuid from 'react-uuid'
import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import { getUserOrder } from "../../src/services/order"
import UseUserStore from "../../src/stories/userStore"

export default function Orders() {
    const [orders, setOrders] = useState([])
   
    const {UserLogin, getUserLoginInfo} = UseUserStore();   
    async function fetchOrders() {
        const data = await getUserOrder(UserLogin.uuid);
        setOrders(data)
    }
    useEffect(() => {
        getUserLoginInfo();
        fetchOrders();
    }, []);

    useEffect(() => {
        console.log(orders)
    }, [orders]);


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
                            orders.length > 0 && orders?.map(item => {
                                return (
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>
                                            <UnorderedList>
                                                {
                                                    item.products?.map(product => {
                                                        return (
                                                            <ListItem key={uuid()}>{product.qtd} {product.name} (${product.price})</ListItem>
                                                        )
                                                    })
                                                }
                                            </UnorderedList>
                                        </Td>
                                        <Td isNumeric>{item.amount}</Td>
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