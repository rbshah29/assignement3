import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import {
    CarDescription,
    CarDetailsBody,
    CarDetailsPage,
    CarDetailsTop,
    CarHeader,
    CarImages,
    CarProperties,
    CarProperty,
    CarTitle,
    DescriptionGroup,
    DescriptionHeading,
    Image,
    PropertyTitle,
    PropertyValue,
    PropertyWrapper,
    Text,
    TitleGroup,
} from "./AuctionDetailsPage";

const AuctionDetails = (props) =>{
    const {id} = useParams();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      }
    
    const [auctions, setAuctions] = useState([]);
    

    useEffect(() => {
        const fetchAuctions = async () => {
        let filter = {_id:id}
          const { data } = await axios.get(`/auction/getAuction?filter=${JSON.stringify(filter)}`);
          setAuctions(data.data);
          console.log(data);
        };
        fetchAuctions();
      }, []);


      const newBidAmount = inputValue;
      const inputEl = useRef(null);

        const onButtonClick = async () => {
            window.location.reload();
            let bidingAmount = inputEl.current.value;
            const { data } = await axios.put(`/auction/updateAuction`,{bidingAmount,_id:id});
            console.log(data);
            
            auctions.bidingAmount = newBidAmount;
            setInputValue('');
            inputEl.current.focus();
            console.log('Bid placed successfully');
            alert("Your Bid is places");

        };
        //for closing auctiuon manually Temporary fix for TA for checking and testing
        const onButtonAuction = async () =>{
            window.location.reload();
            let auctionStatus = 'done';
            const {data} = await axios.put(`/auction/updateAuction`,{auctionStatus,_id:id})
            console.log('-------------------------------',data);
            alert("Auction Status is updated");
        }

    return (
        <div>
          {
            auctions.map((auction) => (
              
              <div key={auction._id}>
                <CarDetailsPage>
                <CarDetailsTop>
                    <CarImages>
                        {auction.images.map((image, i) => {
                            if (i <= 7) {
                                return <Image src={auction.image} alt="Car Image" key={image} />;
                            } else {
                                return <></>;
                            }
                        })}
                    </CarImages>
                </CarDetailsTop>
                <CarHeader>
                    <TitleGroup>
                          <CarTitle>
                            {auction.carName}
                            
                          </CarTitle>
                    </TitleGroup>
                </CarHeader>
                <CarDetailsBody>
                    <CarProperties>
                        <CarProperty>
                            <PropertyWrapper>
                                <PropertyTitle>Mileage</PropertyTitle>
                                <PropertyValue>{auction.carMilage} <small>KMS</small></PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>
                        <CarProperty>
                            <PropertyWrapper>
                                <PropertyTitle>Auction Status</PropertyTitle>
                                <PropertyValue>{auction.auctionStatus}</PropertyValue>
                            </PropertyWrapper>
                        </CarProperty>
                    </CarProperties>
                    <CarDescription>
                        <DescriptionGroup>
                            <DescriptionHeading>Car Details</DescriptionHeading>
                            <Text>{auction.carDetails}</Text>
                        </DescriptionGroup>
                        <DescriptionGroup>
                            <DescriptionHeading>Current Bid
                            {auction.auctionStatus == 'done' && (
                            <> &nbsp;
                            <small>Final Bid Amount</small>
                            </>)}
                            </DescriptionHeading>
                            <Text >{auction.bidingAmount} CAD</Text>
                            {auction.auctionStatus !== 'done' && (
                            <>
                            <input type='text' value={inputValue} onChange={handleInputChange} ref={inputEl}  style={{'width':'50%'}}/>
                            <Button variant="text" style={{'width':'50%'}} onClick={onButtonClick}>Place Bid</Button>
                            </>
                            )}
                        </DescriptionGroup>
                        {auction.auctionStatus == 'live' && (
                            <>
                        <DescriptionGroup>
                            <DescriptionHeading>Temporaty Manual button for closing auction</DescriptionHeading>
                            <Button onClick={onButtonAuction}> Close Auction </Button>
                        </DescriptionGroup>
                        </>)}
                    </CarDescription>
                </CarDetailsBody>
                </CarDetailsPage>
                {/* <h2>{auction.carName}</h2> */}
              </div>
            ))
    
          }
        </div>
      );
}


export default AuctionDetails;