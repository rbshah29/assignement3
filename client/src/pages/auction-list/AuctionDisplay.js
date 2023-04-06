/*
    Author: Rutvik Bhavesh Shah rt304004@dal.ca B00934537
*/
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function AuctionList() {
  const [auctions, setAuctions] = useState([]);
  const navigate = useNavigate();

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  useEffect(() => {
    const fetchAuctions = async () => {
      const { data } = await axios.get(`/auction/getAuction`);
      setAuctions(data.data);
    };
    fetchAuctions();
  }, []);

  return (
    <div>
      {
        auctions.map((auction) => (
          <div className="projectItem" key={auction._id}>
          
          <div>
              <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                  <Typography variant='h3'  gutterBottom>
                  {auction.carName}
                  </Typography>

                  <Typography variant="h4" component="div">
                  {auction.auctionStatus}
                  </Typography>

                  {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    describes the heading
                  </Typography> */}

                  <Typography variant="body1">
                    Current Bid Amount :- {auction.bidingAmount} CAD
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button  onClick={() => {
                navigate("/auction/details/" + auction._id);
                }} >Detailed Info</Button>
                </CardActions>
              </Card>
              <br/><br/>
            </div>
          </div>
        ))

      }
    </div>
  );
}

export default AuctionList;
