import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};
