import React from 'react';
import { Switch } from '@headlessui/react';

function MyToggle({ enabled, onToggle }) {
  const handleChange = () => {
    // Call the onToggle function passed from the parent component
    // to update the user's activity status
    onToggle(!enabled);
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? 'bg-customGreen' : 'bg-gray-200'
      } relative inline-flex h-[22px] w-[50px] items-center rounded-full`}
    >
      <span className="sr-only">Toggle activity</span>
      <span
        className={`${
          enabled ? 'translate-x-14' : 'translate-x-1'
        } inline-block h-5 w-5 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
}

export default MyToggle;
