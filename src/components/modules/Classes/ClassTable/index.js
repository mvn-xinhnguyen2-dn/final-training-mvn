import { Table, Input, Button, Space, Modal } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { UpdateClass } from "../../Forms";
import { FaEdit, FaTrashAlt, FaRegEye } from "react-icons/fa";

export default function ClassTable() {
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
        setDataClasses([...newData]);
        localStorage.setItem("classes", JSON.stringify(dataClasses));
      },
    });
  };

  const handleEdit = (itemUpdate) => {
    Modal.info({
      title: `Edit class id : ${itemUpdate.id}`,
      content: (
        <>
          <div>heleo</div>
          <UpdateClass itemUpdate={itemUpdate} dataClasses={dataClasses} />
        </>
      ),
      onOk: () => {
        setDataClasses([...dataClasses]);
      },
      okText: "Close",
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
        console.log("ok");
      },
      okText: "Close",
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
            style={{ width: 90 }}
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
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Class",
      dataIndex: "classname",
      key: "classname",
      ...getColumnSearchProps("classname"),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      ...getColumnSearchProps("Salary"),
      sorter: (a, b) => a.salary - b.salary,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      ...getColumnSearchProps("time"),
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
    },
    {
      title: "Action",
      key: "action",
      render: (a) => (
        <Space size="middle">
          <Link className="btn none" to={`/admin/manage-classes/detail-${a.id}`}><FaRegEye /></Link>
          <Link className="btn none" to={`/admin/manage-classes/edit-${a.id}`}><FaEdit /></Link>
          <button className="btn none" onClick={() => handleDelete(a.id)}><FaTrashAlt /></button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Link className="btn" to="/admin/manage-classes/add-class">
        Add new
      </Link>
      <Table columns={columns} dataSource={dataClasses.reverse()} />
    </>
  );
}

