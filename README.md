# SmartAnalytics

SmartAnalytics is a web application designed to provide advanced analytics and insights for basketball teams and players. It combines a React-based frontend with a Flask backend to deliver interactive visualizations, player comparisons, and team statistics.

## Features

- **Player Comparison**: Compare player statistics side-by-side using bar charts.
- **Team Radar Charts**: Visualize team performance metrics in a radar chart format.
- **Player Efficiency**: Analyze player efficiency using scatter plots.
- **Chatbot Assistant**: Interact with an AI-powered chatbot for basketball-related queries.
- **Conference Averages**: Compare team and player stats against conference averages.

## Tech Stack

- **Frontend**: React, Recharts, Axios
- **Backend**: Flask, SQLite, Pandas
- **AI Integration**: OpenAI GPT-3.5 for chatbot functionality
- **Styling**: CSS, custom styles

## Installation

### Prerequisites

- Node.js (v16 or higher)
- Python (v3.8 or higher)
- SQLite

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/SmartAnalytics.git
   cd SmartAnalytics
   ```

2. Install frontend dependencies:
   ```bash
   cd react-frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd ../flask-backend
   pip install -r requirements.txt
   ```

4. Set up the SQLite database:
   - Place the `ucd-basketball.db` file in the `flask-backend` directory.

5. Configure environment variables:
   - Create a `.env` file in the `flask-backend` directory with the following:
     ```
     DB_USERNAME=your_username
     DB_PASSWORD=your_password
     DB_NAME=your_database_name
     DB_HOST=your_database_host
     ```

## Running the Application

### Backend

1. Navigate to the backend directory:
   ```bash
   cd flask-backend
   ```

2. Start the Flask server:
   ```bash
   python app.py
   ```

   The backend will run on `http://localhost:5001`.

### Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../react-frontend
   ```

2. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`.

## Usage

- Open the application in your browser at `http://localhost:3000`.
- Use the navigation bar to explore features like player comparison, radar charts, and the chatbot assistant.

## Project Structure

```
SmartAnalytics/
├── flask-backend/       # Backend code
│   ├── app.py           # Flask app entry point
│   ├── routes/          # API route definitions
│   ├── ucd-basketball.db # SQLite database
│   └── requirements.txt # Backend dependencies
├── react-frontend/      # Frontend code
│   ├── src/             # React source files
│   ├── public/          # Static assets
│   └── package.json     # Frontend dependencies
└── README.md            # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Recharts](https://recharts.org/) for data visualizations.
- [OpenAI](https://openai.com/) for GPT-3.5 integration.
- [Flask](https://flask.palletsprojects.com/) for the backend framework.
