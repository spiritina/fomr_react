import React from "react";
import classNames from 'classnames/bind';
import Field from "./Field";
import Selector from "./Selector";
import countries from '../data/countries';
import cities from '../data/cities';

let styles = {
  basic: 'form-control',
  invalid: 'invalid'
}
let cx = classNames.bind(styles);

class FormContacts extends React.Component {
  setClassName = name =>{
    let classNameFirstName = cx({
      basic: true,
      invalid: this.props.errors[name]
    });
    return classNameFirstName 
  }
  render() {
   
    let chosenCountry = countries.filter(element => {
      return +element.id === +this.props.userInfo.countryID;
    })[0];
    
    let optionsCities = Object.keys(cities).map(function(key){let city = cities[key];
     city.id = key; return city}).filter(city => {
      return +city.country === +chosenCountry.id
    } );
    optionsCities.unshift({country: chosenCountry.id,
                name:'Select city',
                id:'0'
                });
    optionsCities = optionsCities.map(city => (
      <option value={city.id} key={city.id}>
        {city.name}
      </option>
    ));
    let optionsCountries = countries.map(country => (
      <option value={country.id} key={country.id}>
        {country.name}
      </option>
    ));
    return (
      <div className='content'>
        <Field
          labelText="Email"
          type="email"
          className={this.setClassName('email')}
          placeholder="Enter email"
          name="email"
          onChange={this.props.onChange}
          value={this.props.userInfo.email}
          error={this.props.errors.email}
        />
        <Field
          labelText="Mobile"
          type="tel"
          className = {this.setClassName('mobile')}
          placeholder="Enter mobile"
          name="mobile"
          onChange={this.props.onChange}
          value={this.props.userInfo.mobile}
          error={this.props.errors.mobile}
        />
        <Selector
          labelText="Country"
          className="form-control"
          name="countryID"
          onChange={this.props.onChange}
          value={this.props.userInfo.countryID}
          options={optionsCountries}
        />

        <Selector
          labelText="City"
          name="cityID"
          value = {this.props.userInfo.cityID}
          className={this.setClassName('cityID')}
          onChange={this.props.onChange}
          options={optionsCities}
          error={this.props.errors.cityID}
        />
       </div>
    );
  }
}

export default FormContacts;
