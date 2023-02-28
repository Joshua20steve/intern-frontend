import React, { useEffect, useState } from "react";
import { viewItem } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

import './Item.css'

function ItemComponent(props) {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const itemId = useSelector(state => state.navigation.itemId);
  const view = (item) => {
    dispatch(viewItem(item.id));
  };
  

  useEffect(() => {
    fetch("http://localhost:8777/intern/work/all")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);


  return (
    <div className="item-component" >
      {data.map(item => (
        <div className="item-component-item" key={item.id}>
          <div onClick={() => view(item)} style={{ cursor: "pointer" }} >{item.id}.{item.name}
          {/* <h2>{item.id}.{item.name}</h2> */}
          <img src={item.url} style={{ width: 405, height: 340 }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemComponent;