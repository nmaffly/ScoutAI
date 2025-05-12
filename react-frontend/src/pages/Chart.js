import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const API_URL = "http://localhost:5001";

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/player-efficiency`)
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Player Efficiency Chart</h2>
            <ResponsiveContainer width="100%" height={500}>
                <ScatterChart>
                    <CartesianGrid />
                    <XAxis type="number" dataKey="mpg" name="Minutes Per Game" stroke="#4b0082" />
                    <YAxis type="number" dataKey="ppg" name="Points Per Game" stroke="#4b0082" />
                    <Tooltip />
                    <Scatter name="Players" data={data} fill="#4b0082" />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
