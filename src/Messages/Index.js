import React, { useState, useEffect } from "react";
import axios from "axios";
import Messages from "./Messages.js";

const Index = () => {
  const [messages, setMessages] = useState([]);

  const baseURI = "http://localhost:5000/messages";
  // GET messages
  const fetchMessage = async () => {
    await axios
      .get(`${baseURI}`)
      .then((res) => console.log(setMessages(res.data)))
      .catch((error) => console.log(error));
  };
  // POST message

  useEffect(() => {
    fetchMessage();
  }, []);
  console.log(messages);
  return (
    <div>
      <Messages setMessages={setMessages} messages={messages} />
    </div>
  );
};

export default Index;
