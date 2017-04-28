import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux'

import { selectComponent } from '../../../Components/Form/Select'


class Search extends Component {

  render() {
    const themes = ["Select theme...", "Outdoor", "Family", "Puzzle", "Night", "Museum", "Adventurous"]

    return (
      <div>
        <form className="">
            <Field name='themeOne' component={selectComponent(themes)}/> 
        </form>
      </div>
    );

  }

}

    // Decorate the form component
Search = reduxForm({
  form: 'search' // a unique name for this form
})(Search);


export default Search;