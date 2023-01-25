import React from "react";
import "./Case.scss";

export enum Color {
    Blue = "blue",
    Gray = "gray",
    Lightgray = "lightgray",
    Lightpurple = "lightpurple",
    Purple = "purple",
}

interface CaseProps {
    children: React.ReactNode
    color?: Color
    onClick?: () => void
}

export const Case = ({children, color, onClick}: CaseProps) => {
    return (
        <div className={`case case--${color ?? 'default'}`} onClick={onClick}>
            <div className={'case-content'}>{children}</div>
        </div>
    )
}