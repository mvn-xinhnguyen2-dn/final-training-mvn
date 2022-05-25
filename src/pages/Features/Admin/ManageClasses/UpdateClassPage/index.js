import React from "react";
import { ClassForm } from "../../../../../components/modules/Forms";
import { Link, useParams } from "react-router-dom";
import { Layout, Breadcrumb, Tag, message, Form } from "antd";
import { FaUndo } from "react-icons/fa";
const { Content } = Layout;

export default function UpdateClassPage(props) {
  const [form] = Form.useForm();

  const dataClasses = props.dataClasses;
  const { id } = useParams();
  const classItem = dataClasses.find((item) => item.id === id);

  form.setFieldsValue({
    classname: classItem.classname,
    time: classItem.time,
    salary: classItem.salary,
    genderOfStudent: classItem.genderOfStudent,
    nameParent: classItem.nameParent,
    numberOfSessions: classItem.numberOfSessions,
    district: classItem.district,
    street: classItem.street,
    phone: classItem.phone,
    genderOfParent: classItem.genderOfParent,
  });

  const onUpdateClass = (values) => {
    message.success("Update class in successfully");
    const updateClass = {
      id: classItem.id,
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
    };
    updateItem2Local(updateClass);
  };

  const updateItem2Local = (updateClass) => {
    let itemUpdate = dataClasses.find((item) => item.id === updateClass.id);
    itemUpdate.id = updateClass.id;
    itemUpdate.classname = updateClass.classname;
    itemUpdate.district = updateClass.district;
    itemUpdate.street = updateClass.street;
    itemUpdate.salary = updateClass.salary;
    itemUpdate.time = updateClass.time;
    itemUpdate.phone = updateClass.phone;
    itemUpdate.numberOfSessions = updateClass.numberOfSessions;
    itemUpdate.nameParent = updateClass.nameParent;
    itemUpdate.genderOfParent = updateClass.genderOfParent;
    itemUpdate.genderOfStudent = updateClass.genderOfStudent;
    localStorage.setItem("classes", JSON.stringify(dataClasses));
  };
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="pl-30 pt-20">
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
            <ClassForm form={form} onFinish={onUpdateClass} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
