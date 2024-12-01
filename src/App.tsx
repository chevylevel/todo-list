import '@mantine/core/styles.css';
import './App.css';

import { FC, useMemo } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useTodo } from "./hooks/useTodo";
import { Box, MantineProvider, Stack, Title } from '@mantine/core';
import Filter from "./components/Filter/Filter";
import DraggableDrawer from './components/DraggableDrawer/DraggableDrawer';

const App: FC = () => {
    const {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        setFilter
    } = useTodo();

    const drawerContent = useMemo(
        () => (
            <Stack style={{ height: '100%' }}>
                <TodoForm onAddTodo={addTodo} />

                <div style={{ marginTop: 'auto', alignSelf: 'center' }}>
                    <Filter
                        filter={filter}
                        onFilterChange={setFilter}
                    />
                </div>
            </Stack>
        ),
        [
            addTodo,
            filter,
            setFilter
        ],
    );

    return (
        <MantineProvider>
            <Box p={10}>
                <Title
                    c={'dimmed'}
                    p={10}
                    order={2}
                >
                    Things to do:
                </Title>

                {todos.length > 0 && (
                    <TodoList
                        todos={todos}
                        onToggleTodo={toggleTodo}
                        onDeleteTodo={deleteTodo}
                    />
                )}

                <DraggableDrawer>
                    {drawerContent}
                </DraggableDrawer>
            </Box>
         </MantineProvider>
    );
};

export default App;
