import router from "./app/router";
import {RouterProvider} from "react-router-dom";
import {AppLayout, ContactUs} from "./common/Layout";

const App = () => (
    <AppLayout>
        <RouterProvider router={router}/>
        <ContactUs/>
    </AppLayout>
)

export default App
