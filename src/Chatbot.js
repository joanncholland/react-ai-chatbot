import React, { useEffect, useState } from "react";
import Form from "./Form";
import Messages from "./Messages";
import moment from "moment";

export default function Chatbot() {
  const [greeting, setGreeting] = useState(null);
  const [reply, setReply] = useState(null);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetch(
      `http://api.brainshop.ai/get?bid=168664&key=SAAGy5fUyavE5aqX&uid=joanncholland&msg=hello`
    )
      .then((res) => res.json())
      .then((data) => {
        setGreeting(data.cnt);
        setReplies([
            [
              `${moment().hour()}:${
                moment().minute() < 10
                  ? `0${moment().minute()}`
                  : moment().minute()
              }:${
                moment().second() < 10
                  ? `0${moment().second()}`
                  : moment().second()
              }`,
              `${data.cnt}`,
            ],
          ]);
      });
  }, []);

  return (
    <div className="chatbot-container">
      <h1>🤖 Chatbot 🤖</h1>
      <Messages replies={replies} />
      <Form
        setReply={setReply}
        reply={reply}
        setReplies={setReplies}
        replies={replies}
      />
    </div>
  );
}
