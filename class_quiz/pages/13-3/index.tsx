import styled from "@emotion/styled";
import { LegacyRef, useEffect, useRef, useState } from "react";

export default function index() {
  return (
    <Slider>
      <div>슬라이드1</div>
      <div>슬라이드2</div>
      <div>슬라이드3</div>
    </Slider>
  );
}

const SlideWrapper = styled.div`
  overflow: hidden;
`;
const SlideList = styled.div`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.5s;
  > * {
    width: 100%;
    flex-shrink: 0;
  }
`;
const SlideButtons = styled.div``;
const PrevButton = styled.button``;
const NextButton = styled.button``;

interface IPros {
  children: JSX.Element[];
}

function Slider(props: IPros) {
  const [viewSlide, setViewSlide] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const slide = props.children;
  const slideLength = slide.length;

  const onClickPrev = () => {
    if (viewSlide > 0) {
      setViewSlide((prev) => prev - 1);
    } else {
      setViewSlide(slideLength - 1);
    }
  };
  const onClickNext = () => {
    if (viewSlide < slideLength - 1) {
      setViewSlide((prev) => prev + 1);
    } else {
      setViewSlide(0);
    }
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `transLateX(-${viewSlide}00%)`;
    }
  }, [viewSlide]);

  return (
    <>
      <SlideWrapper>
        <SlideList ref={slideRef}>{slide}</SlideList>
        <SlideButtons>
          <PrevButton onClick={onClickPrev}>이전</PrevButton>
          <NextButton onClick={onClickNext}>다음</NextButton>
        </SlideButtons>
      </SlideWrapper>
    </>
  );
}
