import { describe, it, expect, afterAll } from "bun:test";
import { render, screen, cleanup } from "@testing-library/react";
import Pagination, { returnNumberOfPages } from "../components/Pagination";

afterAll(() => {
  cleanup();
});

describe("Pagination component", () => {
  it("should render", () => {
    render(<Pagination />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument;
  });
});

describe("returnNumberOfPages", () => {
  it("should be defined", () => {
    expect(returnNumberOfPages).toBeDefined();
  });
});
