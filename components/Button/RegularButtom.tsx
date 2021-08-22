import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

interface IProps {
  mainColor?: string;
  backgroundColor?: string;
  href?: string;
  external?: boolean;
}

const RegularButtom: FC<IProps> = ({
  children,
  mainColor = "var(--white)",
  backgroundColor = "var(--transparent)",
  href,
  external,
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
    <RegularButtomS mainColor={mainColor} backgroundColor={backgroundColor}>
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
