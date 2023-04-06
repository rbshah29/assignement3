import styled from "styled-components";

export const CardContainer = styled.div`
  display: block;
  flex-direction: column;
  object-fit: cover;
  width: 100%;
  margin-bottom: 1.5rem;
  border: 3px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`;


export const Text = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 1rem;
`;


export const Badge = styled.span`
  padding: 1em 2em;
  font-size: 80%;
  font-weight: 900;
  float: right;
  line-height: 2;
  text-align: center;
  white-space: nowrap;
  border-radius: 10rem;
  color: #fff;
  background-color: ${props => props.color === 'green' ? 'green' : '#ff0000'};
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #f5f5f5;
  border-top: 1px solid #ccc;
`;

export const Body = styled.div`
  position: relative;
  padding: 1rem;
`;

export const Image = styled.img`
  border-radius: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  content: "";
  display: table;
  clear: both;
  padding: 5px;
  float: right;
  width: 150px;
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
