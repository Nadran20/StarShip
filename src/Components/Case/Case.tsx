import React from 'react'
import './Case.scss'

export enum Color {
    Blue = 'blue',
    Gray = 'gray',
    Lightgray = 'lightgray',
    Lightpurple = 'lightpurple',
    Purple = 'purple',
}

interface CaseProps {
    children: React.ReactNode
    color?: Color
    onClick?: () => void
    className?: string
}

export const Case = ({ children, color, onClick, className }: CaseProps) => {
	return (
		<div className={`case case--${color ?? 'default'} ${className}`} onClick={onClick}>
			{children}
		</div>
	)
}