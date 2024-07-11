import { BrowserRouter, Route, Routes } from "react-router-dom";

import BadgerBuds from "../BadgerBuds";
import BadgerBudsLanding from "./pages/BadgerBudsLanding"
import BadgerBudsBasket from "./pages/BadgerBudsBasket.jsx";
import BadgerBudsAdoptable from "./pages/BadgerBudsAdoptable.jsx";
import BadgerBudsNoMatch from "./pages/BadgerBudsNoMatch.jsx";

export default function BadgerBudsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<BadgerBuds />}>
                <Route index element={<BadgerBudsLanding />} />
                <Route path="basket" element={<BadgerBudsBasket />}/>
                <Route path="available-cats" element={<BadgerBudsAdoptable />}/>
                <Route path="*" element={<BadgerBudsNoMatch/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
}