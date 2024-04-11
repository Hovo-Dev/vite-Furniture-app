import {useCallback, useMemo, useRef, useState} from "react";
import classNames from 'classnames'
import {NavLink} from "react-router-dom";
import LogoIcon from "assets/vectors/Logo.svg?react";
import useWindowSize from "../../hooks/useWindowSize.ts";
import useOutsideClick from "../../hooks/useOutsideClick.ts";
import useLockBodyScroll from "../../hooks/useBodyLock.ts";
import {menuLinkConstant} from "../../app/router/router.constant.ts";
import {EButtonVariant} from "../Atom/Button/types.ts";
import {Button} from "../Atom";

const Header = () => {
    const [open, setOpen] = useState(false)
    const windowSize = useWindowSize()
    const sidebarRef = useRef(null)

    const navList = useCallback((isDesktop: boolean) => menuLinkConstant.map(menuItem => (
        <NavLink
            key={menuItem.id} to={menuItem.link}
            className={({isActive}) => isActive ? `${!isDesktop ? 'bg-gray-400' : ''} font-semibold py-3` : `${!isDesktop ? 'hover:bg-gray100' : ''} transition-all py-3`}
        >
            {menuItem.label}
        </NavLink>
    )), [])

    const isDesktop = useMemo(() => windowSize.width > 1280, [windowSize.width])

    useOutsideClick(sidebarRef, () => setOpen(false))
    useLockBodyScroll(open)

    return (
        <header className='flex gap-2 xl:gap-0 items-center justify-between'>
            <LogoIcon/>
            {isDesktop ? (
                <div className='flex md:gap-16 gap-6 items-center'>
                    {navList(isDesktop)}
                    <Button variant={EButtonVariant.PRIMARY}>
                        Contact Us
                    </Button>
                </div>
            ) : (
                <>
                    <button className='flex flex-col gap-2' onClick={() => setOpen(true)}>
                        <div className='w-10 h-1 bg-black rounded-2xl'/>
                        <div className='w-10 h-1 bg-black rounded-2xl'/>
                        <div className='w-10 h-1 bg-black rounded-2xl'/>
                    </button>
                    <aside
                        ref={sidebarRef}
                        className={classNames('transition-all fixed bottom-0 top-0 duration-1000 bg-gray200 h-screen w-[200px] flex flex-col', {
                            ['-right-0']: open,
                            ['-right-[100%]']: !open
                        })}
                    >
                        <div className='flex flex-col text-center'>
                            {navList(isDesktop)}
                        </div>
                    </aside>
                </>
            )}
        </header>
    );
};

export default Header;