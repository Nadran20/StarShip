import {Button} from "../../Components/Button/Button";
import {Case, Color} from "../../Components/Case/Case";

export const Home = () => (
    <div>
        <Button text={"Valider"} iconPath={"./Assets/Icons/Utils/valid.png"} color={"#96FFA0"}/>
        <Button text={"Annuler"} iconPath={"./Assets/Icons/Utils/cancel.png"} color={"#FF8E8E"}/>
        <Button text={"Attaquer"} iconPath={"./Assets/Icons/Actions/shoot.png"} color={"#FF8E8E"}/>
        <Button text={"Recharger"} color={"#FFEE51"}/>
        <Button text={"Heal"} color={"#FF6565"}/>
        <Button text={"Info"} color={"#76CEFF"}/>
        <Button text={"Traverser disponible"} color={"#76CEFF"}/>
        <Button text={"Traverser dans 20 min"} color={"#76CEFF"}/>
        <Case color={Color.Gray}>
            <Case color={Color.Blue}>
                <Case color={Color.Lightgray}>
                    <Case color={Color.Purple}>
                        <Case color={Color.Lightpurple}>
                            <Case>
                                Hello
                            </Case>
                        </Case>
                    </Case>
                </Case>
            </Case>
        </Case>
    </div>
)