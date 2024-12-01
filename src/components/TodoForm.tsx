import { Button, CloseButton, Group, Input } from "@mantine/core";
import { memo, useCallback, useState } from "react";

interface Props {
    onAddTodo: (title: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        if (value.trim()) {
            onAddTodo(value);
            setValue('');
        }
    }, [onAddTodo, value]);

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }, []);

    const handleClear = useCallback(() => {
        setValue('');
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <Group>
                <Input
                    data-testid="todo-input"
                    placeholder="Input your todo"
                    value={value}
                    onChange={handleChange}
                    rightSectionPointerEvents="all"
                    flex={1}
                    radius={'md'}
                    size={"lg"}
                    rightSection={
                        <CloseButton
                            aria-label="Clear input"
                            onClick={handleClear}
                            style={{ display: value ? undefined : 'none' }}
                        />
                    }
                />

                <Button
                    type="submit"
                    variant={'default'}
                    radius={'md'}
                    size={"lg"}
                >
                    Add
                </Button>
            </Group>
        </form>
    );
};

export default memo(TodoForm);
