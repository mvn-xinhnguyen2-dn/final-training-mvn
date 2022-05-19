import React from 'react';
import { Layout, Breadcrumb } from "antd";
import ParentTable from '../../../../components/modules/Parents/ParentTable';

const { Content } = Layout;

export default function ManageParents() {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Parents</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
          >
            {/* <ParentTable /> */}
          </div>
        </Content>
      </Layout>
    </>
  )
}

