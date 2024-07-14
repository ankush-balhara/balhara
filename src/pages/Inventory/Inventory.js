import React, { useEffect, useState } from "react";
import { Descriptions, Space, Table, Typography,Rate } from "antd";
import { getInventory } from "../../API";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "Rating",
      dataIndex: "rating",
      render:(rating)=> <Rate value={rating} allowhalf disabled/>
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      render:(price => {
        return <span>${price}</span>
      })
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Tags",
      dataIndex: "tags",
    },
  ];

  return (
    <Space direction="vertical" level={3}>
      <Typography.Title  size="large" style={{ color: "red" }}>
        Inventory Warehouse
      </Typography.Title>
      <Space>
        <Table loading={loading}  columns={columns}  dataSource={data} pagination={{
          pageSize:7
        }} />
      </Space>
    </Space>
  );
};

export default Inventory;
