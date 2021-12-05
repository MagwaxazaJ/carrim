import React,{useState, useEffect} from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import {reactLocalStorage} from 'reactjs-localstorage';
import Product from './Product';
import Cart from './Cart';
import Register from './Register';

const SaleContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const SaleText = styled.h2`
  font-size: 35px;
  color: #005a87
`;

const Home = () => {


  const [cartList, setCartList] = useState([]);
  reactLocalStorage.set('cartList', cartList);

  useEffect(() => {
    const getList = async () =>{
      console.log("Working")
      console.log(reactLocalStorage.get('cartList', true))
    }

    getList();
  },[])

  return (
    <div>
      <Slider />
      <Categories />
      <SaleContainer>
        <SaleText>
          ON SALE PRODUCTS
        </SaleText>
      </SaleContainer>
      <Products/>
      <Newsletter/>
    </div>
  );
};

export default Home;
