import { Table, Input, Button, Space, Modal , Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { FaEdit, FaTrashAlt, FaRegEye, FaPlusCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

import UpdateTutorForm from "../../Forms/UpdateTutorForm";

export default function TutorTable() {
  const data = JSON.parse(localStorage.getItem("tutors")) || [];
  const items = data.map((item) =>(
    {key : item.id,
    ...item
    }))
  const [dataTutors, setDataTutors] = useState(items.reverse());

  const handleDelete = (id) => {
    Modal.confirm({
      title: `Delete Tutor id : ${id}`,
      onOk: () => {
        const newData = dataTutors.filter((e) => {
          return e.id !== id;
        });
        setDataTutors(newData)
        localStorage.setItem("tutors", JSON.stringify(newData));
      },
    });
  };

  const handleEdit = (itemUpdate) => {
    Modal.info({
      width: 750,
      title: `Edit Tutor id : ${itemUpdate.id}`,
      content: (
        <>
          <UpdateTutorForm tutorItem={itemUpdate} dataTutors = {dataTutors} />
        </>
      ),
      onOk: () => {
        setDataTutors([...dataTutors])
      },
      okText: "Close"
    });


  };
  const handleSeeDetail = (item) => {
    Modal.success({
      title: `Information of tutor id : ${item.id}`,
      content: (
        <div className="tutor-detail flex">
          <div>
            <img src={item.avatar} alt="avatar" />
          </div>
          <div>
            <div>Name: {item.fullName}</div>
            <div>Gender: {item.gender===0? "Male" : "Female"}</div>
            <div>Experience: {item.experience}</div>
            <div>Year: {item.yearOfBirth}</div>
            <div>Phone: {item.phone}</div>
            <div>Area: {item.area}</div>
          </div>
        </div>
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
      title: "STT",
      key: "id",
      render: (a) => (<p>{dataTutors.indexOf(a)+1}</p>)
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
      ...getColumnSearchProps("yearOfBirth"),
    },
    {
      title: "Gender",
      key: "gender",
      render: (a) => (a.gender === 0? <p>Male</p> : <p>Female</p>)
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      ...getColumnSearchProps("experience"),
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      ...getColumnSearchProps("area"),
    },
    {
      title: "Action",
      key: "action",
      render: (a) => (
        <Space size="middle">
          <button className="btn none" onClick={() => handleSeeDetail(a)}><FaRegEye /></button>
          <button className="btn none" onClick={() => handleEdit(a)}><FaEdit /></button>
          {/* <Link to={`/admin/manage-tutors/edit-${a.id}`} className="btn none"><FaEdit /></Link> */}
          <button className="btn none" onClick={() => handleDelete(a.id)}><FaTrashAlt /></button>
        </Space>
      ),
    },
  ];
  return (
    <>
    <div className="title-table flex">
        <h3>TUTOR LIST</h3>
        <Tag color="blue" className="tag">
          <FaPlusCircle className="mt-5 mr-5" />
          <Link to="/admin/manage-tutors/add-tutor">Add new</Link>
        </Tag>
      </div>
      <Table columns={columns} dataSource={dataTutors} />
    </>
  )
}
