/*
    Author: Utsavkumar Jayantibhai Italiya - ut437158@dal.ca (B00935447)
*/
import axios from "../../utils/axios";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareCard from "../../components/CompareCard/CompareCard.component";
import { fetchCarList } from "../../redux/compare-cars/carCompare.reducers";
import { CarListingsWrapper, CarsList } from "../new-listings/newListings.styles";

const ComaprePage = () => {
    const cars = useSelector((state) => state.carCompare.cars);
    const dispatch = useDispatch();
    const fetchCars = useCallback(
        async (url) => {
            const { data: response } = await axios.get(url, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            dispatch(fetchCarList(response.cars));
        },
        [dispatch]
    );

    useEffect(() => {
        (async function () {
            await fetchCars("/comparecar/compare");
        })();
    }, [fetchCars]);
    return (
        <CarListingsWrapper>
            <CarsList>
                {cars.map((car) => (
                    <CompareCard car={car} key={car.vin} />
                ))}
            </CarsList>
        </CarListingsWrapper>
    );
};


export default ComaprePage;