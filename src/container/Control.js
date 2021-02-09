import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import UtilsContext from './../context/utilsContext';
import { getHostFromURL } from '../utils/format';
import sm from './style.module.scss';

const Control = ({ match }) => {
  const history = useHistory();
  const utilsContext = useContext(UtilsContext);
  const [text, setText] = useState('');
  const [action, setAction] = useState('');

  const { host, type } = match.params;

  useEffect(() => {
    if (host && type) {
      setText(host);
      utilsContext.util(host, type.toUpperCase());
    }
  }, [host, type]);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/${action}/${getHostFromURL(text)}`);
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
