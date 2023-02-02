import {Case, Color} from "../../Components/Case/Case";
import {Icon} from "../../Components/Icon/Icon";
import "./User.scss";
import {Button} from "../../Components/Button/Button";
import React from "react";
import {Ship} from "../Ship/Ship";

export const User = () => {
    return (
        <div className={"user"}>
            <div className={"user-info"}>
                <Case color={Color.Blue}>
                    <div className={"user-content"}>
                        <div className={"user-icon"}>
                            <Icon path={"/Assets/Icons/Actions/scan.png"} size={100}/>
                        </div>
                        <div>
                            <Case>
                                <h3 className={"user-name"}>Nadran</h3>
                                <h3 className={"user-top"}>Top : 2</h3>
                            </Case>
                        </div>
                    </div>
                </Case>
            </div>
            <Case color={Color.Blue} className={"user-details"}>
                <Case className={"user-resources"}>
                    <u>Ressources :</u>
                    <div className={"user-resource"}>
                        <div>
                            <Icon path={"/Assets/Resources/elec.png"} size={30}/>
                        </div>
                        <p className={"user-resource-value"}>99999</p>
                    </div>
                    <div className={"user-resource"}>
                        <div>
                            <Icon path={"/Assets/Resources/gold.png"} size={30}/>
                        </div>
                        <p className={"user-resource-value"}>99999</p>
                    </div>
                    <div className={"user-resource"}>
                        <div>
                            <Icon path={"/Assets/Resources/ore.png"} size={30}/>
                        </div>
                        <p className={"user-resource-value"}>99999</p>
                    </div>
                    <br/>
                    <u>Portail :</u>
                    <div className={"user-portal"}>
                        <div className={"user-portal-icon"}>
                            <Icon path={"/Assets/Planets/portal.png"} size={30}/>
                        </div>
                        <p>Communisme (10, 10)</p>
                    </div>
                    <div className={"user-portal-button"}>
                        <Button text={"Traverser disponible"} color={"#76CEFF"}/>
                    </div>
                </Case>
                <p>------------ Vaisseaux ------------</p>
                <div className={"user-ships"}>
                    <Ship
                        ship={
                            {
                                energie: 50,
                                maxEnergie: 50,
                                heal: 9999999,
                                maxHeal: 9999999,
                                name: "Vaisseau 1",
                                type: "scout"
                            }
                        }
                        selected={true}
                    />
                    <Ship
                        ship={
                            {
                                energie: 50,
                                maxEnergie: 50,
                                heal: 9999999,
                                maxHeal: 9999999,
                                name: "Vaisseau 1",
                                type: "scout"
                            }
                        }
                        selected={false}
                    />
                    <Ship
                        ship={
                            {
                                energie: 50,
                                maxEnergie: 50,
                                heal: 9999999,
                                maxHeal: 9999999,
                                name: "Vaisseau 1",
                                type: "scout"
                            }
                        }
                        selected={false}
                    />
                    <Ship
                        ship={
                            {
                                energie: 50,
                                maxEnergie: 50,
                                heal: 9999999,
                                maxHeal: 9999999,
                                name: "Vaisseau 1",
                                type: "scout"
                            }
                        }
                        selected={false}
                    />
                </div>
            </Case>
        </div>
    )
}