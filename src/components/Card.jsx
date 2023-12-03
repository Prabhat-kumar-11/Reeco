import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaCheck, FaTimes } from "react-icons/fa";
import { TickCart } from "../Redux/action";
import { Modal } from "./Modal";
import { ModalEdit } from "./ModalEdit";



const TableCell = styled.td`
  padding: 8px;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  border-bottom: grey solid 1px;
`;

const StatusCell = styled(TableCell)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusShow = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 20px;
`;

const StatusButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 8px;
`;

const EditButton = styled(StatusButton)`
  margin-right: 8px;
`;

const CheckIcon = styled(FaCheck)`
  color: green;
`;

const CloseIcon = styled(FaTimes)`
  color: red;
`;

export const Card = ({ item }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleTick = () => {
    dispatch(TickCart( item.id ));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const handleCloseModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  return (
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
      <TableCell>{item.price}$</TableCell>
      <TableCell>{item.quantity}</TableCell>
      <TableCell>{item.total}$</TableCell>
      <StatusCell>
        {item.status !== "none" ? (
          <StatusShow
            style={{
              border:
                item.status === "approved"
                  ? "#33eb91 solid 1px"
                  : item.status === "missing"
                  ? "orange solid 1px"
                  : item.status === "missing_urgent"
                  ? "#f44336 solid 1px"
                  : false,
              backgroundColor:
                item.status === "approved"
                  ? "#33eb91"
                  : item.status === "missing"
                  ? "orange"
                  : item.status === "missing_urgent"
                  ? "#f44336"
                  : false,
            }}
          >
            {item.status}
          </StatusShow>
        ) : false}

        <CheckIcon onClick={handleTick} />
        <CloseIcon onClick={handleOpenModal} />
        <EditButton onClick={handleOpenModalEdit}> Edit </EditButton>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} item={item} />
        <ModalEdit isOpenEdit={isModalOpenEdit} onCloseEdit={handleCloseModalEdit} item={item}/>
      </StatusCell>
    </TableRow>
  );
};
