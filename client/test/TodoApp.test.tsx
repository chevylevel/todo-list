globalThis.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
};

import "@testing-library/jest-dom";

import {
    screen,
    render,
    fireEvent,
} from "./test-utils";

import App from "../src/App";

describe("App Component", () => {
    it("adds a new todo", async () => {
        render(<App />);
        const input = screen.getByTestId("todo-input");
        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.submit(input);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    it("marks a todo as completed", async () => {
        render(<App />);
        const input = screen.getByTestId("todo-input");
        fireEvent.change(input, { target: { value: "Todo to Complete" } });
        fireEvent.submit(input);
        const todo = screen.getByText("Todo to Complete");
        fireEvent.click(todo);

        expect(todo).toHaveStyle("text-decoration: line-through");
    });

      it("filters completed todos", async () => {
        render(<App />);
        const input = screen.getByTestId("todo-input");
        fireEvent.change(input, { target: { value: "Completed Todo" } });
        fireEvent.submit(input);

        const todo = screen.getByText("Completed Todo");
        fireEvent.click(todo);

        const filterControlCompleted = screen.getByTestId("filter-select-completed");
        fireEvent.click(filterControlCompleted);

        expect(screen.getByText("Completed Todo")).toBeInTheDocument();

        const filterControlUncompleted = screen.getByTestId("filter-select-uncompleted");
        fireEvent.click(filterControlUncompleted);

        expect(screen.queryByText("Completed Todo")).not.toBeInTheDocument();
    });

      it("filters uncompleted todos", () => {
        render(<App />);
        const input = screen.getByTestId("todo-input");
        fireEvent.change(input, { target: { value: "Uncompleted Todo" } });
        fireEvent.submit(input);

        const filterControlUncompleted = screen.getByTestId("filter-select-uncompleted");
        fireEvent.click(filterControlUncompleted);

        expect(screen.getByText("Uncompleted Todo")).toBeInTheDocument();
      });

      it("removes todo", () => {
        render(<App />);

        const input = screen.getByTestId("todo-input");
        fireEvent.change(input, { target: { value: "Todo to delete" } });
        fireEvent.submit(input);

        expect(screen.getByText("Todo to delete")).toBeInTheDocument();

        const todoDeleteControl = screen.getByTestId("todo-delete");
        fireEvent.click(todoDeleteControl);

        expect(screen.queryByText("Todo to delete")).not.toBeInTheDocument();
      });
});
