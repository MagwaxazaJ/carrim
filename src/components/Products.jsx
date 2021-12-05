import {Routes, Route, Link} from 'react-router-dom';
import React,{useState} from "react";
import styled from "styled-components";
import { tiles } from "../data";
import Product from "./Product";
import ProductPage from '../pages/Product';

const Containers = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Info = styled.div`
  width: 100%;
  background-color: #005a87;
  position: absolute;
  bottom: 0px;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 300px;
  align-items: center;
  background-color: #fcfcfc;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;

  &:hover{
    transform: scale(1.1);
    z-index: 5;
  }
`;

const Sale = styled.h5`
  color: white;
  margin-top: 10px;
`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  background-color: #005a87;
  text-align: center;
  left: 5px;
  top: 5px;
  z-index: 3;
`;

const Image = styled.img`
  height: 75%;
  width: 99%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(0.5);
  }
`;

const Disc = styled.p`
  color: #fcfcfc;
  margin-left: 7px;
  margin-top: 4px
`;

const Price = styled.p`
  color: #fcfcfc;
  margin-left: 7px;
  margin-bottom: 4px
`;

const Products = ({addToCart}) => {

  const [singlePost, setSinglePost] = useState(false);
  const [product, setProduct] = useState();

  function _SetProduct(pro){
    setProduct(pro);
    setSinglePost(true);
  }

  return (
    <Containers>
      {
        singlePost == true ? (
          <ProductPage product={product} addToCart={addToCart}/>
        ):(
          tiles.map((item) => (
            <Container onClick={() => _SetProduct(item)}>
              <Link to="/product">
              <Circle>
                <Sale>SALE</Sale>
              </Circle>
              <Image src={item.img} />
              <Info>
                <Disc>
                  {item.disc}
                </Disc>
                <Price>
                  R 
                  {item.price}
                </Price>
              </Info>
              </Link>
              
            </Container>
            // <Product item={item} key={item.id} setSinglePost={setSinglePost} setProduct={_SetProduct}/>
          ))
        )
      }
    </Containers>
  );
};

export default Products;
