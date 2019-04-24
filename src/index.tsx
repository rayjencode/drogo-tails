import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import Login from './pages/Login';

ReactDOM.render(
    <Login />,
    document.getElementById("main-app")
);