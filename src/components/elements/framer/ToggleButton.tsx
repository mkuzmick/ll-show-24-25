import { ReactNode, useState } from "react";

interface ToggleButtonProps {
    children: ReactNode;
}

const ToggleButton = ({ children }: ToggleButtonProps) => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
            {isVisible && <div>{children}</div>}
        </div>
    );
};

export default ToggleButton;