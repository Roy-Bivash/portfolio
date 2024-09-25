import { useState, useEffect } from 'react';

export function usePointerPosition() {
    const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPointerPosition({
                x: event.pageX, // Position relative to the entire page
                y: event.pageY
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return pointerPosition;
};
