import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector, submit } from 'redux-form';
import { connect } from 'react-redux'

import { selectComponent } from '../../../Components/Form/Select'


class Search extends Component {

  render() {
    // console.log(this.props)
    const { searchUpdate } = this.props;
    const { handleSubmit } = this.props;
    // const onChangeSubmit = (onChange, handleSubmit) => e => {
    //     onChange(e);
    //     handleSubmit();
    //   };

    const themes = ["Outdoor", "Family", "Puzzle", "Night", "Museum", "Adventurous"]
    const nullTitle = "Select theme..."
    return (
      <div className="Search">
        <form className="" onSubmit={handleSubmit}>
            <Field name='theme' component={selectComponent(themes, nullTitle)} onChange={this.onChangeSubmit(handleSubmit)}/> 
         </form>
      </div>
    );
  }

  onChangeSubmit(handleSubmit) {
  return () => {
    setTimeout(() => handleSubmit(), 0);
  }
}

}

    // Decorate the form component
Search = reduxForm({
  form: 'search' // a unique name for this form
})(Search);


// Decorate with connect to read form values
const selector = formValueSelector('search') // <-- same as form name
Search = connect(
  state => {
    const themeOne = selector(state, 'themeOne')

    return {
      themeOne,
    }
  }
)(Search)

export default Search;