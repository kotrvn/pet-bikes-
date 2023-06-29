import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home/Home.tsx";
import Bikes from "../views/Bikes/Bikes.tsx";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={'/'}/>
                <Route element={<Bikes />} path={'/bikes'}/>
                <Route element={<div>Страница не найдена.</div>} path={'*'}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
