import { render } from "@testing-library/react";
import Layout from ".";

describe("Layout", () => {
  it("should render the layout wrapper", () => {
    const { asFragment } = render(<Layout />);
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
