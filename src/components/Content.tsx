import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import EnhancedTable from "./EnhancedTable";
import BreadcrumbsComponent from "./BreadcrumbsComponent";
import { useLocation } from "react-router-dom";

export function Content() {
  const [rows, setRows] = React.useState([
    {
      name: "192.168.234.4",
      type: "Сервер",
      destination: "Москва",
      value: "А1",
      personalNumber: 123,
      Tag: "red",
      dataCreate: "2023-08-08 15:00:01",
      dataUpdate: "2023-09-09 17:00:01",
      dataDiscover: "2023-08-15 10:00:01",
    },
    {
      name: "192.168.234.5",
      type: "Сервер",
      destination: "N.Novgorod",
      value: "B12",
      personalNumber: 124,
      Tag: "blue",
      dataCreate: "2021-08-08 15:00:01",
      dataUpdate: "2021-09-09 17:00:01",
      dataDiscover: "2021-08-15 10:00:01",
    },
    {
      name: "Dev",
      type: "PC",
      destination: "N.Novgorod",
      value: "B13",
      personalNumber: 125,
      Tag: "yellow",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Devil",
      type: "PC",
      destination: "Hell",
      value: "C1",
      personalNumber: 126,
      Tag: "black",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Vinny-pooh",
      type: "dog",
      destination: "N.Novgorod",
      value: "C12",
      personalNumber: 127,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Hacker",
      type: "PC",
      destination: "USA",
      value: "C123",
      personalNumber: 128,
      Tag: "green",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "VK",
      type: "Server",
      destination: "Sankt-Peterburg",
      value: "D123",
      personalNumber: 129,
      Tag: "red",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Facebook",
      type: "Server",
      destination: "USA",
      value: "F123",
      personalNumber: 130,
      Tag: "black",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "18.18.19.0",
      type: "Server",
      destination: "Samara",
      value: "F12",
      personalNumber: 131,
      Tag: "blue",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "18.18.19.19",
      type: "Server",
      destination: "Vladimir",
      value: "Y1",
      personalNumber: 132,
      Tag: "red",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "18.18.19.20",
      type: "Server",
      destination: "Vladimir",
      value: "Y2",
      personalNumber: 133,
      Tag: "red",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "118.18.19.20",
      type: "Server",
      destination: "Vladimir",
      value: "Y3",
      personalNumber: 134,
      Tag: "blue",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "19.18.19.21",
      type: "Server",
      destination: "Kirov",
      value: "Y4",
      personalNumber: 135,
      Tag: "blue",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "B1",
      type: "PC",
      destination: "Kirov",
      value: "L1",
      personalNumber: 136,
      Tag: "blue",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Mouse1",
      type: "PC",
      destination: "Saratov",
      value: "L2",
      personalNumber: 137,
      Tag: "black",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Root",
      type: "PC",
      destination: "Saratov",
      value: "L3",
      personalNumber: 138,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Tools",
      type: "PC",
      destination: "Moscow",
      value: "L4",
      personalNumber: 139,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Hub",
      type: "Server",
      destination: "Moscow",
      value: "L5",
      personalNumber: 140,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Hubs",
      type: "Server",
      destination: "Moscow",
      value: "L6",
      personalNumber: 141,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
    {
      name: "Network",
      type: "Server",
      destination: "London",
      value: "L7",
      personalNumber: 142,
      Tag: "orange",
      dataCreate: "2022-08-08 15:00:01",
      dataUpdate: "2022-09-09 17:00:01",
      dataDiscover: "2022-08-15 10:00:01",
    },
  ]);

  const [filterrows, setFilterrows] = React.useState(rows);

  const location = useLocation();

  const [tag, setTag] = useState<string>("");
  const [type, setType] = useState<string>("");

  useEffect(() => {
    const path = location.search;
    let newFilterData = rows;
    if (location.search.length > 0) {
      const value = path.split("?").toString();
      /*
      let pathValue = location.search.split("?");
      console.log(pathValue[pathValue.length - 1].split("&"));
*/
      if (value.toString().includes("val")) {
        newFilterData = rows.filter((i) =>
          i.name.includes(
            path
              .split("?")
              .filter((i) => i.includes("val"))
              .toString()
              .split("=")[1]
          )
        );
      } else if (value.toString().includes("type")) {
        let type = path
          .split("?")
          .filter((i) => i.includes("type"))
          .toString()
          .split("=")[1];

        if (type.includes("&")) {
          let newType = path
            .split("?")
            .filter((i) => i.includes("type"))
            .toString()
            .split("=")[1]
            .split("&")[0];
          setType(newType);

          newFilterData = rows.filter((i) =>
            i.type.split("&")[0].includes(type)
          );
        } else {
          newFilterData = rows.filter((i) => i.type.includes(type));
          setType(type);
        }
      }
      if (value.toString().includes("tag")) {
        let tags = path
          .split("?")
          .filter((i) => i.includes("tag"))
          .toString()
          .split("=")[Array.length];

        if (tags.includes("&")) {
          let newTags = path
            .split("?")
            .filter((i) => i.includes("tag"))
            .toString()
            .split("=")[2];

          newFilterData = rows.filter((i) => i.Tag.includes(newTags));
          setTag(newTags);
        } else {
          newFilterData = rows.filter((i) => i.Tag.includes(tags));
          setTag(tags);
        }
      }
      setFilterrows(newFilterData);
    }
  }, [setFilterrows, filterrows]);

  return (
    <div>
      <BreadcrumbsComponent />
      <Routes>
        <Route
          path="CMDB/server/*"
          element={
            <EnhancedTable type={type} tag={tag} filterrows={filterrows} />
          }
        />
      </Routes>
    </div>
  );
}
