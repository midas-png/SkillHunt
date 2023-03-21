import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import { AppRouter } from "pages";

export const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <AppRouter />
        </Router>
    );
};
