import {
  Table,
  Input,
  Button,
  Space,
  Modal,
  Tag,
  Popconfirm,
  message,
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { FaEdit, FaTrashAlt, FaRegEye, FaPlusCircle } from "react-icons/fa";
import { UpdateTutorForm } from "../../Forms";
import { Link } from "react-router-dom";
import { getDatabase, ref, update } from "firebase/database";

export default function TutorTable({ dataTutors1 }) {
  const [dataTutors, setDataTutors] = useState(dataTutors1);
  const db = getDatabase();

  //Handle Delete confirm
  const confirm = (id) => {
    const newData = dataTutors.filter((e) => {
      return e.id !== id;
    });
    setDataTutors(newData);
    const updates = {};
    updates["/tutors/" + id] = null;
    message.success("Delete successfully");
    return update(ref(db), updates);
  };

  //Handle Edit
  const handleEdit = (itemUpdate) => {
    Modal.info({
      width: 750,
      title: `Edit Tutor id : ${itemUpdate.id}`,
      content: (
        <>
          <UpdateTutorForm tutorItem={itemUpdate} dataTutors={dataTutors} />
        </>
      ),
      okText: "Close",
      maskClosable: true,
    });
  };

  //Handle see detail
  const handleSeeDetail = (item) => {
    Modal.success({
      width: 500,
      title: `Information of tutor:`,
      content: (
        <div className="tutor-detail flex">
          <div>
            <img src={item.avatar} alt="avatar" />
          </div>
          <div>
            <div>
              <b>Name: </b>
              {item.fullName}
            </div>
            <div>
              <b>Gender: </b>
              {item.gender === 0 ? "Male" : "Female"}
            </div>
            <div>
              <b>Experience: </b>
              {item.experience}
            </div>
            <div>
              <b>Year: </b>
              {item.yearOfBirth}
            </div>
            <div>
              <b>Phone: </b>
              {item.phone}
            </div>
            <div>
              <b>Area: </b>
              {item.area}
            </div>
          </div>
        </div>
      ),
      okText: "Close",
      maskClosable: true,
    });
  };

  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginLeft: 0 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters, confirm, dataIndex)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(
          () =>
            searchInput && searchInput.current && searchInput.current.select()
        );
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

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
      fixed: "left",
      width: 70,
      render: (a) => <p>{dataTutors.indexOf(a) + 1}</p>,
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      fixed: "left",
      width: 100,
      render: (avatar) => <img src={avatar} alt="avatar"></img>,
    },
    {
      title: "Full name",
      dataIndex: "fullName",
      key: "fullName",
      width: 180,
      ...getColumnSearchProps("fullName"),
    },
    {
      title: "Year",
      dataIndex: "yearOfBirth",
      key: "yearOfBirth",
      width: 100,
      ...getColumnSearchProps("yearOfBirth"),
    },
    {
      title: "Gender",
      key: "gender",
      width: 80,
      render: (a) => (a.gender === 0 ? <p>Male</p> : <p>Female</p>),
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      width: 200,
      ...getColumnSearchProps("experience"),
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      width: 130,
      ...getColumnSearchProps("area"),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 120,
      render: (a) => (
        <Space size="middle">
          <button className="btn none" onClick={() => handleSeeDetail(a)}>
            <FaRegEye />
          </button>
          <button className="btn none" onClick={() => handleEdit(a)}>
            <FaEdit />
          </button>
          <Popconfirm
            title="Are you sure to delete this tutor?"
            placement="left"
            onConfirm={() => confirm(a.id)}
            okText="Yes"
            cancelText="Cancel"
          >
            <button className="btn none">
              <FaTrashAlt />
            </button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="title-table flex">
        <h3>TUTOR LIST</h3>
        <Tag color="blue" className="tag">
          <Link to="/admin/manage-tutors/add-tutor">
            <FaPlusCircle className="mt-5 mr-5" />
            Add new
          </Link>
        </Tag>
      </div>
      <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={dataTutors}
        pagination={{ pageSize: 4 }}
        scroll={{
          x: 1300,
        }}
      />
    </>
  );
}
