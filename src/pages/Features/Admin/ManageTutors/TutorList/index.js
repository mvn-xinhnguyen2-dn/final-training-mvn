import React from "react";
import { TutorTable } from "../../../../../components/modules/Tutors";
import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

export default function TutorList({ dataTutors }) {
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
            <Breadcrumb.Item>
              <Link to="/admin">Admin</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Manage Tutors</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <TutorTable dataTutors1={dataTutors} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
