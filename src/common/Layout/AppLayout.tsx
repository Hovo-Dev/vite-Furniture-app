import React from 'react';

interface Props {
    children: React.ReactNode
}

const AppLayout = ({children}: Props) => {
    return (
        <div className='w-full h-screen'>
            {children}
        </div>
    );
};

export default AppLayout;