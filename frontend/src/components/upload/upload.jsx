import { InboxOutlined } from '@ant-design/icons'
import { message, Upload } from 'antd'
import React from 'react'
import { baseUrl } from '../../config'

const { Dragger } = Upload
const drageerProps = {
  name: 'photos',
  accept: ".jpg, .jpeg, .png",
  multiple: true,
  onChange (info) {
    const { status } = info.file
    console.group(info, 'info')
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },

  onDrop (e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

const UploadImg = (props) => {
  const type = props.type;

  return (
    <Dragger action={baseUrl + '/upload' + type}
      style={{ width: 300 }}
      {...drageerProps}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">点击此处/拖拽至此处上传文件</p>
      <p className="ant-upload-hint">
        支持多文件上传,can can need setu
      </p>
    </Dragger>)
}

export default UploadImg
