import React from "react";
import { TutorTable } from "../../../../../components/modules/Tutors";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function TutorList(props) {
  const dataTutors = props.dataTutors;
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="pl-30 pt-20">
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Tutors</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <TutorTable dataTutors={dataTutors} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
