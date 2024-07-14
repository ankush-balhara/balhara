import { Space, Typography, Card, Table,Rate, Avatar } from "antd";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Statistic from "antd/es/statistic/Statistic";
import { getOrders,getInventory } from "../../API";


const Dashboard = () => {
 
  return (
    <div>
      <Typography.Title level={3}>Dashboard</Typography.Title>

      <Space>
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "purple",
                backdropColor: "rgba(0,255,0,0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 4,
              }}
            />
          }
          title={"Inventory"}
          value={34567}
        />

        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                background: "rgba(0,255,0,0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 4,
              }}
            />
          }
          title={"Orders"}
          value={9876}
        />

        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "orange",
                backdropColor: "rgba(255, 165, 0, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 4,
              }}
            />
          }
          title={"Customers"}
          value={123334}
        />

        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "blue",
                backdropColor: "rgba(0, 0, 255, 0.5)",
                borderRadius: 20,
                fontSize: 24,
                padding: 4,
              }}
            />
          }
          title={"Revenue"}
          value={123334}
        />
      </Space>
      <Typography.Title level={4}>Recent Orders</Typography.Title>
      <Space>
        <RecentOrders />
      </Space>
    </div>
  );
};

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space>
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}



function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getOrders()
      .then((res) => {
        setDataSource(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setLoading(false);
      });
  }, []);

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
      title: "Price",
      dataIndex: "price",
      render: (price) => `$${price}`,
    },
    {
      title: "Rating",
      dataIndex: "rating",
      render: (rating) => <Rate value={rating}/>
    },
    {
      title: "Stock",
      dataIndex: "stock",
    },
    {
      title: "Brand",
      dataIndex: "brand",
    },
    {
      title: "Warranty",
      dataIndex: "warrantyInformation",
    },
    {
      title: "Discount",
      dataIndex: "discountPercentage",
      render:((discountPercentage) => {
        return <span>{discountPercentage}%</span>
      })
    },
  ];


  return <Table columns={columns} loading={loading} dataSource={dataSource} pagination={{
    pageSize:7
  }} />;
}
 
export default Dashboard;
