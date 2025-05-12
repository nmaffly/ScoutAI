import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import "../Players.css";

const API_URL = "http://localhost:5001";

const Players = () => {
    const [players, setPlayers] = useState([]);
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");
    const [comparisonData, setComparisonData] = useState(null);

    useEffect(() => {
        async function loadPlayers() {
            try {
                let response = await fetch(`${API_URL}/players`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                let players = await response.json();
                if (Array.isArray(players) && players.length > 0) {
                    setPlayers(players);
                }
            } catch (error) {
                console.error("Error fetching players:", error);
            }
        }
        loadPlayers();
    }, []);

    async function comparePlayers() {
        if (!player1 || !player2) {
            alert("Please select two players.");
            return;
        }

        const url = `${API_URL}/compare?player1=${encodeURIComponent(player1)}&player2=${encodeURIComponent(player2)}`;

        try {
            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let data = await response.json();
            if (!data.error) {
                setComparisonData(data);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Error fetching player comparison:", error);
        }
    }

    return (
        <div className="dashboard-container">
            {/* Left Section: Player Statistics */}
            <div className="player-stats-section">
                <div className="player-stats-card">
                    <h3>Player Statistics</h3>
                    <select value={player1} onChange={(e) => setPlayer1(e.target.value)}>
                        <option value="">Select Player</option>
                        {players.map((player, index) => (
                            <option key={index} value={player}>{player}</option>
                        ))}
                    </select>
                    <select value={player2} onChange={(e) => setPlayer2(e.target.value)}>
                        <option value="">Season</option>
                        <option value="2024-2025">2024-2025</option>
                    </select>
                    <select>
                        <option value="">Stat Type</option>
                        <option value="Regular Season">Regular Season</option>
                    </select>
                </div>
                <div className="season-stats-card">
                    <h3>Season Stats</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PPG</td>
                                <td>27.3</td>
                            </tr>
                            <tr>
                                <td>RPG</td>
                                <td>7.5</td>
                            </tr>
                            <tr>
                                <td>APG</td>
                                <td>8.2</td>
                            </tr>
                            <tr>
                                <td>FG%</td>
                                <td>52.3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Right Section: Chatbot */}
            <div className="chatbot-section">
                <Chatbot />
            </div>
        </div>
    );
};

export default Players;
