import React from "react";
import { ClassForm } from "../../../../../components/modules/Forms";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag, Form, message } from "antd";
import { FaUndo } from "react-icons/fa";
const { Content } = Layout;

export default function AddClassPage(props) {
  const dataClasses = props.dataClasses;
  const [form] = Form.useForm();

  const onAddClass = (values) => {
    const id = `c${Math.floor(Math.random() * 101)}`;
    const newClass = {
      key: id,
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
    };
    dataClasses.unshift(newClass);
    localStorage.setItem("classes", JSON.stringify(dataClasses));
    form.resetFields();
    message.success("Add class in successfully");
  };
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
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
            <ClassForm dataClasses={dataClasses} onFinish={onAddClass} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
