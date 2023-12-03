import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CloseCart } from "../Redux/action";

// Styled components for the modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
 
`;

export const Modal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();
  const handleModalClose = () => {
    onClose();
    dispatch(CloseCart(item.id, "missing_urgent"));
  };
  const handleModalCloseNo = () => {
    onClose();
    dispatch(CloseCart(item.id, "missing"));
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Missing Product</h2>
            <p>{`Is ${item.product_name} urgent ?`}</p>
            <div style={{display:"flex",justifyContent:"right"}}>
              {" "}
              <CloseButton onClick={handleModalClose}>Yes</CloseButton>
              <CloseButton onClick={handleModalCloseNo}>No</CloseButton>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
