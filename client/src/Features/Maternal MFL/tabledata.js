import { Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const columns = [
  { key: "index", title: "ID", dataIndex: "index" },
  {
    key: "hospitalName",
    title: "Hospital name",
    dataIndex: "hospitalName",
    render: (text, record) => (
      <Link to={`/maternal/${record.index}`}>{text}</Link>
    ),
  },
  { key: "location", title: "Location", dataIndex: "location" },
  {
    key: "insurance",
    title: "Insurance",
    dataIndex: "insurance",
    render: (insurance) => (
      <span>
        {insurance.map((item, index) => (
          <React.Fragment key={index}>
            <Tag color={brandColors[item]} key={index}>
              {item}
            </Tag>
          </React.Fragment>
        ))}
      </span>
    ),
  },
  { key: "level", title: "Level", dataIndex: "level" },
  {
    key: "availability",
    title: "Availability",
    dataIndex: "availability",
    render: (availability) => (
      <span>
        {availability.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && ", "}
            {item}
          </React.Fragment>
        ))}
      </span>
    ),
    filters: [
      { text: "Open Weekends", value: "Open Weekends" },
      { text: "Open Public Holidays", value: "Open Public Holidays" },
      { text: "Open 24 Hours", value: "Open 24 Hours" },
    ],
    onFilter: (value, record) => record.availability.includes(value),
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    filters: [
      { text: "Operational", value: "Operational" },
      { text: "Closed", value: "Closed" },
    ],
    onFilter: (value, record) => record.status === value,
    render: (status) => {
      const color = status === "Operational" ? "#429a4c" : "#f5222d";
      return (
        <Tag color={color} key={status}>
          {status}
        </Tag>
      );
    },
  },
];

const brandColors = {
  NHIF: "blue",
  APA: "red",
  BRITAM: "green",
};

export const dataSource = [
  {
    index: 1,
    hospitalName: "Nairobi Maternity Hospital",
    location: "Nairobi City Center",
    insurance: ["NHIF", "APA"],
    level: 3,
    availability: ["Open Weekends", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 2,
    hospitalName: "Kenyatta National Hospital",
    location: "Hurlingham",
    insurance: ["NHIF", "BRITAM"],
    level: 1,
    availability: ["Open Public Holidays", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 3,
    hospitalName: "Mater Hospital",
    location: "South B",
    insurance: ["NHIF", "APA", "BRITAM"],
    level: 2,
    availability: ["Open Public Holidays", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 4,
    hospitalName: "Agakhan Hospital",
    location: "Parklands",
    insurance: ["NHIF", "APA", "BRITAM"],
    level: 4,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 5,
    hospitalName: "Coptic Hospital",
    location: "Ngong Road",
    insurance: ["NHIF"],
    level: 2,
    availability: ["Open Weekends", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 6,
    hospitalName: "Nairobi West Hospital",
    location: "Nairobi West",
    insurance: ["NHIF", "BRITAM"],
    level: 3,
    availability: ["Open Public Holidays", "Open Weekends"],
    status: "Operational",
  },
  {
    index: 7,
    hospitalName: "Pumwani Maternity Hospital",
    location: "Eastleigh",
    insurance: ["NHIF"],
    level: 1,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 8,
    hospitalName: "Gertrude's Children's Hospital",
    location: "Muthaiga",
    insurance: ["NHIF", "APA"],
    level: 3,
    availability: ["Open Weekends", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 9,
    hospitalName: "Karen Hospital",
    location: "Karen",
    insurance: ["NHIF", "APA", "BRITAM"],
    level: 3,
    availability: ["Open Public Holidays", "Open Weekends"],
    status: "Operational",
  },
  {
    index: 10,
    hospitalName: "Mbagathi Hospital",
    location: "Mbagathi",
    insurance: ["NHIF"],
    level: 2,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 11,
    hospitalName: "Nairobi Hospital",
    location: "Upper Hill",
    insurance: ["NHIF", "BRITAM"],
    level: 5,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 12,
    hospitalName: "Ruai Family Hospital",
    location: "Ruai",
    insurance: ["NHIF"],
    level: 2,
    availability: ["Open Weekends", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 13,
    hospitalName: "St. Mary's Hospital",
    location: "Langata",
    insurance: ["NHIF", "APA"],
    level: 3,
    availability: ["Open Public Holidays", "Open Weekends"],
    status: "Operational",
  },
  {
    index: 14,
    hospitalName: "Nairobi East Hospital",
    location: "Eastlands",
    insurance: ["NHIF", "BRITAM"],
    level: 2,
    availability: ["Open Weekends"],
    status: "Operational",
  },
  {
    index: 15,
    hospitalName: "St. Francis Community Hospital",
    location: "Kahawa West",
    insurance: ["NHIF"],
    level: 3,
    availability: ["Open Public Holidays", "Open Weekends"],
    status: "Closed",
  },
  {
    index: 16,
    hospitalName: "Adventist Health Center",
    location: "Buru Buru",
    insurance: ["NHIF", "APA"],
    level: 2,
    availability: ["Open Weekends", "Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 17,
    hospitalName: "Green Pastures Hospital",
    location: "Rongai",
    insurance: ["NHIF"],
    level: 2,
    availability: ["Open Public Holidays", "Open Weekends"],
    status: "Operational",
  },
  {
    index: 18,
    hospitalName: "Embakasi Medical Center",
    location: "Embakasi",
    insurance: ["NHIF", "BRITAM"],
    level: 2,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
  {
    index: 19,
    hospitalName: "Nazareth Hospital",
    location: "Kangemi",
    insurance: ["NHIF"],
    level: 1,
    availability: ["Open Weekends"],
    status: "Operational",
  },
  {
    index: 20,
    hospitalName: "Karura Nursing Home",
    location: "Karura",
    insurance: ["NHIF"],
    level: 1,
    availability: ["Open 24 Hours"],
    status: "Operational",
  },
];
