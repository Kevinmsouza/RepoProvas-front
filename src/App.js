import "./assets/reset.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/shared/Header";
import Send from "./components/pages/Send";
import See from "./components/pages/See";

export default function App() {
    return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/see" exact>
                        <See/>
                    </Route>
                    <Route path="/send" exact>
                        <Send/>
                    </Route>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </BrowserRouter>
    );
}
