import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Table, Button, Alert } from "antd";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { ProductContext } from "../App";

const ProductDetails = () => {
  const { compareList, setCompareList, productList, setProductList } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProductList(res.data.products);
      setLoading(false);
    });
  }, [setProductList]);

  const addToCompare = (product) => {
    if (compareList.length < 4 && !compareList.find((p) => p.id === product.id)) {
      setCompareList([...compareList, product]);
      navigate("/compare");
      setErrorMessage("");
    } else {
      setErrorMessage("You can compare a maximum of 4 products at a time.");
    }
  };

  const columns = [
    { title: "Id", dataIndex: "id", key: "id" },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    { title: "Price", dataIndex: "price", key: "price", sorter: (a, b) => a.price - b.price,
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    { title: "Discount", dataIndex: "discountPercentage", key: "discountPercentage", sorter: (a, b) => a.discountPercentage - b.discountPercentage,
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    { title: "Brand", dataIndex: "brand", key: "brand",
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    { title: "Category", dataIndex: "category", key: "category",
      render: (text, record) => (compareList.some(item=> item.id === record.id) ? <span style={{backgroundColor:"yellow"}}>{text}</span> : <span>{text}</span>)
    },
    { title: "Image", dataIndex: "thumbnail", key: "thumbnail", render: (img) => <img src={img} alt="" width={50} /> },
    {
      title: "Compare",
      dataIndex: "compare",
      key: "compare",
      render: (_, record) => (
        <Button onClick={() => addToCompare(record)} disabled={compareList.find((p) => p.id === record.id)}>
          Compare
        </Button>
      ),
    },
  ];

  return (
    <div>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Table dataSource={productList} columns={columns} loading={loading} rowKey="id" pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductDetails;
