import React from "react";
import { useDispatch } from "react-redux";
import { TABS } from "../redux/actions/type";
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return TABS.map((tab) => (
    <button className={tab === currentTab ? "tab-button selected" : "tab-button"} onClick={() => dispatch(toggleTab(tab))}>
      {tab}
    </button>
  ));
};

export default Tabs;
