import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Skeleton,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating
} from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import react, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Products as items } from "../contexts/ProductsContext";

const Products = () => {
  let {
    allproducts: data,
    searchedProducts: searchedData,
    loading,
    GetAllProducts,
    GetSearchProducts,
    GetCategory,
    SortPrice
  } = useContext(items);

  const url = "https://fakestoreapi.com/products";
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
  const [category, setCategory] = useState("");
  const [sortby, setSortby] = useState("");
  useEffect(() => {
    axios(url).then(({ data }) => {
      console.log(data);
      GetAllProducts(data);
    });
  }, []);

  const SearchProduct = (e) => {
    GetSearchProducts(e.target.value);
  };

  const selectedCategory = (e) => {
    setCategory(e.target.value);
    GetCategory(e.target.value);
  };

  const sortProducts = (e) => {
    setSortby(e.target.value);
    SortPrice(e.target.value);
  };
  console.log("searchedData :", searchedData);

  return (
    <Container>
      <Grid container>
        <Grid item lg={6}>
          <TextField
            sx={{ marginTop: 5 }}
            id="outlined-basic"
            label="Search Product"
            variant="outlined"
            fullWidth
            onKeyUp={(e) => SearchProduct(e)}
          />
        </Grid>
        <Grid item lg={3}>
          <FormControl fullWidth sx={{ marginTop: 5 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={selectedCategory}
            >
              <MenuItem value={"all"}>All</MenuItem>
              <MenuItem value={"men's clothing"}>Men's Clothing</MenuItem>
              <MenuItem value={"women's clothing"}>Women's Clothing</MenuItem>
              <MenuItem value={"jewelery"}>Jewellery</MenuItem>
              <MenuItem value={"electronics"}>Electronics</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3}>
          <FormControl fullWidth sx={{ marginTop: 5 }}>
            <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortby}
              label="Sortby"
              onChange={sortProducts}
            >
              <MenuItem value={"low"}>Low to High</MenuItem>
              <MenuItem value={"high"}>High to Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        {loading ? (
          <Loader>
            <HashLoader size={60} />
          </Loader>
        ) : (
          (searchedData ? searchedData : data)?.map((product) => (
            <Grid key={product.id} item lg={4} sm={6} xs={12}>
              <Card sx={{ maxWidth: 345, minHeight: 320, margin: "20px 0px" }}>
                <Link to={`/products/${product.id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt="green iguana"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link
                      to={`/products/${product.id}`}
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {product.title.substring(0, 30) + "..."}
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.rating.rate}
                      precision={0.5}
                      readOnly
                    />
                  </Typography>
                  <Typography gutterBottom variant="h5" component="div">
                    Rs. {parseInt(product.price * 80).toFixed(2)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Order Now</Button>
                  <Button size="small">Add to Cart</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default Products;

const Loader = styled.div`
  height: 80vh;
  width: 100%;
  display: grid;
  place-items: center;
`;
