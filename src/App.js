import "./App.css";
import React, { useState } from "react";
import First from "./Components/First";

function App() {
  const [chat, setChat] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [response, setResponse] = useState([]);

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    };

    if (event.key === "Enter") {
      setChat([...chat, message.text]);
      if (message.text === "Hello") {
        setResponse([...response, "hiii"]);
      } else {
        setResponse([...response, ""]);
      }
      //   console.log(message);
      setCurrentMessage("");
    }
  };

  const onTextChange = (e) => {
    setCurrentMessage(e.target.value);
  };
  const renderChat = () => {
    return chat.map((data, index) => <div key={index}>{data}</div>);
  };
  const getResponse = () => {
    return response.map((data, index) => <div key={index}>{data}</div>);
  };

  return (
    <div>
      <div className="chat">Message : {renderChat()}</div>
      <div className="chat">Responssse : {getResponse()}</div>
      <input
        type="text"
        name="message"
        placeholder="Say something..."
        onChange={(e) => onTextChange(e)}
        value={currentMessage}
        onKeyDown={handleSubmit}
      />
      <button type="">Send</button>
    </div>
  );
}

export default App;
