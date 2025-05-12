import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput("");

        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

        try {
            const response = await axios.post("http://127.0.0.1:5001/chat", {
                message: userMessage,
            });

            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: response.data.response },
            ]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Error: Could not get response from server",
                },
            ]);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Input Bar */}
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    padding: "10px",
                    borderBottom: "1px solid #ccc",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    style={{
                        flex: 1,
                        padding: "10px",
                        fontSize: "16px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        marginLeft: "10px",
                        padding: "10px 20px",
                        fontSize: "16px",
                        backgroundColor: "#4b0082",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </form>

            {/* Chat Display */}
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "10px",
                    backgroundColor: "#ffffff",
                }}
            >
                {messages.map((message, index) => (
                    <div
                        key={index}
                        style={{
                            margin: "10px 0",
                            ...(message.role === "user"
                                ? {
                                      alignSelf: "flex-start",
                                      backgroundColor: "#e3f2fd",
                                      padding: "10px",
                                      borderRadius: "10px",
                                      maxWidth: "60%",
                                  }
                                : {
                                      alignSelf: "flex-start",
                                      color: "#333",
                                  }),
                        }}
                    >
                        {message.role === "user" && (
                            <strong style={{ display: "block", marginBottom: "5px" }}>
                                You:
                            </strong>
                        )}
                        {message.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chatbot;
