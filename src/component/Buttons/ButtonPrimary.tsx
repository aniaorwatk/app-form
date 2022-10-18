import React from "react";
import './ButtonPrimary.scss'

export interface IButtonPrimaryType {
    buttonLabel?: string;
    customClassName: string;
    type: 'submit' | 'reset' | 'button';
    isDisabled?:boolean;
    onClick?: () => void;
}


const ButtonPrimary = ({customClassName,
    buttonLabel,
    type,
    isDisabled,onClick}:IButtonPrimaryType)=>{
return(
    <button  type={type}
    className={customClassName}
    disabled={isDisabled}
    onClick={onClick}>
    {buttonLabel}
    
    </button>
)

}

export default ButtonPrimary