import { useCallback } from 'react';
import { Todo } from "../../models/Todo";
import { ActionIcon, Checkbox, Group, Text } from '@mantine/core';
import TrashBinIcon from '../../assets/trash-bin.svg';
import classes from './TodoItem.module.css';

interface Props {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete }) => {
    const handleDelete = useCallback(() => { onDelete(todo.id) }, [onDelete, todo.id]);
    const handleChange = useCallback(() => { onToggle(todo.id) }, [onToggle, todo.id]);

    return (
        <Checkbox.Card
            component={'div'}
            className={classes.root}
            radius="md"
            key={todo.id}
            checked={todo.completed}
            onChange={handleChange}
        >
            <Group wrap="nowrap" >
                <Checkbox.Indicator />

                <Text
                    className={classes.description}
                    style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                >
                    {todo.title}
                </Text>

                <ActionIcon
                    data-testid="todo-delete"
                    variant='transparent'
                    aria-label="delete"
                    onClick={handleDelete}
                    ml={'auto'}
                >
                    <TrashBinIcon />
                </ActionIcon>
            </Group>
        </Checkbox.Card>
    );
};

export default TodoItem;
