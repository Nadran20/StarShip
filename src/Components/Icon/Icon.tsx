import "./Icon.scss";

interface IconProps {
    path: string;
    size?: number;
}

export const Icon = ({path, size}: IconProps) => {
    return (
        <img
            src={path}
            className={"icon"}
            alt={"Icon"}
            style={{
                width: `${size}px`,
                height: 'auto'
            }}
        />
    )
}