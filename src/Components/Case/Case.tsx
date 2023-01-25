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
}

export const Case = ({children, color}: CaseProps) => {
    return (
        <div className={`case case--${color ?? 'default'}`}>
            <div className={'case-content'}>{children}</div>
        </div>
    )
}