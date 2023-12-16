import React, { createContext } from "react";

import { HookContextChild } from "./HookContextChild";

type MyAppContextType = {
  title: string;
  lang: string;
};

export const MyAppContext = createContext<MyAppContextType>({
  title: "",
  lang: "",
});

const config = {
  title: "MyApp",
  lang: "ja",
};

export default function HookContext() {
  return (
    <MyAppContext.Provider value={config}>
      <div id="c_main">
        <HookContextChild />
      </div>
    </MyAppContext.Provider>
  );
}
