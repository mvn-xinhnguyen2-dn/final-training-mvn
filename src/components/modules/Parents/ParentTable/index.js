import { Table, Input, Button, Space, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import {UpdateClass} from "../../Forms";

export default function ParentTable() {
  const data = JSON.parse(localStorage.getItem("classes")) || [];
  const items = data.map((item) =>(
    {key : item.id,
    ...item
    }))
  const [dataClasses, setDataClasses] = useState(items);

  const handleDelete = (id) => {
    Modal.confirm({
      title: `Delete class id : ${id}`,
      onOk: () => {
        const newData = dataClasses.filter((e) => {
          return e.id !== id;
        });
        setDataClasses(newData);
        localStorage.setItem("classes", JSON.stringify(newData));
      },
    });
  };

  const handleEdit = (itemUpdate) => {
    Modal.info({
      title: `Edit class id : ${itemUpdate.id}`,
      content: (
        <>
          <div>heleo</div>
          <UpdateClass itemUpdate={itemUpdate} dataClasses = {dataClasses} />
        </>
      ),
      onOk: () => {
        setDataClasses([...dataClasses])
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
      ...getColumnSearchProps("id"),
    },
    {
      title: "Name of parent",
      dataIndex: "nameParent",
      key: "nameParent",
      ...getColumnSearchProps("nameParent"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Gender",
      dataIndex: "genderOfParent",
      key: "genderOfParent",
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      ...getColumnSearchProps("district"),
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
      <Link to="/admin/add-class" className="btn">Add new</Link>
      <Table columns={columns} dataSource={dataClasses} />
    </>
  )
}
