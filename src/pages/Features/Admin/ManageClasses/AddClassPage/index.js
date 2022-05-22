import React from "react";
import { AddClassForm } from "../../../../../components/modules/Forms";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag } from "antd";
import {FaUndo} from "react-icons/fa";
const { Content } = Layout;

export default function AddClassPage(props) {
  const dataClasses = props.dataClasses;
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
            <Breadcrumb.Item>Add new class</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW CLASS</h3>
              <Tag color="blue" className="tag">
                <FaUndo className="mt-5 mr-5" />
                <Link to="/admin/manage-classes">Back</Link>
              </Tag>
            </div>
            <AddClassForm dataClasses={dataClasses} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
