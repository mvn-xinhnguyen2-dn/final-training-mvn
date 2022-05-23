import React from "react";
import { useParams, Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag } from "antd";
import { FaUndo } from "react-icons/fa";

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
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3 className="my-30">Class Detail</h3>
              <Tag color="blue" className="tag">
                <FaUndo className="mt-5 mr-5" />
                <Link to="/admin/manage-classes">Back</Link>
              </Tag>
            </div>
            <div className="class-detail mx-auto flex">
              <div className="class-detail info col-6">
                <h4>Class info</h4>
                <p>Class: {classItem.classname}</p>
                <p>Salary: {classItem.salary}</p>
                <p>Time: {classItem.time}</p>
                <p>Number of sessions: {classItem.numberOfSessions}</p>
                <p>
                  Gender of student:{" "}
                  {classItem.genderOfStudent === 0 ? "Male" : "Female"}
                </p>
                <p>
                  Status:{" "}
                  {classItem.status ? (
                    <Tag color="green">Available</Tag>
                  ) : (
                    <Tag color="volcano">Disvailable</Tag>
                  )}
                </p>
              </div>
              <div className="class-detail info col-6">
                <h4>Parent info</h4>
                <p>Name of parent: {classItem.nameParent}</p>
                <p>Phone: {classItem.phone}</p>
                <p>
                  Address: {classItem.street}, {classItem.district}
                </p>
                <p>
                  Gender of parent:{" "}
                  {classItem.genderOfParent === 0 ? "Male" : "Female"}
                </p>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}
