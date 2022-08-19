import React from "react";

export default function Messages({ replies }) {
  return <ul>{replies.map((reply) => (<li><p>{reply[0]}</p>:<p>{reply[1]}</p></li>))}</ul>;
}
