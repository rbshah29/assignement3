import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios";
import { fetchHistorySuccesss } from "../../redux/transaction-history/history.reducers"
import Columns from "../../components/Column/column.component"
import { Container, Row } from "./history-page.styled";
import { EmptyStateDescription, EmptyStateTitle, EmptyStateVector, EmptyStateWrapper } from "../new-listings-list-page/newListingsListpage.styles";


const HistoryPage = () => {
    const history = useSelector((state) => state.history.transactions);
    const userInfo = useSelector((state) => state.loginStatus.userInfo);
    const dispatch = useDispatch();

    const fetchHistory = useCallback(
        async (url) => {
            const { "data": response } = await axios.get(url, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            dispatch(fetchHistorySuccesss(response.data));
        },
        [dispatch]
    );

    /* const onSearch = (event) => {
        let searchKey = event.target.value.trim().toUpperCase();
        if (searchKey) {
            setSearchResults(users.filter(user => {
                return user.name.toUpperCase().includes(searchKey)
            }));
        } else {
            setSearchResults(users)
        }
        return
    }
 */

    function GetTransactions() {
        return history.length ?
            (
                <div >
                    <Container fluid>
                        <Row>
                            {history.map((txn) => (
                                <Columns transaction={txn} />
                            ))}
                        </Row>
                    </Container>

                </div>
            )
            :
            (
                <EmptyStateWrapper>
                    <EmptyStateVector />
                    <EmptyStateTitle>No Transaction History Found</EmptyStateTitle>
                    <EmptyStateDescription>We couldn't find anything in your history.</EmptyStateDescription>
                    <EmptyStateDescription><h3>Note:</h3> Transaction history is generated when a transaction is performed.
                    </EmptyStateDescription>
                    <EmptyStateDescription><h3>For example,</h3> A listing for selling a car which is approved and then the auction is completed. This flow generates a Transaction History.</EmptyStateDescription>
                </EmptyStateWrapper>
            )
    }
    useEffect(() => {
        (async function () {
            await fetchHistory(`/user/history/${userInfo._id}`);
        })();
    }, [fetchHistory]);

    return (

        <div>
            <h1 className="heading">Transaction History</h1>
            <hr />
            <GetTransactions />
        </div >
    )
}

export default HistoryPage;
