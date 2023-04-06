import * as React from 'react';
import styled from "styled-components";

export default function Stack({ img, index, name, year, description, type, company }) {
    return (
        <>
            <Divider />
            <RowContainer>
                <Table style={{ "width": "100%" }}>
                    <tr>
                        <TD><SemiTitle>{index}.</SemiTitle></TD>
                        <TD><Avatar src={img}></Avatar></TD>
                        <TD><SemiTitle>{name}</SemiTitle></TD>
                        <TD><Subtitle>({company})</Subtitle></TD>
                        <TD><Subtitle>{year}</Subtitle></TD>
                        <TD><Subtitle>
                            {description}
                        </Subtitle></TD>
                        <th><RightDiv>{type}</RightDiv></th>
                    </tr>
                </Table>
            </RowContainer>
            <Divider />
        </>

    );
}

const TD = styled.td`
    align: left
`

const Table = styled.table`
    width: "100%"
`

const Subtitle = styled.h4`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
`

const Divider = styled.hr`
    border: 1.5px solid;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #dbdbdb;
    border-radius: 10px;
`
const Avatar = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 150px;
`

const RowContainer = styled.div`
    padding: 2px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`
const SemiTitle = styled.h2`
    font-size: 22px;
    font-weight: bold;
`
const RightDiv = styled.div`
    font-size: 22px;
    align: right
    font-weight: bold;
`
