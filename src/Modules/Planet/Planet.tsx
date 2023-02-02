import {Icon} from "../../Components/Icon/Icon";
import "./Planet.scss";
import {Case, Color} from "../../Components/Case/Case";
import {Title} from "../../Components/Title/Title";

export const Planet = () => {
    return (
        <div className={"planet-info"}>
            <Icon path={"/Assets/Planets/planet1.png"} size={450} className={"planet"}/>
            <Icon path={"/Assets/Ships/scout.png"} size={120} className={"ship"}/>
            <Icon path={"/Assets/Planets/portal.png"} size={200} className={"portal"}/>
            <div className={"planet-resources"}>
                <Case color={Color.Lightpurple}>
                    <Title title={"Communisme"}/>
                    <Case color={Color.Gray}>
                        <div className={"resources"}>
                            <div className={"resource"}>
                                <Icon path={"/Assets/Resources/elec.png"} size={50}/>
                                <b>500</b>
                                <i>-150</i>
                            </div>

                            <div className={"resource"}>
                                <Icon path={"/Assets/Resources/gold.png"} size={50}/>
                                <b>500</b>
                                <i>-150</i>
                            </div>

                            <div className={"resource"}>
                                <Icon path={"/Assets/Resources/ore.png"} size={50}/>
                                <b>500</b>
                                <i>-150</i>
                            </div>
                        </div>
                    </Case>
                </Case>
            </div>
        </div>
    )
}