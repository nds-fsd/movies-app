import React from 'react';

const Calculator = () => (
  <div>
    <Keyboard handleOnKeyPress={key => {
    }} />
  </div>
);

const Keyboard = ({ handleOnKeyPress }) => (
  <>
    <button value="+" onClick={() => handleOnKeyPress('+')} />
    <button value="1" onClick={() => handleOnKeyPress('1')} />
  </>
)
