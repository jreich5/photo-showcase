import { describe, it, expect, afterAll } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterAll(() => {
  cleanup();
});

describe("App component", () => {
  it("should render", () => {
    render(<App />);
    const h1Element = screen.getByRole("heading", { name: "Photo Showcase" });
    expect(h1Element).toBeInTheDocument;
  });
});
