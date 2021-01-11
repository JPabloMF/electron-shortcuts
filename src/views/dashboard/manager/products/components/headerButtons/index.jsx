import React from 'react';
import { Button } from 'semantic-ui-react';

const HeaderButtons = () => {
  return (
    <div>
      <Button.Group
        buttons={[
          { key: 'fast backward', icon: 'fast backward' },
          { key: 'backward', icon: 'backward' },
          { key: 'step backward', icon: 'step backward' },
        ]}
      />{' '}
      <Button.Group
        buttons={[
          { key: 'step forward', icon: 'step forward' },
          { key: 'forward', icon: 'forward' },
          { key: 'fast forward', icon: 'fast forward' },
        ]}
      />{' '}
      <Button.Group
        buttons={[
          { key: 'add', icon: 'add' },
          { key: 'minus', icon: 'minus' },
          { key: 'check', icon: 'check' },
          { key: 'close', icon: 'close' },
        ]}
      />{' '}
      <Button.Group buttons={[{ key: 'search', icon: 'search' }]} />
    </div>
  );
};

export default HeaderButtons;