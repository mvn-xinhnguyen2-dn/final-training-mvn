import { Table, Input, Button, Space, Modal, notification, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaRegEye, FaPlusCircle } from "react-icons/fa";

export default function ClassTable() {
  const data = JSON.parse(localStorage.getItem("classes")) || [];
  const items = data.map((item) => ({ key: item.id, ...item }));
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

  const [status, setStatus] = useState("");
  const handleStatus = (x) => {
    setStatus(!x.status);
    let itemStatus = dataClasses.find((item) => item.id === x.id);
    itemStatus.status = !x.status;
    localStorage.setItem("classes", JSON.stringify(dataClasses));
    setDataClasses([...dataClasses]);
    notification.success({
      message: `Successful`,
      description: "Update status of class successfully!!!",
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

  const handleSearch = (selectedKeys, confirm, dataIndex, key) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex || key);
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
      render: (a) => <p>{dataClasses.indexOf(a) + 1}</p>,
    },
    {
      title: "Class",
      key: "classname",
      ...getColumnSearchProps("classname"),
      render: (a) => <p>Class {a.classname}</p>,
      sorter: (a, b) => a.classname - b.classname,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Salary",
      // dataIndex: "salary",
      key: "salary",
      ...getColumnSearchProps("Salary"),
      render: (a) => <p>{a.salary}.000 VND</p>,
      sorter: (a, b) => a.salary - b.salary,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      ...getColumnSearchProps("time"),
      sorter: (a, b) => a.time - b.time,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Number of sessions / week",
      dataIndex: "numberOfSessions",
      key: "numberOfSessions",
      ...getColumnSearchProps("number Of Sessions"),
      sorter: (a, b) => a.numberOfSessions - b.numberOfSessions,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      ...getColumnSearchProps("district"),
      sorter: (a, b) => a.district - b.district,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Status",
      key: "status",
      ...getColumnSearchProps("status"),
      render: (a) => (
        <Space>
          {a.status === true ? (
            <Tag
              color="green"
              className={`tag status ${status}`}
              onClick={() => handleStatus(a)}
            >
              Available
            </Tag>
          ) : (
            <Tag
              color="volcano"
              className={`tag status ${status}`}
              onClick={() => handleStatus(a)}
            >
              Disvailable
            </Tag>
          )}
        </Space>
      ),
      sorter: (a, b) => a.status - b.status,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Action",
      key: "action",
      render: (a) => (
        <Space size="middle">
          <Link
            className="btn none"
            to={`/admin/manage-classes/detail-${a.id}`}
          >
            <FaRegEye />
          </Link>
          <Link className="btn none" to={`/admin/manage-classes/edit-${a.id}`}>
            <FaEdit />
          </Link>
          <button className="btn none" onClick={() => handleDelete(a.id)}>
            <FaTrashAlt />
          </button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className="title-table flex">
        <h3>CLASS LIST</h3>
        <Tag color="blue" className="tag">
          <FaPlusCircle className="mt-5 mr-5" />
          <Link to="/admin/manage-classes/add-class">Add new</Link>
        </Tag>
      </div>
      <Table columns={columns} dataSource={dataClasses} />
    </>
  );
}
