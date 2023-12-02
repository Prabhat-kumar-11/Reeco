import React from "react";
import styled from "styled-components";

const CustomHeaderWrapper = styled.header`
  width: 100%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;

const CustomBreadcrumbsNav = styled.div`
  display: flex;
  width: 15%;
  padding-top: 10px;
`;

const CustomContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
`;

const CustomButton = styled.button`
  align-items: center;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  margin-left: 16px;
  outline: none;
  cursor: pointer;
  border: none;

  background-color: ${(props) =>
    props.button === "primary" ? "#1e633f;" : "#6c757d"};
  color: #fff;
`;

const CustomOrderTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
`;

const CustomText = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.3;
`;

const CustomHeading = styled.h5`
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 1;
`;

const Header = () => {
  return (
    <CustomHeaderWrapper>
      <CustomContainer>
        <CustomBreadcrumbsNav>
          <CustomText style={{ fontWeight: 300, lineHeight: 1.3 }}>
            Order {">    "}
          </CustomText>
          <CustomText
            style={{
              fontWeight: 300,
              lineHeight: 1.3,
              textDecoration: "underline",
              paddingLeft: "7px",
            }}
          >
            Order 32457ABC
          </CustomText>
        </CustomBreadcrumbsNav>
        <CustomOrderTitleWrapper>
          <CustomHeading>Order 32457ABC</CustomHeading>
          <div>
            <CustomButton button={"secondary"}>Back</CustomButton>
            <CustomButton button={"primary"}>Approve Order</CustomButton>
          </div>
        </CustomOrderTitleWrapper>
      </CustomContainer>
    </CustomHeaderWrapper>
  );
};

export default Header;
