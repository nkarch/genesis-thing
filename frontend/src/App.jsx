import { useLocation } from "react-router-dom";

import Public from "./public/Public";
import Admin from "./admin/Admin";

const App = () => {
    if (useLocation().pathname === "/admin") {
        return <Admin />;
    }

    return <Public />;
};

export default App;
