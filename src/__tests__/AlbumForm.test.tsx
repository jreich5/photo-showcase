import { describe, it, expect, afterAll } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import AlbumForm from "../components/AlbumForm.tsx";

afterAll(() => {
  cleanup();
});

describe("AlbumForm component", () => {
  it("should render", () => {
    render(<AlbumForm changeAlbumId={undefined} />);
    const inputElement = screen.getByPlaceholderText("Enter album id");
    expect(inputElement).toBeInTheDocument;
  });
});
