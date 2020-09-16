import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';

class Form extends Component {

  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 0,
      steps: [
        {title: 'Family Form'},
        {title: 'Donor Profile'},
        {title: 'Identity Documents of Donor'}
      ]
    };
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, steps } = this.state;

    return (

      <div className="row">
        <div className="col-xl-12">
          {/* Form start */}

          <div className="text-center">
            <div id="svg_wrap" />


      <Card style={{overflow: 'scroll', height:'100vh'}}>
        <Stepper steps={ steps } activeStep={ page } />
        {page === 0 && <SectionOne onSubmit={this.nextPage} />}
        {page === 1 && (
          <SectionTwo
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 2 && (
          <SectionThree
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </Card>
        <br/><br/>   <br/><br/>

      </div>
      </div>
      </div>
    );
  }

}

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
