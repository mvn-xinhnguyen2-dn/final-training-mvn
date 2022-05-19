import React from 'react';
import { Layout, Breadcrumb } from "antd";
import TutorTable from "../../../../components/modules/Tutors/TutorTable"


const { Content } = Layout;

export default function ManageTutors(props) {
  const dataTutors = props.dataTutors
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Tutors</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
          >
            <TutorTable dataTutors={dataTutors}/>
          </div>
        </Content>
      </Layout>
    </>
  )
}
