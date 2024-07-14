
import { Space, Typography, Table, Avatar } from "antd";
import { getCart } from "../../API";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    getCart().then((res) => {
      data.map((cart) => cart.products);
      const cartData = res.carts.map((cart) => cart.products);
      const flattenedData = [].concat(...cartData);
      setData(flattenedData);
      setLoading(false);
    });
  }, []);



  // console.log(data);
  

  const columns = [
    {
      title: "Logo",
      dataIndex: "thumbnail",
      render: (thumbnail) => {
        return (
          <Avatar src={thumbnail} style={{width:70, height:70}}/>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Discount%",
      dataIndex: "discountPercentage",
      render:((discountPercentage)=>{
        return <span>{discountPercentage}%</span>
      })
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Total",
      dataIndex: "total",
    },
  ];

  return (
    <Space direction="vertical" level={3}>
      <Typography.Title size="large" style={{ color: "blue" }}>
        Orders Warehouse
      </Typography.Title>
      <Space>
        <Table
          loading={loading}
          key={Orders}
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </Space>
    </Space>
  );
};

export default Orders;
