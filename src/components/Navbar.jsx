import React from "react";
import styled from "styled-components";

import cartIcon from "../assets/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg";
import arrowIcon from "../assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg";

const NContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e633f;
  height: 6rem;
  top: 0;
  position: sticky;
  padding: 0px 138px;
`;

const NImage = styled.img`
  object-fit: contain;
  margin: 0 20px;
  color: white;
`;

const CImage = styled.img`
  object-fit: contain;
  margin: 0 20px;
  color: white;
  height: 100%;
`;

const IButton = styled.img`
  width: auto;
  object-fit: contain;
  margin: 0 20px;
`;

const NOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;

const Navbar = () => {
  return (
    <NContainer>
      <NOptionsContainer>
        <CImage src="https://images.crunchbase.com/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/umel8tattfiylljetmh8" />
        <NOptionsContainer>
          <NOption>Store</NOption>
          <NOption>Order</NOption>
          <NOption>Analytics</NOption>
        </NOptionsContainer>
      </NOptionsContainer>
      <NOptionsContainer>
        <NImage src={cartIcon} />
        <NOption>Hello, James</NOption>
        <IButton src={arrowIcon}></IButton>
      </NOptionsContainer>
    </NContainer>
  );
};

export default Navbar;
