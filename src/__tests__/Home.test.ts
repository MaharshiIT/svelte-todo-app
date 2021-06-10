import { render } from "@testing-library/svelte";
import Home from "../routes/Home.svelte";

test("should render", () => {
  const results = render(Home);
  expect(() => results.getByText("Home")).not.toThrowError();
});