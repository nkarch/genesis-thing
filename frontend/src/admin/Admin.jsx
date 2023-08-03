import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

import Discography from "./pages/Discography";
import Release from "./pages/Release";

const Admin = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path='/admin' element={<Discography />} />
                <Route path='/admin/release/:slug' element={<Release />} />
            </Routes>
        </Provider>
    );
};

export default Admin;
