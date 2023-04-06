/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
import React, { useState } from 'react';
import axios from "../../utils/axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function AuctionItem() {
  const [formValues, setFormValues] = useState({
    carName: '',
    carDetails: '',
    modelYear: '',
    carMilage: '',
    auctionStatus: '',
    bidingAmount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formValues);
    const { data: response } = await axios.post(`/auction/createAuction`, formValues);
  };
  return (
    <div>      
      <form onSubmit={handleSubmit}>
                <label>
                    <TextField style={{"width":"100%"}} label="Car Name" id="filled-size-small"
                     variant="filled" size="small" name="carName" 
                     value={formValues.carName} onChange={handleInputChange} />
                </label><br/>
                <label>
                    <TextField style={{"width":"100%"}} label="Car Details" id="filled-size-small"
                     variant="filled" size="small" name="carDetails" 
                     value={formValues.carDetails} onChange={handleInputChange} />
                    {/* <input type="text" name="carDetails" value={formValues.carDetails} onChange={handleInputChange} /> */}
                </label><br/>
                <label>
                    <TextField style={{"width":"100%"}} label="Model Year" id="filled-size-small"
                        variant="filled" size="small" name="modelYear" 
                        value={formValues.modelYear} onChange={handleInputChange} />
                </label><br/>
                <label>
                    <TextField style={{"width":"100%"}} label="Car Milage" id="filled-size-small"
                        variant="filled" size="small" name="carMilage" 
                        value={formValues.carMilage} onChange={handleInputChange} />
                </label><br/>
                <label>
                    <TextField style={{"width":"100%"}} label="Auction Status" id="filled-size-small"
                        variant="filled" size="small" name="auctionStatus" 
                        value={formValues.auctionStatus} onChange={handleInputChange} />
                </label><br/>
                <label>
                <TextField style={{"width":"100%"}} label="Biding Amount" id="filled-size-small"
                        variant="filled" size="small" name="bidingAmount" 
                        value={formValues.bidingAmount} onChange={handleInputChange} />
                </label><br/>
                <Button variant="outlined" type="submit">Submit</Button>
            </form>


    </div>
  );

}

export default AuctionItem;