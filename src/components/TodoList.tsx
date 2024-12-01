import { memo } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { Todo } from "../models/Todo";
import { Stack } from "@mantine/core";

interface Props {
    todos: Todo[];
    onToggleTodo: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<Props> = ({ todos, onToggleTodo, onDeleteTodo }) => {
    return (todos.length !== 0) ? (
        <Stack pt="md" gap="xs" m={'0 auto'}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggleTodo}
                    onDelete={onDeleteTodo}
                />
            ))}
        </Stack>
    ) : null;
};

export default memo(TodoList);
