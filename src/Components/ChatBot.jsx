import "./ChatBot.css";
import React, { useState } from "react";
import data from "../Helper/data.json";

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

      data.map((msg, index) => {
        //console.log(message.text, ":", msg.message);
        console.log(data.keys);

        if (msg.message.includes(message.text))
          if (msg.message.includes(message.text)) {
            // console.log(msg.response);

            setResponse([...response, msg.response]);
          }

        // msg.message.includes(message.text)
        //   ? setResponse([...response, msg.response])
        //   : setResponse([...response, "id dont have answer ......"]);
        // else {
        //   setResponse([...response, "id dont have answer ......"]);
        // }
      });

      // if (message.text === "Hello") {
      //   setResponse([...response, "hiii"]);
      // } else {
      //   setResponse([
      //     ...response,
      //     "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      //   ]);
      // }
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
              <div className="chat-feed">
                <div className="my-chat" key={index}>
                  {data}
                </div>
                <div className="their-chat">{response[index]}</div>
              </div>
            ))}
          </div>
          <div className="footer">
            <input
              type="text"
              name="message"
              placeholder="Say something..."
              onChange={(e) => onTextChange(e)}
              value={currentMessage}
              onKeyDown={handleSubmit}
            />
            <div className="attach-cam"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
