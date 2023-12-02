import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { FaCheck, FaTimes, FaPrint } from "react-icons/fa";

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
  border-radius: 20px;
  margin-right: 16px;
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

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  border-bottom: grey solid 1px;
`;

const TableCell = styled.td`
  padding: 8px;
`;

const StatusCell = styled(TableCell)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StatusShow = styled.button`
  width: 80px;
  height: 25px;
`;

const StatusButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;

const EditButton = styled(StatusButton)`
  margin-right: 8px; // Added margin between Edit and Check/Close
`;

const CheckIcon = styled(FaCheck)`
  color: green;
`;

const CloseIcon = styled(FaTimes)`
  color: red;
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
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={item.product_image}
                  alt="Product"
                  style={{ maxWidth: "50px" }}
                />
              </TableCell>
              <TableCell>{item.product_name}</TableCell>
              <TableCell>{item.brand}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{item.total}</TableCell>
              <StatusCell>
                {item.status !== "none" ? (
                  <StatusShow
                    bg={
                      item.status === "approved"
                        ? "#33eb91"
                        : item.status === "missing"
                        ? "orange"
                        : item.status === "missing_urgent"
                        ? "#f44336"
                        : ""
                    }
                  >
                    {item.status}
                  </StatusShow>
                ) : (
                  <span style={{ marginLeft: "120px" }}></span>
                )}

                <CheckIcon />
                <CloseIcon />
                <EditButton> Edit </EditButton>
              </StatusCell>
            </TableRow>
          ))}
        </tbody>
      </TableWrapper>
    </TableContainer>
  );
};

export default Table;
