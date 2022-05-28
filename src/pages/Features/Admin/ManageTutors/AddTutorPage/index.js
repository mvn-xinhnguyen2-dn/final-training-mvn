import React from "react";
import { TutorForm } from "../../../../../components/modules/Forms";
import { Link , useHistory } from "react-router-dom";
import { Layout, Breadcrumb, Button, Form, message } from "antd";
import { FaUndo } from "react-icons/fa";
const { Content } = Layout;

export default function AddTutorPage({ dataTutors }) {
  const [form] = Form.useForm();
  let history = useHistory();
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
    history.push("/admin/manage-tutors");

  };

  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
            <Breadcrumb.Item><Link to="/admin">Admin</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/admin/manage-tutors">Manage Tutors</Link></Breadcrumb.Item>
            <Breadcrumb.Item>Add new tutor</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <div className="title-table flex">
              <h3>ADD NEW TUTOR</h3>
              <Button onClick={() => history.goBack()}><FaUndo className="mt-5 mr-5" />Back</Button>
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
