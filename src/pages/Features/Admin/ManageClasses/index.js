import React from "react";
import { Layout, Breadcrumb } from "antd";
import ClassTable from "../../../../components/modules/Classes/ClassTable";
import { Switch, Route } from "react-router-dom";
import ClassDetail from "./ClassDetail";
import AddClassPage from "./AddClassPage";
import UpdateClassPage from "./UpdateClassPage";

const { Content } = Layout;

export default function ManageClasses(props) {
  const dataClasses = props.dataClasses
  return (
    <>
      <Switch>
        <Route path="/admin/manage-classes/detail-:id" children={<ClassDetail dataClasses= {dataClasses} />}>
        </Route>
        <Route path="/admin/manage-classes/edit-:id" children={<UpdateClassPage dataClasses= {dataClasses} />}>
        </Route>
        <Route path="/admin/manage-classes/add-class">
          <AddClassPage />
        </Route>
      </Switch>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Manage Classes</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background">
            <ClassTable />
          </div>
        </Content>
      </Layout>
    </>
  );
}
