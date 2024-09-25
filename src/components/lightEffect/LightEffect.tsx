import { usePointerPosition } from "@/hooks/usePointerPosition";

export function LightEffect(){
    const pointerPosition = usePointerPosition();
    return (
        <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" 
            style={{background: `radial-gradient(600px at ${pointerPosition.x}px ${pointerPosition.y}px, rgba(30, 215, 160, 0.08), transparent 80%)`}}>
        </div>
    )
}