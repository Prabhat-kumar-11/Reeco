import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateQuantity } from "../Redux/action";

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
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardSection = styled.div`
  display: flex;
  gap: 20px;
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const QuantityContainer = styled.div`
  gap: 10px;
  align-items: center;
`;

const QuantityButton = styled.button`
  width: 30px;
  background-color: green;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #ccc;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ReasonSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ReasonButton = styled.button`
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const CancelButton = styled.button`
  background-color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  color: green;
  font-weight: bold;
`;

const SendButton = styled.button`
  background-color: #4caf50;
  font-weight: bold;
  color: white;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;
  border: none;
`;

export const ModalEdit = ({ isOpenEdit, onCloseEdit, item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const [total, setTotal] = useState(item.total);

  const handleQuantityChange = (amount) => {
    const updatedQuantity = Math.max(1, quantity + amount);
    setQuantity(updatedQuantity);
    setTotal(Math.floor(item.price * quantity));
  };

  const handleData = () => {
    dispatch(updateQuantity(item.id, quantity,total));

    onCloseEdit()
  };

  return (
    <>
      {isOpenEdit && (
        <ModalOverlay>
          <ModalContent>
            <div>
              <h2>{item.product_name}</h2>
              <p>{item.brand}</p>
            </div>

            <CardSection>
              <ImageContainer>
                <Image src={item.product_image} alt="Product" />
              </ImageContainer>
              <ProductDetails>
                <QuantityContainer>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <p>Price:</p>
                    <p style={{ border: "black solid 1px", padding: "5px" }}>
                      {item.price}$
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "220px",
                    }}
                  >
                    <p>Quantity:</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <QuantityButton onClick={() => handleQuantityChange(-1)}>
                        -
                      </QuantityButton>
                      <p
                        style={{
                          border: "black solid 1px",
                          padding: "5px 10px",
                        }}
                      >
                        {quantity}
                      </p>
                      <QuantityButton onClick={() => handleQuantityChange(1)}>
                        +
                      </QuantityButton>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "200px",
                    }}
                  >
                    <p>Total</p>
                    <p style={{ border: "black solid 1px", padding: "5px" }}>
                      {total} $
                    </p>
                  </div>
                </QuantityContainer>
              </ProductDetails>
            </CardSection>
            <h3>Choose reason (optional)</h3>
            <ReasonSection>
              <ReasonButton>Missing Product</ReasonButton>
              <ReasonButton>Quantity is not the same</ReasonButton>
              <ReasonButton>Price is not the same</ReasonButton>
              <ReasonButton>Others</ReasonButton>
            </ReasonSection>
            <ActionButtons>
              <CancelButton onClick={onCloseEdit}>Cancel</CancelButton>
              <SendButton onClick={handleData}>Send</SendButton>
            </ActionButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
