import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaPrint } from "react-icons/fa";
import { Card } from "./Card";

const TableContainer = styled.div`
  margin: 10px 100px;
  border: grey solid 2px;
  padding: 40px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 8px;
  margin-right: 16px;
  width: 250px;
`;

const AddItemButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  margin-right: 16px;
  border-radius: 20px;
  padding: 10px;
`;

const PrintIcon = styled(FaPrint)`
  cursor: pointer;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
`;

const Table = () => {
  const data = useSelector((store) => store.cartReducer.cart);

  return (
    <TableContainer>
      <HeaderContainer>
        <SearchBarContainer>
          <SearchBar type="text" placeholder="Search..." />
        </SearchBarContainer>
        <div>
          {" "}
          <AddItemButton style={{ color: "green", border: "green solid 1px" }}>
            Add item
          </AddItemButton>
          <PrintIcon />
        </div>
      </HeaderContainer>
      <TableWrapper>
        <thead>
          <tr>
            <TableHeader> </TableHeader>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
