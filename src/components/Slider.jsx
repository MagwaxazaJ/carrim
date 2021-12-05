import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 55vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 40px;
  ${mobile({ display: "none" })}
`;

const subContain = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  margin-left: 10%
`;

const Title = styled.h1`
  font-size: 70px;
  color: #fcfcfc;
`;

const Desc = styled.p`
  margin: 10px 0px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fcfcfc;
`;

const SubDesc = styled.p`
  margin: 5px 0px;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fcfcfc;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #fcfcfc;
  color: #fcfcfc;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
    <subContain>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.img} key={item.id}>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <SubDesc>{item.sub}</SubDesc>
              <Button>SHOW PRODUCTS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </subContain>
    </Container>
  );
};

export default Slider;
