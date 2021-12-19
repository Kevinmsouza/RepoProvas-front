import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/shared/Header";

export default function App() {
    return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
    );
}
