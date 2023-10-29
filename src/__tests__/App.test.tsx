import { describe, it, expect, afterAll, beforeAll, mock } from "bun:test";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../App";

beforeAll(() => {
  render(<App />);
});

afterAll(() => {
  cleanup();
});

describe("App component", () => {
  it("should render", () => {
    const h1Element = screen.getByRole("heading", { name: "Photo Showcase" });
    expect(h1Element).toBeInTheDocument;
  });
  it("should allow the album id to change", () => {
    const albumIdInput = screen.getByPlaceholderText("Enter album id");
    fireEvent.change(albumIdInput, { target: { value: "1" } });
    const photosHeading = screen.getAllByRole("heading", { level: 2 })[0];
    expect(photosHeading.innerText).toContain("1");
  });
});
