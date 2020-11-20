import React from "react";

import { Graph } from "react-d3-graph";

const GraphView = () => {
  // dummy data
  const data = {
    nodes: [
      { id: "MLH", color: "red", size: 1000 },
      { id: "Mike Swift", color: "red" },
      { id: "Will Russell", color: "red" },

      { id: "Fellow (Batch 1)", color: "gray", size: 1000 },

      { id: "Pod 1.0.3", color: "lightgreen", size: 600 },
      { id: "Jainam Shah", color: "lightgreen" },
      { id: "Tayeeb Hasan", color: "lightgreen" },
      { id: "Utkarsh Goel", color: "lightgreen" },
      { id: "Sarthak Kundra", color: "lightgreen" },
      { id: "Jayati Shrivastava", color: "lightgreen" },

      { id: "Pod 1.0.2", color: "lightgreen", size: 600 },
      { id: "Aayush Joglekar", color: "lightgreen" },
      { id: "Gagan Deep", color: "lightgreen" },

      { id: "Mentor (Batch 1)", color: "blue", size: 600 },
      { id: "Chris Ewald", color: "blue" },
      { id: "Van", color: "blue" },
      { id: "Princiya", color: "blue" },

      { id: "Pod Leader (Batch 1)", color: "orange", size: 600 },
      { id: "Karan Sheth", color: "orange" },
      { id: "Manya Agrawal", color: "orange" },

      { id: "Maintainer", color: "yellow", size: 600 },
      { id: "SimenB", color: "yellow" },
      { id: "Sebastien Lorber", color: "yellow" },
    ],
    links: [
      // { source: "Fellow (Batch 1)", target: "MLH" },
      { source: "Mike Swift", target: "MLH" },
      { source: "Will Russell", target: "MLH" },

      { source: "Pod 1.0.3", target: "Fellow (Batch 1)" },

      { source: "Jainam Shah", target: "Pod 1.0.3" },
      { source: "Tayeeb Hasan", target: "Pod 1.0.3" },
      { source: "Utkarsh Goel", target: "Pod 1.0.3" },
      { source: "Sarthak Kundra", target: "Pod 1.0.3" },
      { source: "Jayati Shrivastava", target: "Pod 1.0.3" },

      { source: "Pod 1.0.2", target: "Fellow (Batch 1)" },
      { source: "Aayush Joglekar", target: "Pod 1.0.2" },
      { source: "Gagan Deep", target: "Pod 1.0.2" },

      // { source: "Mentor (Batch 1)", target: "Fellow (Batch 1)" },
      { source: "Chris Ewald", target: "Mentor (Batch 1)" },
      { source: "Van", target: "Mentor (Batch 1)" },
      { source: "Princiya", target: "Mentor (Batch 1)" },

      // { source: "Pod Leader (Batch 1)", target: "Fellow (Batch 1)" },
      { source: "Karan Sheth", target: "Pod Leader (Batch 1)" },
      { source: "Manya Agrawal", target: "Pod Leader (Batch 1)" },

      { source: "SimenB", target: "Maintainer" },
      { source: "Sebastien Lorber", target: "Maintainer" },
    ],
  };

  // the graph configuration, you only need to pass down properties
  // that you want to override, otherwise default ones will be used
  const myConfig = {
    // directed: true,
    automaticRearrangeAfterDropNode: true,
    collapsible: true,
    height: 400,
    highlightDegree: 2,
    highlightOpacity: 0.2,
    linkHighlightBehavior: true,
    maxZoom: 12,
    minZoom: 0.05,
    nodeHighlightBehavior: true,
    panAndZoom: false,
    staticGraph: false,
    width: 1500,
    height: 700,
    d3: {
      alphaTarget: 0.05,
      gravity: -250,
      linkLength: 120,
      linkStrength: 2,
    },
    node: {
      color: "#d3d3d3",
      fontColor: "black",
      fontSize: 10,
      fontWeight: "normal",
      highlightColor: "red",
      highlightFontSize: 14,
      highlightFontWeight: "bold",
      highlightStrokeColor: "red",
      highlightStrokeWidth: 1.5,
      labelProperty: (n) => (n.name ? `${n.id} - ${n.name}` : n.id),
      mouseCursor: "crosshair",
      opacity: 0.9,
      renderLabel: true,
      size: 200,
      strokeColor: "none",
      strokeWidth: 1.5,
      svg: "",
      symbolType: "circle",
      viewGenerator: null,
    },
    link: {
      color: "lightgray",
      highlightColor: "red",
      mouseCursor: "pointer",
      opacity: 1,
      semanticStrokeWidth: true,
      strokeWidth: 3,
      type: "STRAIGHT",
    },
  };

  // // graph event callbacks
  // const onClickGraph = function () {
  //   window.alert(`Clicked the graph background`);
  // };

  const onClickNode = function (nodeId) {
    // window.alert(`Clicked node ${nodeId}`);
    window.location.href = "/users/jcs98";
  };

  // const onDoubleClickNode = function (nodeId) {
  //   window.alert(`Double clicked node ${nodeId}`);
  // };

  // const onRightClickNode = function (event, nodeId) {
  //   window.alert(`Right clicked node ${nodeId}`);
  // };

  // const onMouseOverNode = function (nodeId) {
  //   window.alert(`Mouse over node ${nodeId}`);
  // };

  // const onMouseOutNode = function (nodeId) {
  //   window.alert(`Mouse out node ${nodeId}`);
  // };

  // const onClickLink = function (source, target) {
  //   window.alert(`Clicked link between ${source} and ${target}`);
  // };

  // const onRightClickLink = function (event, source, target) {
  //   window.alert(`Right clicked link between ${source} and ${target}`);
  // };

  // const onMouseOverLink = function (source, target) {
  //   window.alert(`Mouse over in link between ${source} and ${target}`);
  // };

  // const onMouseOutLink = function (source, target) {
  //   window.alert(`Mouse out link between ${source} and ${target}`);
  // };

  // const onNodePositionChange = function (nodeId, x, y) {
  //   window.alert(
  //     `Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`
  //   );
  // };

  return (
    <Graph
      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
      data={data}
      config={myConfig}
      onClickNode={onClickNode}
      // onDoubleClickNode={onDoubleClickNode}
      // onRightClickNode={onRightClickNode}
      // onClickGraph={onClickGraph}
      // onClickLink={onClickLink}
      // onRightClickLink={onRightClickLink}
      // onMouseOverNode={onMouseOverNode}
      // onMouseOutNode={onMouseOutNode}
      // onMouseOverLink={onMouseOverLink}
      // onMouseOutLink={onMouseOutLink}
      // onNodePositionChange={onNodePositionChange}
    />
  );
};

export default GraphView;
