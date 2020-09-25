import React from 'react';
import Add  from './add';
import Edit from './edit';
import Delete from './delete';

const HomePage: React.FunctionComponent =  () => {
  return <div>
    <Add />
    <Edit />
    <Delete />
  </div>
};

export default HomePage;
