import { describe, it, expect, afterAll } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import Photos from "../components/Photos";

afterAll(() => {
  cleanup();
});

describe("Photos component", () => {
  it("should render", () => {
    render(<Photos albumId="1" />);
    const h2Element = screen.getByRole("heading", { name: "Album 1 Photos" });
    expect(h2Element).toBeInTheDocument;
  });
});
