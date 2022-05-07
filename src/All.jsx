import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import covid from './covid.json'
const Statewise = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false');

        const accData = await res.json();
        console.log(accData);
        setData(accData);
        console.log(data);

    }

    useEffect(() => {
        getData();

    }, []);
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> Crypto Currency</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Current Price</th>
                                <th>Total Value</th>
                                <th>High</th>
                                <th>low</th>
                                <th>Price change @24</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elm, ind) => {
                                    return <tr key={ind}>
                                        <th><img src={elm.image}></img>{elm.id}</th>
                                        <td >{elm.current_price}</td>
                                        <td >{elm.total_volume}</td>
                                        <td style = {{color : "green",fontWeight : "bold"}}>{elm.high_24h}</td>
                                        <td style = {{color : "red",fontWeight : "bold"}}>{elm.low_24h}</td>
                                        <td style = {{color : (elm.price_change_24h > 0?"green": "red"),fontWeight : "bold"}}>{elm.price_change_24h} </td>
                                        <td>{new Date(elm.last_updated).toLocaleString()}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}
export default Statewise;