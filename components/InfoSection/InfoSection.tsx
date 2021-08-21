import React from "react";
import styled from "styled-components";
import RegularButtom from "../Button/RegularButtom";
import BoxSection from "./BoxSection";
import InfoItem from "./InfoItem";
const InfoSection = () => {
  return (
    <InfoSectionS>
      <ImageBox>
        <img src="/images/profile.jpg" alt="" />
      </ImageBox>
      <InfoBox>
        <BoxSection title="Informacion Personal">
          <InfoItem faIncon="user" content="Front end Developer" />
          <InfoItem faIncon="envelope" content="cesrmartn@yahoo.es" email />
          <InfoItem faIncon="phone" content="+5358379931" phone />
          <InfoItem
            faIncon="map-marker"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptatum, minima ullam delectus aperiam quisquam?"
          />
          <InfoItem faIncon="flag" content="Cuba" />
          <InfoItem faIncon="calendar" content="22/09/1999" />
        </BoxSection>
        <BoxSection title="Redes Sociales">
          <InfoItem faIncon="facebook" content="https://facebook.com" link />
          <InfoItem faIncon="twitter" content="https://twitter.com" link />
          <InfoItem faIncon="instagram" content="https://instagram.com" link />
          <InfoItem
            faIncon="whatsapp"
            content="https://wa.me/+5358379931"
            link
          />
          <InfoItem faIncon="telegram" content="https://t.me/Mandy9943" link />
        </BoxSection>
      </InfoBox>
    </InfoSectionS>
  );
};

export default InfoSection;
const InfoSectionS = styled.div`
  width: 100%;
  display: flex;
`;
const ImageBox = styled.div`
  display: flex;
  flex: 30%;
  /* min-width: 250px; */
  padding: 15px 30px 15px 15px;
  img {
    width: 100%;
    /* border-radius: 50%; */
    box-shadow: 1px 1px 5px black;
  }
`;
const InfoBox = styled.div`
  flex: 70%;
  padding: 15px;
  display: flex;
  padding: 10px;
`;
