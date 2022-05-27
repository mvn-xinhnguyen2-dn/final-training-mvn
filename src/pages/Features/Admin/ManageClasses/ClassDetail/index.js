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
            <Breadcrumb className="px-30 pt-20">
              <Breadcrumb.Item><Link to="/admin">Admin</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/admin/manage-classes">Manage Classes</Link></Breadcrumb.Item>
              <Breadcrumb.Item>Detail</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background mr-30">
                <div className="title-table flex">
                  <h3 className="">CLASS DETAIL</h3>
                  <Tag color="blue" className="tag">
                    <FaUndo className="mt-5 mr-5" />
                    <Link to="/admin/manage-classes">Back</Link>
                  </Tag>
                </div>
                <div className="class-detail mx-auto flex">
                  <div className="class-detail-info col-6">
                    <p><b>Class: </b>{classItem.classname}</p>
                    <p><b>Salary: </b>{classItem.salary*1000} VND</p>
                    <p><b>Time: </b>{classItem.time}</p>
                    <p><b>Number of sessions: </b>{classItem.numberOfSessions}</p>
                    <p><b>
                      Gender of student:</b>{classItem.genderOfStudent === 0 ? " Male" : " Female"}
                    </p>
                  </div>
                  <div className="class-detail-info col-6">
                    <p><b>Name of parent: </b>{classItem.nameParent}</p>
                    <p><b>Phone: </b>{classItem.phone}</p>
                    <p><b>
                      Address: </b>{classItem.street}, {classItem.district}
                    </p>
                    <p><b>
                      Gender of parent:</b>{classItem.genderOfParent === 0 ? " Male" : " Female"}
                    </p>
                    <p><b>
                      Status:{" "}</b>
                      {classItem.status ? (
                        <Tag color="green">Available</Tag>
                      ) : (
                        <Tag color="volcano">Disvailable</Tag>
                      )}
                    </p>
                  </div>
                </div>
            </div>
          </Content>
        </Layout>
      </Switch>
    </>
  );
}
