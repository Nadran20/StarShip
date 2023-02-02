import {ship} from "../../Types/ship"
import "./Ship.scss"
import {Icon} from "../../Components/Icon/Icon";
import {Button} from "../../Components/Button/Button";
import {Case, Color} from "../../Components/Case/Case";

interface ShipProps {
    ship: ship
    selected: boolean
}

export const Ship = ({ship, selected}: ShipProps) => {

    return (
        selected
            ?
            <Case color={Color.Gray} className={"user-ship selected"}>
                <div className={"ship-selected"}>
                    <div>
                        <Icon path={`/Assets/Ships/${ship.type}.png`} size={60}></Icon>
                    </div>
                    <div className={"ship-name"}>
                        <b>{ship.name}</b>
                    </div>
                </div>
                <Case className={"ship-detail"}>
                    <div className={"ship-energie"}>
                        <p>{ship.energie}/{ship.maxEnergie}</p>
                        <Button text={"Recharger"} color={"#FFEE51"}/>
                    </div>
                    <div className={"ship-heal"}>
                        <p>{ship.heal}/{ship.maxHeal}</p>
                        <Button text={"Heal"} color={"#FF6565"}/>
                    </div>
                </Case>
            </Case>
            :
            <Case className={"user-ship"}>
                <div className={"ship-icon"}>
                    <Icon path={`/Assets/Ships/${ship.type}.png`} size={60}></Icon>
                </div>
                <div className={"ship-details"}>
                    <div className={"ship-name"}>
                        <b>{ship.name}</b>
                    </div>
                    <div className={"ship-actions"}>
                        <div className={"ship-action"}>
                            <Button text={"Info"} color={"#76CEFF"}/>
                        </div>
                        <div className={"ship-action"}>
                            <Button text={"Recharger"} color={"#FFEE51"}/>
                        </div>
                    </div>
                </div>
            </Case>
    )
}