import { useCallback, useMemo, useState } from "react";
import { Todo } from "../models/Todo";

export type FilterType = "all" | "completed" | "uncompleted";

export const useTodo = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [filter, setFilter] = useState<FilterType>("all");

    const addTodo = useCallback((title: string) => {
        setTodos((prev) => [...prev, { id: Date.now().toString(), title, completed: false }]);
    }, []);

    const toggleTodo = useCallback((id: string) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    }, []);

    const deleteTodo =  useCallback((id: string) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, []);

    const filteredTodos = useMemo(() => todos.filter((todo) => {
        if (filter === "completed") return todo.completed;
        if (filter === "uncompleted") return !todo.completed;
        return true;
    }), [filter, todos]);

    return {
        todos: filteredTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        setFilter
    };
};
