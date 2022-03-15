import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DotMap } from "@ant-design/maps";

const WorldMap = () => {
  const [data, setData] = useState({ type: "FeatureCollection", features: [] });

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/antfincdn/xZqmXatMnc/quanguojiaotongshijianxiangyingzhishu.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const config = {
    map: {
      type: "mapbox",
      style: "light",
      center: [120.19382669582967, 30.258134],
      zoom: 1,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: "geojson",
      },
    },
    color: "transparent",
    size: 0,
    animate: true,
    state: {
      active: false,
    },
    autoFit: true,
    label: {
      field: "cityName",
      style: {
        fill: "#fff",
        fontSize: 12,
        textAnchor: "top",
        textOffset: [0, 20],
      },
    },
    zoom: {
      position: "topleft",
    },
    layerMenu: {
      position: "topright",
    },
    tooltip: {
      items: [
        {
          field: "cityName",
          alias: "名称",
        },
      ],
    },
  };

  return <DotMap {...config} />;
};
export default WorldMap;
