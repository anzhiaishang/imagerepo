import React, { useEffect, useState } from 'react';
import './index.css'
import { Button, Layout, PageHeader } from 'antd';
import { Link } from 'react-router-dom';


const MainPage = () => {
  const [type, setType] = useState('setu')

  return (
    <div id='mainpage'>
      <Button>抽 卡</Button>
      <Button ><Link to={'/upload'}>{'氪 金(上传色图)'}</Link></Button>

    </div>
  )
}

export default MainPage