import {ReactNode} from "react";

const CenteredContainer = ({children}: {children: ReactNode}) => {
    return (
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}
        >
            {children}
        </div>
    );
}

export default CenteredContainer;