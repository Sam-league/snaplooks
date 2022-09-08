import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Paper } from "@mui/material";
import { HashLoader } from "react-spinners";

function SingleProduct() {
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios(`${url}`).then(({ data }) => {
      setData(data);
      setLoading(false);
      console.log(data);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Loader>
          <HashLoader size={60} />
        </Loader>
      ) : (
        <Wrapper>
          <Paper sx={{ height: "100%", width: "100%", display: "flex" }}>
            <ProductImg>
              <img src={data?.image} loading="lazy" alt="" />
            </ProductImg>
            <ProductDetails></ProductDetails>
          </Paper>
        </Wrapper>
      )}
    </div>
  );
}

export default SingleProduct;

const Loader = styled.div`
  height: 80vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 40px;
  /* margin: 80px 0; */
`;

const ProductImg = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 75%;
    /* margin: 20px auto; */
  }
`;

const ProductDetails = styled.div`
  height: 100%;
  width: 60%;
`;
