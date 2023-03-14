import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "../redux/actions/productActions";

const ProductDetail = () => {
  // TODOS
  // 1) Import Axios(DONE)
  // 2) Make API call to get a SINGLE product(ONGOING)
  // 3) Render out the product details

  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(product);

  // Seeing the product ID
  console.log(productId);

  // API call

  // Define function for the call
  const retrieveProductDetail = async () => {
    // define a response variable and make the call
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });

    // Dispatch the action and add the action
    dispatch(selectedProducts(response.data));
  };

  // useEffect to call retrieveProductDetail
  useEffect(() => {
    if (productId && productId !== "") {
      retrieveProductDetail();
    }
  }, [productId]);

  return (
    <div>
      {" "}
      <h1> ProductDetail</h1>
    </div>
  );
};

export default ProductDetail;
