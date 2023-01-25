import Dialog from '@mui/material/Dialog';
import React from "react";

interface PopupProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: React.ReactNode;
}

export const Popup = ({open, setOpen, children}: PopupProps) => {

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>{children}</Dialog>
    )
}