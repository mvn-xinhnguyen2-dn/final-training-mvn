import { Form, Input, InputNumber, Button, Select, Radio } from "antd";

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

export default function ClassForm({ onFinish, form }) {
  return (
    <div className="form form-add-class">
      <Form
        form={form}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <div className="form-wrap flex">
          <div className="form-info-class col-6">
            <Form.Item
              name="classname"
              label="Class"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Class">
                <Option value="1">Class 1</Option>
                <Option value="2">Class 2</Option>
                <Option value="3">Class 3</Option>
                <Option value="4">Class 4</Option>
                <Option value="5">Class 5</Option>
                <Option value="6">Class 6</Option>
                <Option value="7">Class 7</Option>
                <Option value="8">Class 8</Option>
                <Option value="9">Class 9</Option>
                <Option value="10">Class 10</Option>
                <Option value="11">Class 11</Option>
                <Option value="12">Class 12</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="time"
              label="Time"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder="Time">
                <Option value="Morning">Morning</Option>
                <Option value="Afternoon">Afternoon</Option>
                <Option value="Evening">Evening</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="numberOfSessions"
              label="Number of sessions"
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="salary"
              label="Salary"
              rules={[
                {
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name="genderOfStudent" label="Gender of student">
              <Radio.Group>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="form-info-parent col-6">
            <Form.Item
              name="nameParent"
              label="Name of parent"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="district" label="Address">
              <Select placeholder="District">
                <Option value="Hai Chau">Hai Chau</Option>
                <Option value="Ngu Hanh Son">Ngu Hanh Son</Option>
                <Option value="Son Tra">Son Tra</Option>
                <Option value="Cam Le">Cam Le</Option>
                <Option value="Thanh Khe">Thanh Khe</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="street"
              label="Street"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
              <Input placeholder="Street" />
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
            <Form.Item name="genderOfParent" label="Gender of parent">
              <Radio.Group>
                <Radio value={0}>Male</Radio>
                <Radio value={1}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
