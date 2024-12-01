import { memo } from 'react';
import { Box } from '@mantine/core';
import { DrawerPositoin, useDraggable } from './useDraggable';
import { useStyles } from './useStyles';

function DraggableDrawer({ children }: { children: React.ReactNode }) {
    const {
        position,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    } = useDraggable();

    const { classes, cx } = useStyles();

    return (
        <Box
            className={cx(
                classes.drawer,
                { [classes.visible]: position === DrawerPositoin.OPEN }
            )}
            style={{ transform: `translateY(${position}px)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className={classes.handle} />
            <Box className={classes['drawer-content']}>

                <div style={{ padding: '20px', height: '100%' }}>
                    {children}
                </div>
            </Box>
        </Box>
    );
}

export default memo(DraggableDrawer);
