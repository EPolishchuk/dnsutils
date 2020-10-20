import React, { useState, useContext } from 'react';
import UtilsContext from './../context/utilsContext';
import sm from './style.module.scss';

const Control = () => {
  const utilsContext = useContext(UtilsContext);
  const [text, setText] = useState('');
  const [action, setAction] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    utilsContext.util(text, action.toUpperCase());
  };

  const onChange = (e) => setText(e.target.value);
  const onClick = (e) => setAction(e.target.value);

  return (
    <form onSubmit={onSubmit} className={sm.form}>
      <input
        type='text'
        placeholder='Enter IP or domain...'
        value={text}
        onChange={onChange}
      ></input>
      <div className={sm.control}>
        <input
          type='submit'
          name='utils'
          value='ping'
          onClick={onClick}
        ></input>
        <input
          type='submit'
          name='utils'
          value='traceroute'
          onClick={onClick}
        ></input>
        <input
          type='submit'
          name='utils'
          value='whois'
          onClick={onClick}
        ></input>
        <input type='submit' name='utils' value='dig' onClick={onClick}></input>
        <input
          type='submit'
          name='utils'
          value='nmap'
          onClick={onClick}
        ></input>
      </div>
    </form>
  );
};

export default Control;
