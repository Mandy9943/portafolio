import React from "react";
import styled from "styled-components";
interface IProps {
  title: string;
  faIcon?: string;
  noLine?: boolean;
  center?: boolean;
}

const SectionTitle = ({ title, faIcon, noLine, center }: IProps) => {
  return (
    <WrapperS center={center}>
      <SectionTitleS className="section-title">
        {faIcon && (
          <span className="icon">
            <i className={`fa fa-${faIcon}`}></i>
          </span>
        )}
        <h2 className="title">{title}</h2>
      </SectionTitleS>
      {!noLine && <LineS />}
    </WrapperS>
  );
};

export default SectionTitle;

interface IWrapperS {
  center: boolean;
}

const WrapperS = styled.div<IWrapperS>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "flex-start")};
`;
const SectionTitleS = styled.div`
  margin-bottom: 10px;
  color: var(--secondary);
  font-size: 18px;
  display: flex;
  align-items: center;
  position: abs;
  z-index: 2;
  .icon {
    background: var(--secondary);
    padding: 4px 6px;
    color: white;
    height: fit-content;
    border-radius: 5px;
    margin-right: 5px;
  }
  .title {
    width: max-content;
  }
`;

const LineContainerS = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;
const LineS = styled.div`
  width: 100%;
  height: 2px;
  background: var(--secondary);
  margin-left: 15px;
`;
