import React from "react";
import { Layout, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const { Content } = Layout;

export default function Dashboard({ dataClasses, dataTutors }) {
  let countDistrict = {};
  dataClasses.forEach(function (i) {
    countDistrict[i.district] = (countDistrict[i.district] || 0) + 1;
  });
  let countStatusClass = {};
  dataClasses.forEach(function (i) {
    countStatusClass[i.status] = (countStatusClass[i.status] || 0) + 1;
  });
  let countStatusClassValue = Object.entries(countStatusClass)
    .flat()
    .filter((e) => {
      return typeof e === "number";
    });

  let countGender = {};
  dataTutors.forEach(function (i) {
    countGender[i.gender] = (countGender[i.gender] || 0) + 1;
  });
  let countGenderTutorValue = Object.entries(countGender)
    .flat()
    .filter((e) => {
      return typeof e === "number";
    });

  let countExperienceTutor = {};
  dataTutors.forEach(function (i) {
    countExperienceTutor[i.experience] =
      (countExperienceTutor[i.experience] || 0) + 1;
  });
  let countExperienceTutorValue = Object.entries(countExperienceTutor)
    .flat()
    .filter((e) => {
      return typeof e === "number";
    });
  console.log(Object.entries(countExperienceTutor));
  return (
    <>
      <Layout className="site-layout">
        <Content>
          <Breadcrumb className="px-30 pt-20">
            <Breadcrumb.Item>
              <Link to="/admin">Admin</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background mx-30">
            <div className="dashboard flex">
              <div className="col-5">
                <Bar
                  datasetIdKey="id"
                  data={{
                    labels: Object.keys(countStatusClass),
                    datasets: [
                      {
                        id: 1,
                        label: "Availability of classes",
                        data: countStatusClassValue,
                        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
                        borderColor: ["rgba(255, 159, 64, 1)"],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
              <div className="col-5">
                <Line
                  datasetIdKey="id"
                  data={{
                    labels: Object.keys(countDistrict),
                    datasets: [
                      {
                        id: 1,
                        label: "Number of class by district",
                        data: Object.entries(countDistrict),
                        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                        borderColor: ["rgba(75, 192, 192, 1)"],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
              <div className="col-5">
                <Bar
                  datasetIdKey="id"
                  data={{
                    labels: Object.keys(countGender),
                    datasets: [
                      {
                        id: 1,
                        label: ["Gender of tutor"],
                        data: countGenderTutorValue,
                        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                        borderColor: ["rgba(54, 162, 235, 1)"],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
              <div className="col-5">
                <Pie
                  datasetIdKey="id"
                  data={{
                    labels: Object.keys(countExperienceTutor),
                    datasets: [
                      {
                        label: "# of Votes",
                        data: countExperienceTutorValue,
                        backgroundColor: [
                          "rgba(255, 99, 132, 0.2)",
                          "rgba(255, 206, 86, 0.2)",
                          "rgba(153, 102, 255, 0.2)",
                        ],
                        borderColor: [
                          "rgba(255, 99, 132, 1)",
                          "rgba(255, 206, 86, 1)",
                          "rgba(153, 102, 255, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}
