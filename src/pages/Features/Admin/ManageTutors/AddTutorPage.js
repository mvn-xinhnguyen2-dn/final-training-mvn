import React from 'react'
import { Layout, Breadcrumb } from "antd";
import AddTutorForm from '../../../../components/modules/Forms/AddTutorForm';
import { Link } from 'react-router-dom';

const { Content } = Layout;

export default function AddTutorPage(props) {
  const dataTutors = props.dataTutors;

  return (
    <>
    <Layout className="site-layout">
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
          <Breadcrumb.Item>Add new tutor</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
        >
          <div className='title-table flex'>
            <h3>ADD NEW CLASS</h3>
            <Link to="/admin/manage-tutors" className='btn'>Back</Link>
          </div>
          <AddTutorForm dataTutors={dataTutors} />
        </div>
      </Content>
    </Layout>
  </>
  )
}

