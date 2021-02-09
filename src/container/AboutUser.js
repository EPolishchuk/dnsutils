import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UtilsContext from './../context/utilsContext';
import platform from 'platform';
import sm from './style.module.scss';

export const AboutUser = () => {
  const utilsContext = useContext(UtilsContext);
  const { user } = utilsContext;

  return (
    <div className={sm.container}>
      <h2>What we know about you</h2>
      <p>
        IP: <Link to={'/whois/' + user.ip}>{user.ip}</Link>
      </p>
      <p>Browser: {`${platform.name} ${platform.version}`}</p>
      <p>Operating system: {`${platform.os}`}</p>
      {platform.manufacturer && (
        <p>Device info: {`${platform.manufacturer} ${platform.product}`}</p>
      )}
      <p>Installed keyboards: {JSON.stringify(window.navigator.languages)}</p>
      <p>
        Display resolution:{' '}
        {window.screen.width * window.devicePixelRatio +
          ' x ' +
          window.screen.height * window.devicePixelRatio}
      </p>
      {window.devicePixelRatio > 1 ? (
        <p>
          Native resolution:{' '}
          {`${window.screen.width} x ${window.screen.height} (renders at @${window.devicePixelRatio}x)`}
        </p>
      ) : (
        ''
      )}
      <p>
        Your locale time:{' '}
        {`${new Date().toLocaleString('en-GB')} (${
          Intl.DateTimeFormat().resolvedOptions().timeZone
        })`}
      </p>
    </div>
  );
};

export default AboutUser;
