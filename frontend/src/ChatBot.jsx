import React, { useState, useRef, useEffect } from 'react';
const ChatBot = () => {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userInput }
    ]);

    const prompt = userInput;
    setUserInput('');

    try {
      
      const res = await fetch("https://28d7-34-83-201-106.ngrok-free.app/generate", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      const { response } = await res.json(); 

    
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: response }
      ]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [
        ...prev,
        { sender: 'assistant', text: 'Sorry, something went wrong.' }
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={styles.layout}>
      <div style={styles.label}>AI Tax Bot</div>
      <div style={styles.chatContainer}>
        {messages.length === 0 ? (
          <div style={styles.centerPrompt}>What can I help ?</div>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              style={{
                ...styles.chatBubble,
                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                backgroundColor: msg.sender === 'user' ? '#434665' : '#3E4A89',
                color: msg.sender === 'user' ? '#fff' : '#ffffff',
              }}
            >
              {msg.text}
            </div>
          ))
        )}
        <div ref={chatEndRef} />
      </div>
      <input
        type="text"
        placeholder="Ask Anything"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  layout: {
    background: 'linear-gradient(to bottom, #1f2c3e, #0d152b)',
    color: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    boxSizing: 'border-box',
  },
  label: {
    fontSize: '20px',
    color: '#ccc',
    marginBottom: '10px',
  },
  chatContainer: {
    flex: 1,
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: '#152232',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  centerPrompt: {
    position: 'absolute',
    top: '50%',
    left: '75%',
    transform: 'translate(-50%, -50%)',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#fff',
    pointerEvents: 'none',
  },
  chatBubble: {
    padding: '20px 15px',
    borderRadius: '20px',
    maxWidth: '70%',
    fontSize: '16px',
  },
  input: {
    padding: '14px',
    borderRadius: '40px',
    border: '2px solid white',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '16px',
    outline: 'none',
  },
};

export default ChatBot;
