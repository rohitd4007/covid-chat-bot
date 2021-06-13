import react, { useEffect, useState } from "react";
import axios from "axios";

const First = ({ Data }) => {
  const [message, setMessage] = useState("");

  useEffect(() =>
    axios
      .post("https://chatbot-flask-api.herokuapp.com/" + message)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err))
  );
  const set = () => {
    setMessage("hi");
  };
  const set1 = () => {
    setMessage("hello");
  };
  const set2 = () => {
    setMessage("name");
  };
  const set3 = () => {
    setMessage("what is covid");
  };
  return (
    <div>
      <button className="setmessage" onClick={set}>
        Set Message
      </button>
      <button className="setmessage" onClick={set1}>
        Set Message
      </button>
      <button className="setmessage" onClick={set2}>
        Set Message
      </button>
      <button className="setmessage" onClick={set3}>
        Set Message
      </button>
    </div>
  );
};

export default First;
