import React from "react";
import "./skeleton.css";

export default function skeletonElement({ type }) {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
}
