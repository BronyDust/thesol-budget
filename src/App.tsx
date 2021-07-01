import { FC } from "react";
import { HashRouter, Route } from "react-router-dom";
import Index from "./pages/Index";

/** Router entry point - rrd root and routes */
const App: FC = () => (
  <HashRouter>
    <Route path="/" component={Index} />
  </HashRouter>
);

export default App;
