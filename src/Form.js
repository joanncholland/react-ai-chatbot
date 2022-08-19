import React, { useEffect, useState } from "react";
import moment from "moment";

export default function Form({ setReply, setReplies, replies, reply }) {
  const [message, setMessage] = useState("");

  useEffect(() => {

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://api.brainshop.ai/get?bid=168664&key=SAAGy5fUyavE5aqX&uid=joanncholland&msg=${message}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReply(data.cnt);
        setReplies([
          ...replies,
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
            `${message}`,
          ],
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
		console.log(data.cnt)
        console.log(replies);
		setMessage('')
      });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        name="message"
        id="message"
        value={message}
        onChange={handleChange}
      />
      <button data-testid="submit" type="submit" onClick={handleSubmit}>
        Send Message
      </button>
    </form>
  );
}
