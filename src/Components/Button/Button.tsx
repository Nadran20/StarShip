import MIU_BUTTON from '@mui/material/Button'
import './Button.css'

export interface buttonProps {
    text: string;
    iconPath?: string;
    color: string;
    onClick?: () => void;
}

export interface iconProps {
    iconPath: string;
}

const Icon = ({ iconPath }: iconProps) => (
	<img src={iconPath} alt={'icon'} className={'button-icon'}/>
)

export const Button = ({ text, iconPath, color, onClick }: buttonProps) => {
	return (
		<div>
			<MIU_BUTTON
				endIcon={iconPath ? <Icon iconPath={iconPath}/> : null}
				style={{
					backgroundColor: color,
					color: 'black',
					borderRadius: '18px',
					textTransform: 'none',
					height: '50px',
					fontSize: '20px',
				}}
				className={'button'}
				onClick={onClick}
			>
				{text}
			</MIU_BUTTON>
		</div>
	)
}