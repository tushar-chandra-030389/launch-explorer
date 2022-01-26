import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from ".";

describe("TextInput", () => {
  it("should render the input field", () => {
    const { asFragment } = render(
      <TextInput label="Input label" name="testInput" />
    );
    const label = screen.getByLabelText("Input label");
    expect(label).not.toBeNull();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should call the handler on input change", () => {
    const mockCallback = jest.fn();
    render(
      <TextInput label="Input label" name="testInput" onChange={mockCallback} />
    );
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new input value" } });
    expect(mockCallback).toHaveBeenNthCalledWith(
      1,
      "testInput",
      "new input value"
    );
  });
});
