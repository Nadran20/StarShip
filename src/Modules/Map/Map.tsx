import { Position } from '../../Types/position'
import { Icon } from '../../Components/Icon/Icon'
import './Map.scss'
import { Case, Color } from '../../Components/Case/Case'

export const Map = () => {

	return (
		<Case className={'map'} color={Color.Purple}>
			<Case className={'map-info'}>
				<Element className={'top'} name={'Planet1'} path={'/Assets/Planets/planet1.png'}
					position={{ x: 10, y: 10 }}
					size={100}/>
				<Element className={'left'} name={'Planet1'} path={'/Assets/Planets/planet1.png'}
					position={{ x: 10, y: 10 }}
					size={100}/>
				<Element className={'middle'} name={'Scout1'} path={'/Assets/Ships/scout.png'}
					position={{ x: 10, y: 10 }}
					size={50}/>
				<Element className={'right'} name={'Planet1'} path={'/Assets/Planets/planet1.png'}
					position={{ x: 10, y: 10 }} size={100}/>
				<Element className={'bottom'} name={'Planet1'} path={'/Assets/Planets/planet1.png'}
					position={{ x: 10, y: 10 }} size={100}/>
			</Case>
		</Case>
	)
}

interface ElementProps {
    path: string;
    name: string;
    position: Position;
    size: number;
    className?: string;
}

const Element = ({ path, name, position, size, className }: ElementProps) => {

	return (
		<div className={`element ${className}`}>
			<Icon path={path} size={size}/>
			<b>{name}</b>
			<p className={'position'}>({position.x}, {position.y})</p>
		</div>
	)
}