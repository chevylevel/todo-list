import { createStyles } from "@mantine/styles";

export const useStyles = createStyles((theme) => ({
    drawer: {
        position: 'fixed',
        maxWidth: '500px',
        height: '160px',
        inset: 'auto 0 0 0',
        margin: '0 auto',
        transform: 'translateY(100%)',
        transition: 'transform 0.3s ease',
        touchAction: 'none',
    },
    handle: {
        width: '50px',
        height: '5px',
        backgroundColor: theme.colors.gray[6],
        borderRadius: theme.radius.sm,
        margin: '0 auto 20px',
    },
    visible: {
        transform: 'translateY(0)',
    },
    'drawer-content': {
        boxShadow: theme.shadows.md,
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
        backgroundColor: `var(--mantine-color-gray-0)`
    }
}));
