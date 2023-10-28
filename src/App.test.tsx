import { describe, it, expect, afterAll, beforeAll, mock } from "bun:test";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

// const testPhotos = [
//   {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952",
//   },
//   {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796",
//   },
// ];

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
  // it("should render photos after successfull API call", async () => {
  //   const photos = [
  //     {
  //       albumId: 1,
  //       id: 1,
  //       title: "accusamus beatae ad facilis cum similique qui sunt",
  //       url: "https://via.placeholder.com/600/92c952",
  //       thumbnailUrl: "https://via.placeholder.com/150/92c952",
  //     },
  //     {
  //       albumId: 1,
  //       id: 2,
  //       title: "reprehenderit est deserunt velit ipsam",
  //       url: "https://via.placeholder.com/600/771796",
  //       thumbnailUrl: "https://via.placeholder.com/150/771796",
  //     },
  //   ];

  // });
});
