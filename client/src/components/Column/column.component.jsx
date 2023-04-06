
import React from 'react';
import { AuctionDetails } from '../Accordion/Accordion.component'
import { CardContainer, Header, Badge, Image, Body, Text, Footer } from './column.styles'

function Columns(props) {
  const txn = props.transaction
  let transactionType;
  let variant;

  if (txn.transactionType.toUpperCase() === "BUY") {
    transactionType = "Bought"
    variant = "green"
  }
  else if (txn.transactionType.toUpperCase() === "SELL") {
    transactionType = "Sold"
    variant = "red"
  }


  return (<>

    <CardContainer>
      <Header border='primary'><b>{txn.carName}</b><Badge color={variant} align="center">{transactionType}</Badge></Header>
      <Body>
        <Image src={txn.images[1]} alt="thumbnail" />
        <Text><b>Model:</b> {txn.carModel}</Text>
        <Text><b>Year:</b> {txn.carYear}</Text>
        <Text>
          <b>Company:</b> {txn.carManufacturer}
        </Text>
        <Text>
          <b>Auction Status:</b> {txn.auctionStatus}
        </Text>
        <AuctionDetails txn={txn} />
      </Body>
      <Footer border='primary'>
        <Text>
          <b>Transaction Date:</b> {new Date(txn.createdAt).toLocaleDateString()}
        </Text>
      </ Footer>
    </CardContainer>
  </>
  );
}

export default Columns
