import { useTranslations } from "next-intl";
import { useRouter } from "next/dist/client/router";
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
  const t = useTranslations("Index");
  const { locale } = useRouter();
  return (
    <InfoSectionS>
      <ImageBox>
        <img src={info.profileImg} alt={info.name} />
      </ImageBox>
      <InfoBox>
        <BoxSection title={t("personal_info").toString()}>
          <InfoItem faIncon="user" content={info.position[locale]} />
          <InfoItem faIncon="envelope" content={info.email} email />
          <InfoItem faIncon="phone" content={`+${info.phone}`} phone />
          <InfoItem faIncon="map-marker" content={info.address[locale]} />
          <InfoItem faIncon="flag" content={info.nationality} />
          <InfoItem faIncon="calendar" content={info.birthday} />
        </BoxSection>
        <BoxSection title={t("social_media").toString()} isRow>
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
    /* height: 50px; */
    /* height: max-content; */
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
