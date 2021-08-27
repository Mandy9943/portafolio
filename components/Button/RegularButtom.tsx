import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  mainColor?: string;
  backgroundColor?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

const RegularButtom: FC<IProps> = ({
  children,
  mainColor = "var(--white)",
  backgroundColor = "var(--primary)",
  href,
  external,
  onClick,
}) => {
  if (href) {
    if (!external) {
      return (
        <Link href={href}>
          <a>
            <RegularButtomS
              mainColor={mainColor}
              backgroundColor={backgroundColor}
            >
              {children}
            </RegularButtomS>
          </a>
        </Link>
      );
    } else {
      return (
        <a href={href}>
          <RegularButtomS
            mainColor={mainColor}
            backgroundColor={backgroundColor}
          >
            {children}
          </RegularButtomS>
        </a>
      );
    }
  }
  return (
    <RegularButtomS
      mainColor={mainColor}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </RegularButtomS>
  );
};

export default RegularButtom;

interface IRegularButtomS {
  mainColor: string;
  backgroundColor: string;

  // hoverBackgroundColor: string;
}
const RegularButtomS = styled.div<IRegularButtomS>`
  display: flex;
  padding: 8px 10px;
  width: fit-content;
  border: 1px solid ${(props) => props.mainColor};
  background: ${(props) => props.backgroundColor};
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => props.mainColor};
  :hover {
    border: 1px solid ${(props) => props.backgroundColor};
    background: ${(props) => props.mainColor};
    color: ${(props) => props.backgroundColor};
    a {
      ${(props) => props.backgroundColor};
    }
  }
  a {
    color: ${(props) => props.mainColor};
  }
`;
