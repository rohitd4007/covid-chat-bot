import React, { useState } from "react";
import axios from "axios";

// import "./style.css";
import Messages from "./Message";

const Chat = (props) => {
  const [responses, setResponses] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageSubmit = (message) => {
    // const data = {
    //   message,
    // };
    const responseData = ["1", "2", "3", "4", "5", "6"];

    setResponses(
      (responses) => console.log(...responses),
      [...responses, responseData]
    );
    setResponses(responses, responseData);

    // axios
    //   .post("YOUR_BACKEND_URL", data)
    //   .then((response) => {
    //     const responseData = {
    //       text:
    //         response.data["message"]["fulfillmentText"] != ""
    //           ? response.data["message"]["fulfillmentText"]
    //           : "Sorry, I can't get it. Can you please repeat once?",
    //       isBot: true,
    //     };

    //     setResponses((responses) => [...responses, responseData]);
    //   })
    //   .catch((error) => {
    //     console.log("Error: ", error);
    //   });
  };

  const handleMessageChange = (event) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    const message = {
      text: currentMessage,
      isBot: false,
    };

    if (event.key == "Enter") {
      //   console.log(message);
      setResponses((responses) => [responses, message.text]);

      handleMessageSubmit(message.text);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chatSection">
      <div className="botContainer">
        <div className="messagesContainer">
          {console.log(responses)}
          <Messages messages={responses} />
        </div>

        {/*The input section is 👇*/}
        <div className="inputSection">
          <input
            type="text"
            value={currentMessage}
            onChange={handleMessageChange}
            onKeyDown={handleSubmit}
            placeholder="Say something..."
            className="messageInputField"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
