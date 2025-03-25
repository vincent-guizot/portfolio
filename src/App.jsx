import "./App.css";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import router from "./routers";

function App() {

  return <>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}>

    </RouterProvider>
    {/* </Provider> */}
  </>;
}

export default App;
