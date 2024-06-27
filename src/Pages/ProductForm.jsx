import { useEffect, useState } from "react";
import axiosClient from "../axios/axiosClient";
import { useNavigate, useParams } from "react-router-dom";

const ProductForm = () => {
  const { id } = useParams();
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: null,
  });

  useEffect(() => {
    if (id) {
      setLoading(true);
      axiosClient
        .get(`/products/${id}`)
        .then(({ data }) => {
          setLoading(false);
          setProduct(data.data); // Ensure data.data is used correctly
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary m-2" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("description", product.description);
    if (product.image && typeof product.image !== "string") {
      formData.append("image", product.image);
    }
    
    if (product.id) {
      axiosClient
        .put(`/products/${product.id}`, formData)
        .then(() => {
          navigate("/products");
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    } else {
      axiosClient
        .post("/products", formData)
        .then(() => {
          navigate("/products");
        })
        .catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <>
      <div>
        {product.id ? (
          <h1 className="my-2">Update Product: {product.name}</h1>
        ) : (
          <h1 className="my-4">New Product</h1>
        )}
        <div className="">
          {errors && (
            <div className="alert">
              {Object.keys(errors).map((key) => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </div>
          )}
          {!loading && (
            <div className="card col-md-5">
              <form className="form-horizontal" role="form" onSubmit={onSubmit}>
                <div className="mb-2 m-4">
                  <label htmlFor="product-name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={product.name}
                    onChange={(ev) =>
                      setProduct({ ...product, name: ev.target.value })
                    }
                  />
                </div>
                <div className="mb-2 m-4">
                  <label htmlFor="product-price" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={product.price}
                    onChange={(ev) =>
                      setProduct({ ...product, price: ev.target.value })
                    }
                  />
                </div>
                <div className="mb-2 m-4">
                  <label htmlFor="product-description" className="form-label">
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Add a description here"
                    style={{ height: "100px" }}
                    value={product.description}
                    onChange={(ev) =>
                      setProduct({
                        ...product,
                        description: ev.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="mb-2 m-4">
                  <label htmlFor="product-image" className="form-label">
                    Product Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(ev) => {
                      setProduct({ ...product, image: ev.target.files[0] });
                    }}
                  />
                </div>
                {product.image && typeof product.image === "string" && (
                  <div className="mb-2 m-4">
                    <img
                      src={product.image}
                      alt="Product"
                      style={{ width: "100px" }}
                    />
                  </div>
                )}
                <button className="m-4 btn btn-primary">Save</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductForm;
