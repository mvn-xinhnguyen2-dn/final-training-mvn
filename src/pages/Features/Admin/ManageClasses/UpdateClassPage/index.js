import React from "react";
import { UpdateClassForm } from "../../../../../components/modules/Forms";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumb, Tag } from "antd";
import {FaUndo} from "react-icons/fa";
const { Content } = Layout;

export default function UpdateClassPage(props) {
  const dataClasses = props.dataClasses;
  const { id } = useParams();
  const classItem = dataClasses.find((item) => item.id === id);
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
            <Breadcrumb.Item>Update new class</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>UPDATE CLASS</h3>
              <Tag color="blue" className="tag">
                <FaUndo className="mt-5 mr-5" />
                <Link to="/admin/manage-classes">Back</Link>
              </Tag>
            </div>
            <UpdateClassForm
              dataClassUpdate={classItem}
              dataClasses={dataClasses}
            />
          </div>
        </Content>
      </Layout>
    </>
  );
}
