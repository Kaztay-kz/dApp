import React, { useEffect, useState, useContext } from "react";
 
import { ChatAppContect } from "../Context/ChatAppContext";

const ChatApp = () => {

  const { title } = useContext(ChatAppContect);
  return <div>{title}</div>;
};

export default ChatApp;