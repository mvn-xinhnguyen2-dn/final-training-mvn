import { Form, Input, InputNumber, Button, Select, Radio, message } from "antd";
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';


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
  console.log('Upload event:', (e));
  // console.log('Upload event:', (e.file.thumbUrl));

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

export default function AddTutorForm(props) {
  const [form] = Form.useForm();
  const dataTutors = props.dataTutors;
  console.log(dataTutors)


  const onFinish = (values) => {
    const id = `t${Math.floor(Math.random() * 101)}`;
    const avatarLink = values.avatar[0].thumbUrl
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
    console.log(newTutor);
    console.log(dataTutors)
    dataTutors.push(newTutor);
    localStorage.setItem("tutors", JSON.stringify(dataTutors));
    form.resetFields()
    message.success("Add class in successfully");
  };
  
  return (
    <div className="form form-add-class">
      <Form
        form ={form}
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
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name="experience"
          label="Experience"
        >
          <Select placeholder="Experience">
            <Option value="More than 1 years">More than 1 years</Option>
            <Option value="More than 2 years">More than 2 years</Option>
            <Option value="More than 3 years">More than 3 years</Option>
            <Option value="No experience">No experience</Option>
          </Select>
        </Form.Item>
        <Form.Item name="area" label="Address">
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
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="avatar" label="Avatar" 
          valuePropName="fileList" 
          getValueFromEvent={normFile}
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload
              // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              
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
