import React from "react";
import classNames from "classnames";
import {EButtonVariant} from "./types.ts";

interface Props {
    children: React.ReactNode
    variant: EButtonVariant
}

const Button = ({children, variant}: Props) => {
    return (
        <button className={classNames('px-6 py-2 font-medium w-fit', {
        ['bg-blue-950 text-white']: variant === EButtonVariant.PRIMARY,
            ['text-black bg-white']: variant === EButtonVariant.SECONDARY,
    })}>
    {children}
    </button>
);
};

export default Button;