import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "../components/Home";

test("uses the 'name' and 'city' props to display the correct text", () => {
  render(<Home name="Liza" city="New York" color="firebrick" />);
  expect(screen.getByText(/Liza is a Web Developer from New York/)).toBeInTheDocument();

  render(<Home name="Duane" city="Queens" color="firebrick" />);
  expect(screen.getByText(/Duane is a Web Developer from Queens/)).toBeInTheDocument();
});

test("uses the 'color' prop to set the inline style color of the h1", () => {
  const { container } = render(
    <Home name="Liza" city="New York" color="firebrick" />
  );
  const h1 = container.querySelector("h1");
  expect(h1).toBeInTheDocument();
  expect(h1.style.color).toEqual("firebrick");
});
