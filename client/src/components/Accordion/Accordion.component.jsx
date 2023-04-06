import React, { useState, useEffect } from 'react'
import _ from 'lodash';
import { AccordionButton, AccordionWrapper, AccordionContent, List, ListGroup, ListItem } from './Accordion.styles'

export const AuctionDetails = ({ txn }) => {
    const [txnKeys, setTxnKeys] = useState([])
    let auctionDetails = txn.hasOwnProperty("auctionDetails") ? txn.auctionDetails : {}
    useEffect(() => {
        setTxnKeys(_.keys(auctionDetails))
    }, [])
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    if (txnKeys.length) {
        return (
            <>
                <AccordionButton onClick={toggleAccordion} className="active" primary>Auction Details</AccordionButton>
                <AccordionWrapper isOpen={isOpen}>
                    <AccordionContent>
                        <List>
                            <ListGroup>
                                <table>
                                    {txnKeys.map((key, index) => (
                                        <ListItem key={index}>
                                            <tr>
                                                <td align="left"><b>{_.capitalize(_.upperCase(key))}</b>:</td>
                                                <td align='justify'>{txn.auctionDetails[key]}</td>
                                            </tr>

                                        </ListItem>
                                    ))}
                                </table>
                            </ListGroup>
                        </List>
                    </AccordionContent>
                </AccordionWrapper>
            </>
        )
    } else {
        return (
            <>
                <AccordionButton disabled>No Auction Details!</AccordionButton>
                <AccordionWrapper></AccordionWrapper>
            </>
        )
    }
}
