import React from "react";
import styled from "styled-components";
import useResize from "../../../hooks/useResize";

interface IProps {
  faIncon: string;
  content: string;
  email?: boolean;
  phone?: boolean;
  link?: boolean;
}

const InfoItem = ({ faIncon, content, email, phone, link }: IProps) => {
  let _content = (
    <p>
      <span>
        <i className={`fa fa-${faIncon}`}></i>
      </span>
      <span className="content-info-item">{content}</span>{" "}
    </p>
  );

  if (email) {
    _content = (
      <>
        <p>
          <a href={`mailto:${content}`}>
            <span>
              <i className={`fa fa-${faIncon}`}></i>
            </span>
            <span className="content-info-item">{content}</span>
          </a>
        </p>
      </>
    );
  }
  if (phone) {
    _content = (
      <>
        <p>
          <a href={`tel:${content}`}>
            <span>
              <i className={`fa fa-${faIncon}`}></i>
            </span>
            <span className="content-info-item">{content}</span>
          </a>
        </p>
      </>
    );
  }
  if (link) {
    _content = (
      <>
        <p>
          <a href={`${content}`} target="_blank" rel="noopener noreferrer">
            <span>
              <i className={`fa fa-${faIncon}`}></i>
            </span>
            <span className="content-info-item hide-on-small">{content}</span>
          </a>
        </p>
      </>
    );
  }
  return <InfoItemS className="infoConiner with-mb">{_content}</InfoItemS>;
};

export default InfoItem;

const InfoItemS = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  @media (max-width: 1024px) {
    margin-right: 30px;
  }
  a {
    font-size: inherit;
    color: inherit;
    /* :hover {
      color: var(--primary);
    } */
  }

  span {
    min-width: 20px;
    margin-right: 10px;
    i {
      font-size: 18px;
    }
  }
  :hover {
    color: var(--primary);
  }
  .hide-on-small {
    @media (max-width: 730px) {
      display: none;
    }
  }
`;
