import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
            <GlobalStyles />
        </BrowserRouter>
    );
};

export default App;
