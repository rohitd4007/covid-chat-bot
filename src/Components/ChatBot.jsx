import "./ChatBot.css";
import React, { useState } from "react";
const ChatBot = () => {
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
    <div className="center-div">
      <div className="container">
        <div className="chat">
          <div className="header">
            <div className="profile">
              <div className="left">
                <h2>Abc</h2>
                <span>online</span>
              </div>
              <div className="right"></div>
            </div>
          </div>

          <div className="chat-box">
            {chat.map((data, index) => (
              <div className="my-chat" key={index}>
                {data}
              </div>
            ))}

            {response.map((data, index) => (
              <div className="their-chat" key={index}>
                {data}
              </div>
            ))}
            {/* <div className="their-chat">{getResponse()}</div> */}
          </div>
          <div className="footer">
            {/* <div className="inputSection"> */}
            <input
              type="text"
              name="message"
              placeholder="Say something..."
              onChange={(e) => onTextChange(e)}
              value={currentMessage}
              onKeyDown={handleSubmit}
            />
            {/* </div> */}
            {/* <textarea placeholder="Type a message"></textarea> */}
            <div className="attach-cam"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
