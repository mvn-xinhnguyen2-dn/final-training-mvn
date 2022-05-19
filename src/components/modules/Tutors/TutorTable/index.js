import { Table, Input, Button, Space, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import UpdateTutor from "../../Forms/UpdateTutor";

export default function ParentTable() {
  const data = JSON.parse(localStorage.getItem("tutors")) || [];
  const items = data.map((item) =>(
    {key : item.id,
    ...item
    }))
  const [dataTutors, setDataTutors] = useState(items);

  const handleDelete = (id) => {
    Modal.confirm({
      title: `Delete Tutor id : ${id}`,
      onOk: () => {
        const newData = dataTutors.filter((e) => {
          return e.id !== id;
        });
        setDataTutors(newData);
        localStorage.setItem("tutors", JSON.stringify(newData));
      },
    });
  };

  const handleEdit = (itemUpdate) => {
    Modal.info({
      title: `Edit Tutor id : ${itemUpdate.id}`,
      content: (
        <>
          <div>heleo</div>
          <UpdateTutor itemUpdate={itemUpdate} dataTutors = {dataTutors} />
        </>
      ),
      onOk: () => {
        setDataTutors([...dataTutors])
      },
      okText: "Close"
    });
  };
  const handleSeeDetail = (id) => {
    Modal.info({
      title: `Information of class id : ${id}`,
      content: (
        <>
          <div>heleo</div>
          <div>heleo</div>
          <div>heleo</div>
        </>
      ),
      onOk: () => {
        console.log("ok")
      },
      okText: "Close"
    });
  };

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters, confirm, dataIndex)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(
              () => searchInput && searchInput.current && searchInput.current.select()
            )
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
})

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters, confirm, dataIndex) => {
    clearFilters();
    confirm();
    setSearchText("");
    setSearchedColumn(dataIndex);
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <img src={avatar} alt="avatar"></img>,

    },
    {
      title: "full name",
      dataIndex: "fullName",
      key: "fullName",
      ...getColumnSearchProps("fullName"),
    },
    {
      title: "Year",
      dataIndex: "yearOfBirth",
      key: "yearOfBirth",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
    },
    {
      title: "Action",
      key: "action",
      render: (a) => (
        <Space size="middle">
          <button onClick={() => handleSeeDetail(a.id)}>Detail</button>
          <button onClick={() => handleEdit(a)}>Edit</button>
          <button onClick={() => handleDelete(a.id)}>Delete</button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Link to="/admin/add-tutor" className="btn">Add new</Link>
      <Table columns={columns} dataSource={dataTutors} />
    </>
  )
}
