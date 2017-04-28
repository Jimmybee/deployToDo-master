import React, { Component } from 'react';
import { Field } from 'redux-form';
import './forms.css'

export function selectComponent(options) {
      return ({ input, meta: { touched, error } }) => (
           <div>
              <select {...input} className='form-control'>
                {options.map(val => <option value={val} key={val}>{val}</option>)}
              </select>
              {touched && error && <span>{error}</span>}
            </div>
      )
    }