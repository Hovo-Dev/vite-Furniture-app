import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import {HomePage} from "../../pages";
import {ERoutesPaths} from "./router.constant.ts";
import MainLayout from "../../common/Layout/MainLayout.tsx";

const index = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path={ERoutesPaths.HOME}
                element={
                    <MainLayout>
                        <HomePage/>
                    </MainLayout>
                }
            />
            <Route
                path={ERoutesPaths.About}
                element={<MainLayout>About</MainLayout>}
            />
            <Route
                path={ERoutesPaths.Services}
                element={<MainLayout>Services</MainLayout>}
            />
            <Route
                path={ERoutesPaths.OurTeam}
                element={<MainLayout>Our Team</MainLayout>}
            />
        </>
    )
);

export default index;
