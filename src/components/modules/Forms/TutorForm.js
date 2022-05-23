import { Form, Input, InputNumber, Button, Select, Radio } from "antd";
import { Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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
  types: {
    number: "${label} is not a valid number!",
  },
};
/* eslint-enable no-template-curly-in-string */
const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export default function TutorForm({ onFinish, form }) {
  return (
    <div className="form form-add-class tutor">
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
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
              type: "number",
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
          label="Area"
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
              type: "text",
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="avatar"
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
            listType="picture"
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
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
