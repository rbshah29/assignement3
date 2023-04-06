/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import axios from "../../utils/axios";
import SellCarPage from "../sell-car-page/sell-car-page.component";

const EditCarDetailsPage = () => {
    const { vin } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async function () {
            setLoading(true);
            const {
                data: { car },
            } = await axios.get(`/listing/${vin}`, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            });

            setData({
                tabOne: {
                    carCompany: car.carCompany,
                    carModel: car.carModel,
                    carMileage: car.carMileage,
                    carEngine: car.carEngine,
                    vin: car.vin,
                    transmission: car.transmission,
                },
                tabTwo: {
                    sellerName: car.sellerName,
                    location: car.location,
                    highlight: car.highlight,
                    recentServiceHistory: car.recentServiceHistory,
                    ownershipHistory: car.ownershipHistory,
                    sellerNotes: car.sellerNotes,
                },
            });

            setLoading(false);
        })();
    }, [vin]);
    console.log(data);

    return loading ? <Spinner /> : <SellCarPage initialCarData={data} action="update" />;
};

export default EditCarDetailsPage;
