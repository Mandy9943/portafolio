import React from "react";
import styled from "styled-components";

interface IProps {
  faIncon: string;
  content: string;
  email?: boolean;
  phone?: boolean;
  link?: boolean;
}

const InfoItem = ({ faIncon, content, email, phone, link }: IProps) => {
  let _content = <p>{content}</p>;

  if (email) {
    _content = (
      <p>
        <a href={`mailto:${content}`}>{content}</a>
      </p>
    );
  }
  if (phone) {
    _content = (
      <p>
        <a href={`tel:${content}`}>{content}</a>
      </p>
    );
  }
  if (link) {
    _content = (
      <p>
        <a href={`${content}`} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </p>
    );
  }
  return (
    <InfoItemS className="infoConiner with-mb">
      <span>
        <i className={`fa fa-${faIncon}`}></i>
      </span>
      {_content}
    </InfoItemS>
  );
};

export default InfoItem;

const InfoItemS = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  a {
    color: inherit;
    /* :hover {
      color: var(--primary);
    } */
  }

  span {
    min-width: 20px;
    font-size: 20px;
    margin-right: 10px;
  }
  :hover {
    color: var(--primary);
  }
`;
