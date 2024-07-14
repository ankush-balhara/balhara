import { Typography } from 'antd'
import React from 'react'

const AppFooter = () => {
  return (
    <div className='AppFooter'>
    <Typography.Link href='tel:+917082177444'>7082177444</Typography.Link>
    <Typography.Link href='https://www.google.com' target='_blank'>Privacy Policy of the Website</Typography.Link>
    <Typography.Link href='https://www.google.com' target='_blank'>Terms of use</Typography.Link>
  </div>
  )
}

export default AppFooter