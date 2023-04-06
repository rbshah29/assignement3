/*
    Author: Shivam Nikunjbhai Patel - sh732170@dal.ca (B00917152)
*/

import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard.component";
import Spinner from "../../components/Spinner/Spinner";
import { fetchCarListingsSuccesss } from "../../redux/car-listing/carListing.reducers";
import axios from "../../utils/axios";
import { CarListingsWrapper, CarsList, EmptyStateDescription, EmptyStateTitle, EmptyStateVector, EmptyStateWrapper, Tab, TabsWrapper } from "./newListingsListpage.styles";

const tabNames = {
    ALL: "all",
    FAVORITE: "favorite",
    MY_LISTINGS: "myListings",
};

const NewListingsListPage = () => {
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(tabNames.ALL);
    const cars = useSelector((state) => state.carListing.cars);
    const dispatch = useDispatch();

    const fetchCarListings = useCallback(
        async (url) => {
            setLoading(true);
            const { data: response } = await axios.get(url, {
                headers: {
                    "x-access-token": localStorage.getItem("token"),
                },
            });
            dispatch(fetchCarListingsSuccesss(response.cars));
            setLoading(false);
        },
        [dispatch]
    );

    useEffect(() => {
        (async function () {
            await fetchCarListings("/listing?filter=all");
        })();
    }, [fetchCarListings]);

    return (
        <>
            <CarListingsWrapper>
                <h1
                    style={{
                        marginLeft: "16px",
                    }}
                >
                    Listings
                </h1>
                <TabsWrapper>
                    <Tab
                        active={activeTab === tabNames.ALL}
                        onClick={async () => {
                            setActiveTab(tabNames.ALL);
                            await fetchCarListings("/listing?filter=all");
                        }}
                    >
                        All listings
                    </Tab>
                    <Tab
                        active={activeTab === tabNames.FAVORITE}
                        onClick={async () => {
                            setActiveTab(tabNames.FAVORITE);
                            await fetchCarListings("/listing?filter=favorite");
                        }}
                    >
                        Favorite Listings
                    </Tab>
                    <Tab
                        active={activeTab === tabNames.MY_LISTINGS}
                        onClick={async () => {
                            setActiveTab(tabNames.MY_LISTINGS);
                            await fetchCarListings("/listing?filter=my-listings");
                        }}
                    >
                        My Listings
                    </Tab>
                </TabsWrapper>
                <CarsList>
                    {loading ? (
                        <Spinner />
                    ) : cars.length !== 0 ? (
                        cars.map((car) => <CarCard car={car} key={car.vin} />)
                    ) : (
                        <EmptyStateWrapper>
                            <EmptyStateVector />
                            <EmptyStateTitle>No Listings Found</EmptyStateTitle>
                            <EmptyStateDescription>We couldn't find anything for your search. Please try looking for different things.</EmptyStateDescription>
                        </EmptyStateWrapper>
                    )}
                </CarsList>
            </CarListingsWrapper>
        </>
    );
};

export default NewListingsListPage;
