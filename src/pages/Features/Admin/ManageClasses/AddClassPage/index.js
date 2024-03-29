import React from "react";
import { ClassForm } from "../../../../../components/modules/Forms";
import { Link, useHistory } from "react-router-dom";
import { Layout, Breadcrumb, Form, message, Button } from "antd";
import { FaUndo } from "react-icons/fa";
import { getDatabase, ref, set } from "firebase/database";
const { Content } = Layout;

export default function AddClassPage(props) {
  const dataClasses = props.dataClasses;
  let history = useHistory();
  const [form] = Form.useForm();

  const onAddClass = (values) => {
    const db = getDatabase();
    const id = `c${Math.floor(Math.random() * 101)}`;
    set(ref(db, "classes/" + id), {
      id,
      classname: values.classname,
      district: values.district,
      street: values.street,
      salary: values.salary,
      time: values.time,
      numberOfSessions: values.numberOfSessions,
      phone: values.phone,
      nameParent: values.nameParent,
      genderOfParent: values.genderOfParent,
      genderOfStudent: values.genderOfStudent,
      status: true,
    });
    form.resetFields();
    message.success("Add class in successfully");
    history.push("/admin/manage-classes");
  };
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
            <Breadcrumb.Item>
              <Link to="/admin">Admin</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/admin/manage-classes">Manage Classes</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Add new class</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW CLASS</h3>
              <Button onClick={() => history.goBack()}>
                <FaUndo className="mt-5 mr-5" />
                Back
              </Button>
            </div>
            <ClassForm dataClasses={dataClasses} onFinish={onAddClass} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
