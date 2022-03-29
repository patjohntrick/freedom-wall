import React, { useState } from "react";
// import Messages from "./Messages/Messages";
// import Post from "./Messages/Post.js";
import Search from "./Search/Search.js";
import PostMessage from "./Messages/Index.js";
import "./Style/Neon.css";

function App() {
  return (
    <div className="App relative">
      <h1 className="neonText text-center text-4xl font-medium my-5 capitalize">
        freedom wall
      </h1>
      <Search />
      {/*Message*/}
      {/* <PostMessage /> */}
    </div>
  );
}

export default App;
