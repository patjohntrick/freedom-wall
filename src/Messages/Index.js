import React, { useState, useEffect } from "react";
import axios from "axios";
import Messages from "./Messages.js";
import Post from "./Post.js";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState(false);

  const baseURI = "https://mysecondmern-freedom-wall.herokuapp.com/messages";
  // GET messages
  const fetchMessage = async () => {
    await axios
      .get(`${baseURI}`)
      .then((res) => console.log(setMessages(res.data)))
      .catch((error) => console.log(error));
  };
  // POST message
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postMessage = {
      message: e.target.message.value,
      author: e.target.author.value,
    };
    await axios
      .post(`${baseURI}/new`, postMessage)
      .then((res) => setMessages([...messages, res.data]))
      .catch((err) => console.log(err));
    setForm(!form);
  };
  // Reactions
  // like
  const likeButton = async (userId) => {
    await axios
      .get(`${baseURI}/like/${userId}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    fetchMessage();
  };
  useEffect(() => {
    fetchMessage();
  }, []);
  console.log(messages);
  return (
    <div>
      <Messages
        setMessages={setMessages}
        messages={messages}
        likeButton={likeButton}
      />
      <Post handleSubmit={handleSubmit} form={form} setForm={setForm} />
    </div>
  );
};

export default Index;
