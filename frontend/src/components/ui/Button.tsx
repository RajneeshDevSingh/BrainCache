import  { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void;
    fullWidth?:boolean;
    loading?:boolean;
}


const variantClasses = 
{
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-500",
}

const defaultStyles = "px-2 py-2 rounded-lg item-center";

const Button = (props: ButtonProps) => {
    const {variant, text, startIcon, endIcon, onClick, fullWidth, loading} = props;
    return (
<button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? "w-full flex justify-center content-center gap-1 font-semibold" : " "} ${loading ? "opacity-45":""} disabled:${loading}`}>
    <div className="py-1">{startIcon}</div>
    {text}
    <div className="py-1">{endIcon}</div>
</button>
    );
};

export default Button;
