import React from 'react'
import "./CustomDropDown.css"
import "../../Global.css"
import { IoIosArrowDown } from "react-icons/io";
import OutsideClickHandler from 'react-outside-click-handler';
import PropTypes from 'prop-types';

const CustomDropDown = ({ options, setFunction, showKey }) => {
    
    const [showOptionList, setshowOptionList] = React.useState(false);
    const [sekectedValue, setselectedValue] = React.useState(options && options[0] || "Select")

    const toggleListDisplay = () => {
        if (showOptionList) setshowOptionList(false);
        else setshowOptionList(true);
    }

    const selectOption = (value, obj) => {
        setselectedValue(value);
        setFunction && setFunction(obj);
        toggleListDisplay();
    }

    return (
        <OutsideClickHandler onOutsideClick={(e) => { setshowOptionList(false) }} display='inline' >
            <div className="dropDown">

                <span className="selectedValue" onClick={(e) => { toggleListDisplay() }} > <span className="selectedOption"> {sekectedValue} </span> <span className="dropDownArrow"  > <IoIosArrowDown /> </span> </span>
                <ul className="customDropDown">
                    {
                        showOptionList && options && options.map((option, key) => {
                            return <li className="dropDownOption" onClick={(e) => { selectOption(option[showKey], option) }} key={key} >{option[showKey]}</li>
                        })
                    }
                </ul>
            </div>
        </OutsideClickHandler>
    )
}

export default CustomDropDown

CustomDropDown.prototype = {
    options: PropTypes.object,
    setFunction: PropTypes.func.isRequired,
    showKey: PropTypes.string
}