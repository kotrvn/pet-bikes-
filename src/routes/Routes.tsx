import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../views/Home/Home.tsx";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path={'/'}/>
                <Route element={<div>Страница не найдена.</div>} path={'*'}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
