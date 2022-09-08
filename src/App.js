import Card, { Img, Button } from "./components/Card";
import "./styles.css";
import Prop1 from "./components/Props";
// import data from "./data";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SingleProduct from "./components/SingleProduct";
import { Container } from "@mui/material";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "14vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<SingleProduct />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

// state managemnet - redux, redux/toolkit ,zustand , contextApi
// ContextApi  - createContext,useContext,useReducer
