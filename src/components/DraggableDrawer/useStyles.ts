import { createStyles } from "@mantine/styles";

export const useStyles = createStyles((theme) => ({
    drawer: {
        position: 'fixed',
        maxWidth: '500px',
        height: '120px',
        inset: 'auto 0 0 0',
        margin: '0 auto',
        transform: 'translateY(100%)',
        backgroundColor: theme.white,
        boxShadow: theme.shadows.md,
        borderTopLeftRadius: theme.radius.md,
        borderTopRightRadius: theme.radius.md,
        transition: 'transform 0.3s ease',
        touchAction: 'none',

    },
    handle: {
        width: '50px',
        height: '5px',
        backgroundColor: theme.colors.gray[6],
        borderRadius: theme.radius.sm,
        margin: '10px auto',
        position: 'absolute',
        top: '-30px',
        left: '50%',
        transform: 'translateX(-50%)',
    },
    visible: {
        transform: 'translateY(0)',
    },
}));
