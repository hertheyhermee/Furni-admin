import React, { useEffect, useState } from "react";
import axiosClient from "../axios/axiosClient";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sn, setSn] = useState(null);

  const getProducts = () => {
    setLoading(true);

    axiosClient
      .get("/products")
      .then(({ data }) => {
        const productsWithSn = data.data.map((product, index) => ({
          ...product,
          sn: index + 1, // Adding serial number
        }));
        setProducts(productsWithSn);
        setLoading(false);
        console.log(productsWithSn);
      })
      .catch(({ error }) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    axiosClient
      .delete(`/products/${id}`)
      .then(({ response }) => {
        setProducts(products.filter((product) => product.id != id));
        console.log(response);
      })
      .catch(({ error }) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="py-4">Products</h1>
        <Link to="/products/new">
          <button type="button" class="btn btn-primary waves-effect waves-light">Add new product</button>
        </Link>
      </div>
      <table id="basic-datatable" className="table dt-responsive nowrap w-100">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Product_id</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan="10">
                <div className="d-flex justify-content-center">
                  <div
                    className="spinner-border text-primary m-2"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            products &&
            products.length > 0 &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.sn}</td>
                <td><img src={product.image} alt="" style={{width: '30px', height: '30px', borderRadius: '50%'}} /></td>
                <td>{product.name}</td>
                <td><div style={{maxWidth: '200px'}}>{product.description}</div></td>
                <td>{product.id}</td>
                <td>${product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <span>
                    {product.createdAt.date}-{product.createdAt.year}
                  </span><br /> 
                  <span>{product.createdAt.time}</span>
                </td>
                <td>
                  <span>
                    {product.updatedAt.date}-{product.updatedAt.year}
                  </span><br />
                  <span>{product.updatedAt.time}</span>
                </td>
                <td>
                  <Link
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    to={ '/products/'+ product.id }
                  >
                    Edit
                  </Link>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-danger waves-effect waves-light"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
