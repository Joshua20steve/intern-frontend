import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function ViewComponent(){
    const [data, setData] = useState([]);
    const itemId = useSelector(state => state.navigation.itemId);
   
    useEffect(() => {
        fetch(`http://localhost:8777/intern/work/desc/${itemId}`)
        .then(response => response.json())
        .then(data => setData(data));
    }, [itemId]);

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-6 mb-3">
                    <div className="card bg-dark text-white h-300">
                        <img src={data.url} alt={data.name} style={{height: 550}} className="card-img" />
                        <div className="card-img-overlay">
                            {/* <h5 className="card-title">{data.name}</h5> */}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="card h-100">
                        <div className="card-body">
                        <p><strong>Item Id:</strong> {data.id}</p>
                            <h3 className="card-title">Item Name: {data.name}</h3>
                            <p className="card-text"><strong>Fact: {data.description}</strong></p>
                            
                           
                            {/* <a href="#" className="btn btn-primary">Add to cart</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewComponent;
