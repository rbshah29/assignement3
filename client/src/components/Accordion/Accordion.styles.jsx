import styled from "styled-components";

export const AccordionWrapper = styled.div`
  background-color: #ffffff;
  border: 0px solid #dddddd;
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
  transition: max-height 0.2s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? '2000px' : '0')};
`;

export const AccordionButton = styled.button`
  border-radius: 3px;
  display: block;
  text-align: center;
  left: 45%;
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  cursor: pointer;
  margin: auto;
  border-radius: 16px;
  width: 25%;
  transition: all 0.5s;

  &:hover:enabled {
    background-color: #04AA6D;
    color: white;
  }
`;

export const AccordionContent = styled.div`
  padding: 1rem;
  border-top: 1px solid #ccc;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListGroup = styled.li`
  margin-bottom: 1px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: left;
  text-align: left;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;

  &:hover {
    background-color: #e6e6e6;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
