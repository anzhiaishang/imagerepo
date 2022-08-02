import React, { useEffect, useState } from 'react';
import './index.css'
import { Select } from 'antd';
import UploadImg from '../../components/upload/upload';

const { Option } = Select;

const FileUpload = () => {
  const [type, setType] = useState('setu')

  return (
    <div id='fileupload-main-container'>
      <Select defaultValue={type} onChange={(value) => setType(value)} style={{ width: 100 }}>
        <Option value='setu'>色图</Option>
        <Option value='diaotu'>吊图</Option>
      </Select>
      <UploadImg type={type}></UploadImg>
    </div>
  )
}

export default FileUpload