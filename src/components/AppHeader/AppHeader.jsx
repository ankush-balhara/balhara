import React from 'react'
import { Image, Space, Typography} from 'antd'
import {MailOutlined, BellFilled} from '@ant-design/icons'
// import {MailOutlined}

const AppHeader = () => {
  return (
    <div className='AppHeader'>
      
      <Image  width={80} src='https://www.creativefabrica.com/wp-content/uploads/2020/01/05/Black-Chess-Knight-Horse-silhouette-logo-Graphics-1.jpg'></Image>

      <Typography.Title>Balhara's WareHouse</Typography.Title>
      <Space>
      <MailOutlined style={{fontSize:34, marginRight:23}} />

      <BellFilled style={{fontSize:34,paddingRight:20 }}/>
      </Space>
      </div>
  )
}

export default AppHeader