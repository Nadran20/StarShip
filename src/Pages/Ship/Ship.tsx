import {Map} from "../../Modules/Map/Map";
import React from "react";
import {Case, Color} from "../../Components/Case/Case";
import {Icon} from "../../Components/Icon/Icon";
import {Planet} from "../../Modules/Planet/Planet";
import {ShipLayout} from "../../Layouts/ShipLayout/ShipLayout";

export const Ship = () => {
    return (
        <>
            {/*}
            <Case color={Color.Purple}>
                <Map/>
            </Case>
            <Case color={Color.Purple}>
                <Icon path={"/Assets/Icons/Actions/extract.png"} size={100}/>
            </Case>
            <Case color={Color.Purple}>
                <Icon path={"/Assets/Icons/Actions/scan.png"} size={100}/>
            </Case>
            */}
            <ShipLayout>{}</ShipLayout>
        </>
    )
}