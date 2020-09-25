import React from 'react';
import Add  from './add';
import Edit from './edit';
import Delete from './delete';
import SearchAndView from './searchAndView';

const HomePage: React.FunctionComponent =  () => {
  return <div>
    <Add />
    <Edit />
    <Delete />
    <SearchAndView />
  </div>
};

export default HomePage;
