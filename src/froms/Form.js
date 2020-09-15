import React, { Component, useState } from 'react';
import Stepper from 'react-stepper-horizontal';


import SectionOne from "./SectionOne";
import SectionTwo from './SectionTwo';

const Form = () => {

   const [title, setTitle] = useState(
    [
     {title: 'Visitor Details'},
     {title: 'Personal Details'},
     {title: 'Nominee Details'}
    ]
   )
   const [page, setPage] = useState(0)


  const nextPage = () => {
    setPage(page+1)
  }

  const previousPage = () => {
    setPage(page-1)
  }

    // const { onSubmit } = this.props;
    // const { page, steps } = this.state;

  return (
    <div>
      <Stepper  activeStep={ page } />
      {page === 0 && <SectionOne onSubmit={nextPage} />}
      {page === 1 && (
        <SectionTwo
          previousPage={previousPage}
          onSubmit={nextPage}
        />
      )}
     
    </div>
  );
}
export default Form;
