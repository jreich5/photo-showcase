import { describe, it, expect, afterAll } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import Photos from "../components/Photos";

afterAll(() => {
  cleanup();
});

describe("Photos component", () => {
  it("should render", () => {
    render(<Photos />);
    const h2Element = screen.getByRole("heading", { name: "Album" });
    expect(h2Element).toBeInTheDocument;
  });
});
