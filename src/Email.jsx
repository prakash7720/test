/** @format */

import React from 'react';
import { useGlobalState } from './GlobalContext';

const Email = () => {
  const state = useGlobalState();
  console.log('state', state);
  const currentCategory = state.category;
  console.log('currentCategory', currentCategory);

  const emails = [
    {
      category: 'primary',
      content: 'abc',
    },
    {
      category: 'updates',
      content: 'def',
    },
  ];

  const filteredEmails = emails.filter(
    (item) => item.category === currentCategory
  );

  return (
    <div>
      {filteredEmails.map((item, index) => (
        <p key={index}>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
};

export default Email;
