
import { Space, Typography, Table, Avatar } from "antd";
import {  getCustomers } from "../../API";
import React, { useEffect, useState } from "react";

const Customers = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomers()
      .then((response) => {
        setData(response.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);


//   getCustomers().then((res) => {
//     data.map((cart) => cart.products);
//     const cartData = res.carts.map((cart) => cart.products);
//     const flattenedData = [].concat(...cartData);
//     setData(flattenedData);
//     setLoading(false);
//   });
// }, []);
 
 
  console.log(data);
  console.log(data);
  console.log('');

  console.log(data);
  console.log(data);
  console.log(data);


  

  console.log("Customer Data:", data);

  console.log(data);

  const columns = [

    {
      title: "Logo",
      dataIndex: "image",
      render: (image) => {
        return (
          <Avatar src={image} style={{width:70, height:70}}/>
        );
      },
    },
    
    {
      title: "firstName",
      dataIndex: "firstName",
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      // render:((discountPercentage)=>{
      //   return <span>{discountPercentage}%</span>
      // })
    },
    
    {
      title: "username",
      dataIndex: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "BirthDate",
      dataIndex: "birthDate",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];

  return (
    <Space direction="vertical" level={3}>
      <Typography.Title size="large" style={{ color: "grey" }}>
        Customers Details
      </Typography.Title>
      <Space>
        <Table
          loading={loading}
          columns={columns}
          
          dataSource={data}
          pagination={{ pageSize: 5 }}
        />
      </Space>
    </Space>
  );
};

export default Customers;
