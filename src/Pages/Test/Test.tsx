import React from 'react'
import {Button} from '../../Components/Button/Button'
import {Case, Color} from '../../Components/Case/Case'
import {Icon} from '../../Components/Icon/Icon'
import {Popup} from '../../Components/Popup/Popup'
import {Map} from '../../Modules/Map/Map'

export const Test = () => {
	const [open, setOpen] = React.useState(false)

	return (
		<div>
			<Button text={'Valider'} iconPath={'./Assets/Icons/Utils/valid.png'} color={'#96FFA0'}/>
			<Button text={'Annuler'} iconPath={'./Assets/Icons/Utils/cancel.png'} color={'#FF8E8E'}/>
			<Button text={'Attaquer'} iconPath={'./Assets/Icons/Actions/shoot.png'} color={'#FF8E8E'}/>
			<Button text={'Recharger'} color={'#FFEE51'}/>
			<Button text={'Heal'} color={'#FF6565'}/>
			<Button text={'Info'} color={'#76CEFF'} onClick={() => {
				setOpen(!open)
			}}/>
			<Button text={'Traverser disponible'} color={'#76CEFF'}/>
			<Button text={'Traverser dans 20 min'} color={'#76CEFF'}/>
			<Case color={Color.Gray} onClick={() => setOpen(!open)}>
				<Icon path={'./Assets/Icons/Actions/create.png'} size={100}/>
			</Case>
			<Case color={Color.Blue}>
				<Icon path={'./Assets/Icons/Actions/extract.png'} size={100}/>
			</Case>
			<Case color={Color.Lightgray}>
				<Icon path={'./Assets/Icons/Actions/portal.png'} size={100}/>
			</Case>
			<Case color={Color.Purple}>
				<Icon path={'./Assets/Icons/Actions/scan.png'} size={100}/>
			</Case>
			<Case color={Color.Lightpurple}>
				<Case>
					<Icon path={'./Assets/Icons/Actions/speculate.png'} size={100}/>
				</Case>
			</Case>

			<Popup open={open} setOpen={setOpen}>
				<Case color={Color.Gray}>
					<Map/>
				</Case>

				<Button text={'Close'} color={'#76CEFF'} onClick={() => setOpen(!open)}/>
			</Popup>
		</div>
	)
}