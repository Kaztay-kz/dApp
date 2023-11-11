import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

import { CheckIfWalletConnected, 
        connectWallet, 
        connectigWithContract
} from "../Utils/apiFeature";

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({children})=> {
    const title = "Hey Welcome to blockchain Chat App";

    return(
        <ChatAppContect.Provider value={{ title }} >
            {chidren}
        </ChatAppContect.Provider>
    )
}
