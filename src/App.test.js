import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import fetch from "isomorphic-fetch";

afterEach(cleanup)

test("check data from API is being defined", () => {
	return fetch(`http://api.brainshop.ai/get?bid=168664&key=SAAGy5fUyavE5aqX&uid=joanncholland&msg=hello`).then(data => expect(data).toBeDefined())
})

describe("App", () => {
  test("renders App component", () => {
    render(<App />);

	screen.debug()
  });
});

describe("App", () => {
  test("check the title of the page is shown", () => {
    render(<App />);

    expect(screen.getByText("🤖 Chatbot 🤖")).toBeInTheDocument();
  });
});
