import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Badge } from "@material-ui/core";
import { LocalGasStationSharp, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React,{useState} from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import Home from './pages/Home';
import Announcement from './components/Announcement';
import ProductList from './pages/ProductList';
import Footer from './components/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';

const Container = styled.div`
  height: 90px;
  margin-bottom: 60px
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  height: 50px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 90%;
  border-radius: 12px
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Category = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-around;
  background-color: #ffffff;
`;

const CategoryList = styled.div`
  cursor: pointer;
`;

const App = () => {

  const [cart, setCart] = useState([]);

  function addCart(item){
    setCart( curr => [...curr, item]);
  }

  return (
    <Router>
    <Container>
    <Announcement />
      <Wrapper>
      <Link to="/">
        <Left>
          <img src="https://www.carrimonline.co.za/wp-content/uploads/2021/10/Corporate-identity.png" width="120" height="40"/>
        </Left>
      </Link>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" style={{width: '95%', borderRadius: 12}}/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/register" style={{textDecoration: 'none', color: 'black'}}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login" style={{textDecoration: 'none', color: 'black'}}>
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
      <Category>
        <CategoryList>Hardware</CategoryList>
        <CategoryList>Doors And Windows</CategoryList>
        <CategoryList>Plumbing</CategoryList>
        <CategoryList>Electrical And Lighting</CategoryList>
        <CategoryList>
          <Link to="/products?=tiles" style={{textDecoration: 'none', color: 'black'}}>Tiles</Link>
        </CategoryList>
        <CategoryList>Bathroom</CategoryList>
        <CategoryList>Tapware</CategoryList>
      </Category>
    </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList addToCart={addCart}/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart cart={cart}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
