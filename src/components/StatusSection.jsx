import React from "react";
import styled from "styled-components";

const DataWrapper = styled.section`
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin: 20px 70px;
`;

const DataList = styled.ul`
  background-color: white;
  border-radius: 5px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
`;

const DataListItem = styled.li`
  border-right: 1px solid #d1d1d1;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;
  width: 200px;

  &:last-child {
    border-right: none;
  }
`;

const DataLabel = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #555;
`;

const DataValue = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

function StatusSection() {
  return (
    <DataWrapper>
      <DataList>
        <DataListItem>
          <DataLabel>Supplier</DataLabel>
          <DataValue>East coast fruits & vegetables</DataValue>
        </DataListItem>
        <DataListItem>
          <DataLabel>Shipping Date</DataLabel>
          <DataValue>Thu, Feb 10</DataValue>
        </DataListItem>
        <DataListItem>
          <DataLabel>Total</DataLabel>
          <DataValue>$15,028.3</DataValue>
        </DataListItem>
        <DataListItem>
          <DataLabel>Category</DataLabel>
          <DataValue>Mango magic, Fresh Strawberries fruit</DataValue>
        </DataListItem>
        <DataListItem>
          <DataLabel>Department</DataLabel>
          <DataValue>300-444-679</DataValue>
        </DataListItem>
        <DataListItem>
          <DataLabel>Status</DataLabel>
          <DataValue>Awaiting your approval</DataValue>
        </DataListItem>
      </DataList>
    </DataWrapper>
  );
}

export default StatusSection;
