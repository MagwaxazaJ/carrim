import React,{useState} from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { tiles } from "../data";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-text: center;
  display: flex;
  flex-direction: column
`;
const Back = styled.div`

`;

const Product = ({ addToCart}) => {

  const [product, setProduct] = useState(tiles[0])
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [total2, setTotal2] = useState(total);
  const [blackColor, setBlackColor] = useState(89);
  const [darkblueColor, setDarkblueColor] = useState(110);
  const [grayColor, setGrayColor] = useState(110);
  const [currColorPrice, setCurrColorPrice] = useState(0)

  function AddQuantity(){
    setQuantity(quantity + 1);
    setTotal(total + price);
    setTotal2(total + price + (currColorPrice * quantity));
  }

  function SubQuantity(){
    if(quantity > 1){
      setQuantity(quantity - 1);
      setTotal(total - price);
      setTotal2(total - price + (currColorPrice * quantity));
    }else{
      return;
    }
  }

  function addColorPrice(colorPrice){
    setTotal2(total + colorPrice)
    setCurrColorPrice(colorPrice)
  }

  function subColor(clrPrice){
    setTotal(total - clrPrice)
  }


  return (
    <Container>
      <Back>
      <p>Go Back</p>
      </Back>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.disc}</Title>
          <Price>R {total2}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <Btn onClick={() => addColorPrice(blackColor)}>
                <FilterColor color="black" />
                R{blackColor}
              </Btn>
              <Btn onClick={() => addColorPrice(darkblueColor)}>
              <FilterColor color="darkblue" />
               R{darkblueColor}
              </Btn>
              <Btn onClick={() => addColorPrice(grayColor)}>
              <FilterColor color="gray" />
              R{grayColor}
              </Btn>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Btn onClick={() => SubQuantity()}>
                <Remove/>
              </Btn>
              <Amount>{quantity}</Amount>
              <Btn onClick={() => AddQuantity()}>
                <Add />
              </Btn>
            </AmountContainer>
            <Button onClick={() => addToCart(product)}>ADD TO CART</Button>
          </AddContainer>
          <Desc>
          A water based Rust preventing Acrylic primer, that offers long term corrosion protection on all iron and steel surfaces.
          <br />
          <br />
          If applying to new untreated galvanized iron, the surface should be treated with an acid degreasing primer until a water break-free surface is attained and allow to dry.
          <br />
          <br />
          Rusted surfaces should be wire brushed down removing all loose material until a bright steel finish is obtained.
          </Desc>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
