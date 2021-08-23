import React from "react";
import styled from "styled-components";
import { IPersonalInfo } from "../../../types/types";
import RegularButtom from "../../Button/RegularButtom";
import BoxSection from "./BoxSection";
import InfoItem from "./InfoItem";

interface IProps {
  info: IPersonalInfo;
}
const InfoSection = ({ info }: IProps) => {
  return (
    <InfoSectionS>
      <ImageBox>
        <img src={info.profileImg} alt={info.name} />
      </ImageBox>
      <InfoBox>
        <BoxSection title="Informacion Personal">
          <InfoItem faIncon="user" content={info.position} />
          <InfoItem faIncon="envelope" content={info.email} email />
          <InfoItem faIncon="phone" content={`+${info.phone}`} phone />
          <InfoItem faIncon="map-marker" content={info.address} />
          <InfoItem faIncon="flag" content={info.nationality} />
          <InfoItem faIncon="calendar" content={info.birthday} />
        </BoxSection>
        <BoxSection title="Redes Sociales">
          {info.socialMedia.map((social, i) => (
            <InfoItem
              key={i}
              faIncon={social.icon}
              content={social.link}
              link
            />
          ))}
        </BoxSection>
      </InfoBox>
    </InfoSectionS>
  );
};

export default InfoSection;
const InfoSectionS = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
const ImageBox = styled.div`
  display: flex;
  flex: 30%;
  /* min-width: 250px; */
  padding: 15px 30px 15px 15px;
  img {
    width: 100%;
    height: max-content;
    /* border-radius: 50%; */
    box-shadow: 1px 1px 5px black;
  }
`;
const InfoBox = styled.div`
  flex: 70%;
  padding: 15px;
  display: flex;
  padding: 10px;
  @media (max-width: 730px) {
    flex-direction: column;
  }
`;
