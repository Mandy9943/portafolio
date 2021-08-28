import React, { FunctionComponent, memo, MouseEvent, useRef } from "react";
import styled from "styled-components";

interface IProps {
  percent: number;
  totalProgresColor?: string;
  progresColor?: string;
  seek?: (percent: number) => void;
}

const ProgresBar: FunctionComponent<IProps> = ({
  percent,
  totalProgresColor,
  progresColor,
  seek,
}) => {
  const [value, setValue] = React.useState(0);
  const progresWidth = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (progresWidth && progresWidth.current) {
      let _percent = percent;
      if (percent > 1) {
        _percent = percent / 100;
      }
      setValue(_percent * progresWidth.current?.clientWidth);
    }
  }, [percent]);

  const clickProgres = (e: MouseEvent<HTMLDivElement>) => {
    if (seek) {
      const element = document.getElementById("asd");
      let rectLeft = element?.getBoundingClientRect().left;
      let offset = 0;
      if (rectLeft) {
        offset = e.clientX - rectLeft;
      }
      if (progresWidth && progresWidth.current) {
        const percentWidth = offset / progresWidth.current?.clientWidth;
        seek(percentWidth);
      }
    }
  };

  return (
    <ProgresClickZoneS onClick={clickProgres}>
      <ProgressDivS
        id="asd"
        ref={progresWidth}
        style={{ backgroundColor: totalProgresColor || "gray" }}
      >
        <ProgresS
          style={{
            width: `${value}px`,
            backgroundColor: progresColor || "white",
          }}
        />
      </ProgressDivS>
    </ProgresClickZoneS>
  );
};

export default memo(ProgresBar);

const ProgresClickZoneS = styled.div`
  padding: 5px 0;
  background-color: transparent;
`;
const ProgressDivS = styled.div`
  background-color: white;
  border-radius: 3px;
  width: 100%;
`;
const ProgresS = styled.div`
  background-color: black;
  height: 10px;
  border-radius: 1rem;
  transition: 1s ease;
`;
