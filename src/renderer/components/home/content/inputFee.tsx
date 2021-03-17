import React, {useState} from "react";
import './inputFee.css';

type Props = {
  initialValue?: String,
  min?: String,
  max?: String,
  width?: String,
  active?: String,
  inactive?: String,
  onChange?: Function
}

let slideMove = false;

export function InputFee({min, max, initialValue, width, active, inactive, onChange}: Props) {
  const innerMin = min? Number(min): 0;
  const innerMax = max? Number(max): 0.01;
  const innerInitialValue = initialValue? initialValue: "0";
  const innerWidth = width? String(width): '459px';
  const activeColor = active? String(active): "#fbc457";
  const inactiveColor = inactive? String(inactive): "#029383";
  const innerOnChange = onChange? onChange: function(value: Number) {return value};
  const slideRange = 100000000;
  const [value, setValue] = useState(innerInitialValue);
  const leftLength = (((Number(value) - innerMin) / (innerMax - innerMin)) * 100).toString() + '%';
  const [leftColor, setLeftColor] = useState(inactiveColor);
  const [inputStyle, setInputStyle] = useState({border: "1px solid #C7C9CD", color: "#C7C9CD"});
  const background =  `linear-gradient(to right, ${leftColor} ${leftLength}, #C7C9CD ${leftLength} 100%)`;
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = checkedValue(e.target.value);
    setValue(value);
    innerOnChange(satoshiValue(value));
  }
  function satoshiValue(value: String) {
    let returnValue;
    if(value.search(/\./g) !== -1) returnValue = value.replace( /^([^.]*)(\..*)/, function (a: String, b: String, c: String) {
      const multiple = c.toString()+"00000000";
      if(b !== '0') return b.toString() + multiple.slice(1,9);
      else if(c !== '.') return multiple.slice(1,9);
      else return '0';
    });
    else returnValue = value.toString() + "00000000";
    return Number(returnValue);
  }
  function checkedValue(value: String) {
    let correctValue = value.replace(/[^0-9.,]/g, '');
    correctValue = correctValue.replace(/^0+/g, '');
    correctValue = correctValue.replace(/^[.,]/g, '0.');
    correctValue = correctValue.replace( /^([^.,]*)([.,]{1})(.*)/, function (a: String, b: String, c: String, d: String) {
      const correctNum = d.replace(/[.,]/g, '');
      return b.toString() + '.' + correctNum.toString().slice(0,8);
    });
    if(!correctValue) correctValue = '0';
    return correctValue;
  }
  function handleSlideChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = (Number(e.target.value) / slideRange * (innerMax - innerMin) + innerMin).toFixed(8);
    setValue(value);
    innerOnChange(satoshiValue(value));
  }
  function toColorActive() {
    setLeftColor(activeColor);
  }
  function toColorInactive() {
    setLeftColor(inactiveColor);
  }
  function inputActive() {
    setInputStyle({border: "2px solid " + inactiveColor, color: "black"})
  }
  function inputInactive() {
    if(slideMove) return;
    setInputStyle({border: "1px solid #C7C9CD", color: "#C7C9CD"});
  }
  function mouseActive() {
    slideMove = true;
    inputActive();
  }
  function mouseInactive() {
    slideMove = false;
    inputInactive();
  }
  function convertValue() {
    return (Number(value) - innerMin) / (innerMax - innerMin) * slideRange < slideRange ? (Number(value) - innerMin) / (innerMax - innerMin) * slideRange : slideRange;
  }
  return (
    <div style={{width: innerWidth}}>
      <input type="text" className="fee_input" placeholder="Simple Text" value={value.toString()} onChange={handleChange} style={inputStyle} onFocus={inputActive} onBlur={inputInactive} />
      <br/>
      <div className="fee_input_slider_div" style={{padding: '0 19px'}}>
        <input type="range" className="fee_input_slider" min="0" max={slideRange} step="1" value={convertValue()} onChange ={handleSlideChange} onMouseEnter={toColorActive} onMouseLeave={toColorInactive} onMouseDown={mouseActive} onMouseUp={mouseInactive} />
          <span className="flow_bar" style={{ background: background}}>
            <span className="flow_pointer" style={{borderColor: leftColor, left: "calc(" + leftLength + " - 2px)"}} />
          </span>
      </div>
    </div>
  );
} 