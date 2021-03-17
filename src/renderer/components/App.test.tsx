import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

test("should render", () => {
	render(<App />);
	expect(screen.getByRole("heading")).toHaveTextContent("Hello");
});
