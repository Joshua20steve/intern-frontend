import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'semantic-ui-react'
import './Demo.css'
export default function Posts() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8777/intern/work/all`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        <div style={{ padding: 20 }}>
            <div className = "card col-md-6 offset-md-3">
                              <div className = "card-body">
                        <div className = "row"></div>
                            <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                
                {searchInput.length >= 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header><h1 className='text-center'>{item.id}.{item.name}</h1></Card.Header>
                                    <Card.Description>
                                       
                                        <img src={item.url}style={ {width:713,height:400}}/>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        // return (
                            // <Card>
                            //     <Card.Content>
                            //         <Card.Header>{item.id}.{item.desc}</Card.Header>
                            //         <Card.Description>
                                        
                            //             <img src={item.url} style={ {width:600,height:350}}/>
                            //         </Card.Description>
                            //     </Card.Content>
                            // </Card>
                        // )
                    })
                )}
            </Card.Group>
            </form>
        </div>
        </div>
        </div>
        
    )
}
