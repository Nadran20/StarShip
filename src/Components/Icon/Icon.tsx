import './Icon.scss'

interface IconProps {
    path: string;
    size?: number;
    className?: string;
}

export const Icon = ({ path, size, className }: IconProps) => {
	return (
		<img
			src={path}
			className={`icon ${className}`}
			alt={'Icon'}
			style={{
				width: `${size}px`,
				height: 'auto'
			}}
		/>
	)
}