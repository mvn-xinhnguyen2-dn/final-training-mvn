import React from 'react'
import { Layout, Breadcrumb } from "antd";
import UpdateClassForm from '../../../../../components/modules/Forms/AddClassForm';
import { Link } from 'react-router-dom';

const { Content } = Layout;

export default function UpdateClassPage(props) {
  const dataClasses = props.dataClasses
  return (
    <>
    <Layout className="site-layout">
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
          <Breadcrumb.Item>Update new class</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
        >
          <div className='title-table flex'>
            <h3>ADD NEW CLASS</h3>
            <Link to="/admin/manage-classes" className='btn'>Back</Link>
          </div>
          <UpdateClassForm dataClasses={dataClasses} />
        </div>
      </Content>
    </Layout>
  </>
  )
}

