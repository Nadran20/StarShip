import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Toaster = () => {

    return <ToastContainer
        position={"top-center"}
        draggable={false}
        theme={"dark"}
    />
}

export interface notifyProps {
    message: string,
    type: string
}