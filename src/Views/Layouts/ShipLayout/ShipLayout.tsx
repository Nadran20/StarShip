import React from 'react'
import { Planet } from '../../Modules/Planet/Planet'
import { Map } from '../../Modules/Map/Map'
import './ShipLayout.scss'
import { Case, Color } from '../../Components/Case/Case'
import { Icon } from '../../Components/Icon/Icon'
import { User } from '../../Modules/User/User'

interface ShipLayoutProps {
    children: React.ReactNode;
}

export const ShipLayout = ({ children }: ShipLayoutProps) => {
	return (
		<div className={'ship-layout'}>
			<Map/>
			<Planet/>
			<div className={'action-button'}>
				<div>
					<Case color={Color.Purple}>
						<Icon path={'/Assets/Icons/Actions/scan.png'} size={100}/>
					</Case>
				</div>
				<div>
					<Case color={Color.Purple}>
						<Icon path={'/Assets/Icons/Actions/extract.png'} size={100}/>
					</Case>
				</div>
			</div>
			<User/>
		</div>
	)
}