import React from "react";
import Header from "./Header.tsx";

interface Props {
    children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
    return (
        <div className='xl:px-28 md:px-16 px-4 py-6 flex flex-col gap-16 min-h-screen'>
            <Header/>
            <main className='py-20'>
                {children}
            </main>
        </div>
    );
};

export default MainLayout;