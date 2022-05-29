import React from "react";
import { ClassForm } from "../../../../../components/modules/Forms";
import { Link, useParams, useHistory } from "react-router-dom";
import { Layout, Breadcrumb, Tag, message, Form } from "antd";
import { FaUndo } from "react-icons/fa";
const { Content } = Layout;

export default function UpdateClassPage(props) {
  const [form] = Form.useForm();
  let history = useHistory();

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
    classItem.classname = values.classname
    classItem.district = values.district
    classItem.street = values.street
    classItem.salary = values.salary
    classItem.time = values.time
    classItem.numberOfSessions = values.numberOfSessions
    classItem.phone = values.phone
    classItem.nameParent = values.nameParent
    classItem.genderOfParent = values.genderOfParent
    classItem.genderOfStudent = values.genderOfStudent
    localStorage.setItem("classes", JSON.stringify(dataClasses));
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
            <Breadcrumb.Item>Update class</Breadcrumb.Item>
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
