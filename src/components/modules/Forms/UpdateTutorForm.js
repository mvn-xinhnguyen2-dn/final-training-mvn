import { getDatabase, ref, update } from "firebase/database";
import React, { useState } from "react";
import {
  Upload,
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Radio,
  message,
} from "antd";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 10,
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} is required!",
};
/* eslint-enable no-template-curly-in-string */
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

export default function UpdateTutorForm({ tutorItem, dataTutors }) {
  const [form] = Form.useForm();
  const [avatarLink, setAvatarLink] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: `${tutorItem.avatar}`,
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    newFileList[1].status="done"
    fileList.push(newFileList);
    setAvatarLink(fileList[1].thumbUrl);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  form.setFieldsValue({
    fullName: tutorItem.fullName,
    yearOfBirth: tutorItem.yearOfBirth,
    gender: tutorItem.gender,
    phone: tutorItem.phone,
    experience: tutorItem.experience,
    area: tutorItem.area,
    avatar: tutorItem.avatar,
  });

  const onFinish = (values) => {
    const db = getDatabase();
    const tutorUpdate = {
      id: tutorItem.id,
      avatar: avatarLink || tutorItem.avatar,
      fullName: values.fullName,
      yearOfBirth: values.yearOfBirth,
      gender: values.gender,
      phone: values.phone,
      experience: values.experience,
      area: values.area,
    };
    const updates = {};
    updates["/tutors/" + tutorItem.id] = tutorUpdate;
    message
      .loading("Action in progress..", 0.5)
      .then(() => message.success("Update tutor in successfully", 0.5));
    let itemUpdate = dataTutors.find((item) => item.id === tutorItem.id);
    itemUpdate.avatar = avatarLink || tutorItem.avatar;
    itemUpdate.fullName = values.fullName;
    itemUpdate.yearOfBirth = values.yearOfBirth;
    itemUpdate.gender = values.gender;
    itemUpdate.phone = values.phone;
    itemUpdate.experience = values.experience;
    itemUpdate.area = values.area;
    return update(ref(db), updates);
  };

  return (
    <div className="form form-add-class">
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          label="Avatar"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 2 && "+ Upload"}
          </Upload>
          <p></p>
        </Form.Item>
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Radio.Group>
            <Radio value={0}>Male</Radio>
            <Radio value={1}>Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="yearOfBirth"
          label="Year"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="experience"
          label="Experience"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Experience">
            <Option value="More than 1 years">More than 1 years</Option>
            <Option value="More than 2 years">More than 2 years</Option>
            <Option value="More than 3 years">More than 3 years</Option>
            <Option value="No experience">No experience</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="area"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="District">
            <Option value="Hai Chau">Hai Chau</Option>
            <Option value="Ngu Hanh Son">Ngu Hanh Son</Option>
            <Option value="Son Tra">Son Tra</Option>
            <Option value="Cam Le">Cam Le</Option>
            <Option value="Thanh Khe">Thanh Khe</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              type: "text",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
