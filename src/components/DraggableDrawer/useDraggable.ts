import { useCallback, useState } from "react";

export const DrawerPositoin = {
    CLOSE: 140,
    OPEN: 0,
}

export const useDraggable = () => {
    const [position, setPosition] = useState(DrawerPositoin.OPEN);
    const [startY, setStartY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        setStartY(e.touches[0].clientY);
        setIsDragging(true);
    }, []);

    const handleTouchMove =  useCallback((e: React.TouchEvent) => {
        if (isDragging) {
            const delta = e.touches[0].clientY - startY;
            setPosition((prev) => Math.max(0, prev + delta));
            setStartY(e.touches[0].clientY);
        }
    }, [isDragging, startY]);

    const handleTouchEnd =  useCallback(() => {
        setIsDragging(false);

        if (position > DrawerPositoin.CLOSE / 2) {
            setPosition(DrawerPositoin.CLOSE);
        } else {
            setPosition(DrawerPositoin.OPEN);
        }
    }, [position]);

    return {
        position,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    }
}
