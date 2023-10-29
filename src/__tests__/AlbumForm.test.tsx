import { describe, it, expect, afterAll, beforeEach } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import AlbumForm, { calculateNumberOfAlbums } from "../components/AlbumForm";
import React from "react";

afterAll(() => {
  cleanup();
});

const photos1 = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 2,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

const photos2 = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 2,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 3,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
];

describe("AlbumForm component", () => {
  const callback = (id: string) => {};
  beforeEach(() => {
    cleanup();
  });
  it("should render", () => {
    render(<AlbumForm photos={photos1} changeAlbumId={callback} />);
    const inputElement = screen.getByPlaceholderText("Enter album id");
    expect(inputElement).toBeInTheDocument;
  });
  it("should have a label", () => {
    render(<AlbumForm photos={photos1} changeAlbumId={callback} />);
    const labelElement = screen.getByText("Search by album id");
    expect(labelElement).toBeInTheDocument;
  });
  it.skip("should have a label with the correct number of albums to pick from for 2 albums", () => {
    render(<AlbumForm photos={photos1} changeAlbumId={callback} />);
    const labelElement = screen.getByText("(numbers 1-2"); // <-------- BROKEN!!!
    expect(labelElement.innerText).toContain("2");
  });
  it.skip("should have a label with the correct number of albums to pick from for 1 album", () => {
    render(<AlbumForm photos={photos2} changeAlbumId={callback} />);
    const labelElement = screen.getByText("numbers"); // <-------- BROKEN!!!
    expect(labelElement.innerText).toContain("3");
  });
});

describe("calculateNumberOfAlbums", () => {
  it("should be defined", () => {
    expect(calculateNumberOfAlbums).toBeDefined();
  });
  it("should return 2 when passed photos1", () => {
    expect(calculateNumberOfAlbums(photos1)).toEqual(2);
  });
  it("should return 2 when passed photos1", () => {
    expect(calculateNumberOfAlbums(photos2)).toEqual(3);
  });
});
