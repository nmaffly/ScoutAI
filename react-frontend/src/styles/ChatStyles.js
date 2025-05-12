export const styles = {
  chatbotContainer: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    border: '1.5px solid #166088',
    borderRadius: '20px',
    backgroundColor: '#fdfdfd', // Light background
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
  },
  chatHeader: {
    padding: '10px 20px',
    backgroundColor: '#4b0082', // Purple background
    color: 'white',
    borderRadius: '15px 15px 0 0',
    textAlign: 'center',
  },
  chatForm: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  chatInput: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '20px',
    border: '1.5px solid #4b0082', // Purple border
    backgroundColor: 'white',
  },
  chatButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4b0082', // Purple button background
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  chatBody: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '15px',
  },
  message: {
    margin: '10px 0',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#ffe6e6', // Light red for user messages
    alignSelf: 'flex-start', // Align to the left
    textAlign: 'left', // Left-align text
  },
  assistantMessage: {
    backgroundColor: '#f5f5f5', // Light gray for assistant messages
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
};