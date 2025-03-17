
import React, { useState, useContext } from "react";
import { Table, Button, Modal, Alert } from "antd";
import { ProductContext } from "../App";

const CompareProducts = () => {
  const { compareList, setCompareList, productList } = useContext(ProductContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const removeProduct = (id) => {
    setCompareList(compareList.filter((product) => product.id !== id));
  };

  const handleAddProducts = () => {
    if (compareList.length + selectedProducts.length > 4) {
      setErrorMessage("You can compare a maximum of 4 products at a time.");
      return;
    }
    setCompareList([...compareList, ...selectedProducts]);
    setIsModalOpen(false);
    setSelectedProducts([]);
    setErrorMessage("");
  };

  const compareColumns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Button onClick={() => removeProduct(record.id)}>Remove</Button>,
    },
  ];

  const modalColumns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
  ];

  return (
    <div>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Button onClick={() => setIsModalOpen(true)}>Add More</Button>
      <Table
        dataSource={compareList}
        columns={compareColumns}
        rowKey="id"
        pagination={false}
      />
      <Modal
        title="Add More Products"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddProducts}
      >
        <Table
          rowSelection={{
            type: "checkbox",
            onChange: (_, selectedRows) => {
              if (compareList.length + selectedRows.length > 4) {
                setErrorMessage("You can compare a maximum of 4 products at a time.");
              } else {
                setSelectedProducts(selectedRows);
                setErrorMessage("");
              }
            },
          }}
          dataSource={productList.filter(
            (product) => !compareList.some((item) => item.id === product.id)
          )}
          columns={modalColumns}
          rowKey="id"
        />
      </Modal>
    </div>
  );
};

export default CompareProducts;