import React from "react";
import { TutorForm } from "../../../../../components/modules/Forms";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Tag, Form, message } from "antd";
import { FaUndo } from "react-icons/fa";
const { Content } = Layout;

export default function AddTutorPage({ dataTutors }) {
  const [form] = Form.useForm();
  const onAddTutor = (values) => {
    console.log(values);
    const id = `t${Math.floor(Math.random() * 101)}`;
    const avatarLink = values.avatar[0].thumbUrl;
    const newTutor = {
      key: id,
      id,
      fullName: values.fullName,
      yearOfBirth: values.yearOfBirth,
      gender: values.gender,
      phone: values.phone,
      experience: values.experience,
      area: values.area,
      avatar: avatarLink,
    };
    dataTutors.unshift(newTutor);
    localStorage.setItem("tutors", JSON.stringify(dataTutors));
    form.resetFields();
    message.success("Add class in successfully");
  };

  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
            <Breadcrumb.Item>Add new tutor</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW TUTOR</h3>
              <Tag color="blue" className="tag">
                <FaUndo className="mt-5 mr-5" />
                <Link to="/admin/manage-tutors">Back</Link>
              </Tag>
            </div>
            <TutorForm
              dataTutors={dataTutors}
              onFinish={onAddTutor}
              form={form}
            />
          </div>
        </Content>
      </Layout>
    </>
  );
}
