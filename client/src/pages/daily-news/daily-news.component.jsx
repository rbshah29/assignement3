// AUTHOR : Dixit Kanubhai Ghodadara (B00913652) | dx343670@dal.ca

import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const DailyNewsPage = () => {
    const [newsData, setNewsData] = useState([]);
    // const [loading, setLoading] = useState(false);
    const PlaceHolderImage = "https://iili.io/HVBQScX.png";

    const onImageError = (e) => {
        e.currentTarget.src = PlaceHolderImage;
    };

    async function getNewsData() {
        // setLoading(true);
        const resp = await axios.get("https://bid-my-ride-server.onrender.com/news");
        setNewsData(resp.data);
        // setLoading(false);
    }

    useEffect(() => {
        getNewsData();
    }, []);

    return (
        <NewsGrid>
            {newsData.map((newsData, index) => (
                <>
                    <NewsCard key={newsData._id}>
                        <NewsImage src={newsData.urlToImage !== null ? newsData.urlToImage : "https://iili.io/HVBQScX.png"} onError={onImageError}></NewsImage>
                        <NewsTitle>
                            <a target={"_blank"} style={{ color: "black" }} rel="noreferrer" href={newsData.url}>
                                {" "}
                                {newsData.title}{" "}
                            </a>
                        </NewsTitle>
                        <NewsDescription>{newsData.description}</NewsDescription>
                        <NewsAuthor>{newsData.source.name}</NewsAuthor>
                    </NewsCard>
                </>
            ))}
        </NewsGrid>
    );
};

export default DailyNewsPage;

export const NewsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0;

    @media screen and (max-width: 580px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;
export const NewsCard = styled.div`
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background-color: #fafafa;
    border: 1px solid #dadada;
    padding: 12px;
    border-radius: 10px;
    margin-block: 10px;
    margin-inline: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    max-width: 380px;
    max-height: max-content;
`;

export const NewsImage = styled.img`
    max-width: max-content;
    max-height: 250px;
    border-radius: 5px;
    scale: 1;
    object-fit: scale-down;
`;

export const NewsTitle = styled.h2`
    font-size: 18px;
    margin-block: 10px;

    :link {
        color: black;
    }
`;

const NewsDescription = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 14px;
`;

const NewsAuthor = styled.p`
    margin-left: auto;
    margin-top: 10px;
    font-size: 15px;
    font-weight: 800;
    color: gray;
`;
