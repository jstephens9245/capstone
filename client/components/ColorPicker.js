import React from 'react';
import {SketchPicker} from 'react-color';

export default function ColorPicker(props) {
  return (
    <div className="c-color-picker">
      <div className="c-color-picker__inner">
        <SketchPicker
          color={props.color}
          onChangeComplete={(color) => { props.updateColor(color.hex); }} />;
      </div>
    </div>
  );
}
