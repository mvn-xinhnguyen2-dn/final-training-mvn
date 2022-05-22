import React from "react";
import { AddTutorForm } from "../../../../../components/modules/Forms";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag } from "antd";
import {FaUndo} from "react-icons/fa";
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
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW TUTOR</h3>
              <Tag color="blue" className="tag">
                <FaUndo className="mt-5 mr-5" />
                <Link to="/admin/manage-tutors">Back</Link>
              </Tag>
            </div>
            <AddTutorForm dataTutors={dataTutors} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
