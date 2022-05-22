import React from "react";
import { useParams } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

export default function ClassDetail(props) {
  const dataClasses = props.dataClasses;
  const { id } = useParams();
  const classItem = dataClasses.find((item) => item.id === id);
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
            <Breadcrumb.Item>Detail</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background"></div>
          <div>Class Detail {id}</div>
          <p>{classItem.nameParent}</p>
        </Content>
      </Layout>
    </>
  );
}
