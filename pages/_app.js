import "../styles/globals.css";

import { ChatAppProvider } from "../Context/ChatAppContext";
import { NavBar } from "../Components/index";

const MyApp = ({ Component, pageProps }) => (
    <div>
        <ChatAppContect>
            <NavBar />
            <Component {...pageProps} />
        </ChatAppContect>
    </div>
);

export default MyApp;