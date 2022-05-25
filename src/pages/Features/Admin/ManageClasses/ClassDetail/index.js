import React from "react";
import { useParams, Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag } from "antd";
import { FaUndo } from "react-icons/fa";
import { Switch, Route } from "react-router-dom";
import UpdateClassPage from "../UpdateClassPage";

const { Content } = Layout;

export default function ClassDetail(props) {
  const dataClasses = props.dataClasses;
  const { id } = useParams();
  const classItem = dataClasses.find((item) => item.id === id);

  return (
    <>
      <Switch>
        <Route
          path={"/admin/manage-classes/:id/edit"}
          children={<UpdateClassPage dataClasses={dataClasses} />}
        ></Route>
        <Layout className="site-layout">
          <Content>
            <Breadcrumb className="pl-30 pt-10">
              <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
              <Breadcrumb.Item>Detail</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background flex mr-30">
              <div className="col-9">
                <div className="title-table flex">
                  <h3 className="">Class Detail</h3>
                  <Tag color="blue" className="tag">
                    <FaUndo className="mt-5 mr-5" />
                    <Link to="/admin/manage-classes">Back</Link>
                  </Tag>
                </div>
                <div className="class-detail mx-auto flex">
                  <div className="class-detail-info col-6">
                    <h4>Class info</h4>
                    <p>Class: {classItem.classname}</p>
                    <p>Salary: {classItem.salary}</p>
                    <p>Time: {classItem.time}</p>
                    <p>Number of sessions: {classItem.numberOfSessions}</p>
                    <p>
                      Gender of student:{" "}
                      {classItem.genderOfStudent === 0 ? "Male" : "Female"}
                    </p>
                  </div>
                  <div className="class-detail-info col-6">
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
                    <p>
                      Status:{" "}
                      {classItem.status ? (
                        <Tag color="green">Available</Tag>
                      ) : (
                        <Tag color="volcano">Disvailable</Tag>
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="support-info col-3">
                <div className="">
                  <h4 className="center mb-10">CONTACT US</h4>
                  <Tag className="tag ml-0 p-5 mb-10" color="orange">
                    Phone: 0123456789
                  </Tag>
                  <br />
                  <Tag className="tag ml-0 p-5 mb-10" color="green">
                    Gmail: xinh@gmail.com
                  </Tag>
                </div>
                <img
                  src="https://akadon.edu.vn/static/media/fist-img.bd7dfbcd.svg"
                  alt="banner"
                />
                <br />
                <br />
                <img
                  src="https://akadon.edu.vn/static/media/online.bcbcf5e3.svg"
                  alt="banner"
                />
              </div>
            </div>
          </Content>
        </Layout>
      </Switch>
    </>
  );
}
