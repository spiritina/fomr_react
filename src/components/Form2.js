import React from  'react';
import Field from './Field';
import Controls from './Controls';
import Selector from './Selector';
import Steps from './Steps';
class Form2 extends React.Component{
    render(){
        let cities = [
            {country: 'Ukraine',
             cities: ['Kyiv','Kharkiv', 'Dnipro', 'Lviv']},
             {country: 'France',
             cities: ['Paris','Lille', 'Lion', 'Marseille']},
             {country: 'Germany',
             cities: ['Berlin','Munich', 'Frankfurt', 'Ganouver']},
             {country: 'Spain',
             cities: ['Madrid','Barselona', 'Sevilla', 'Malaga']},
             {country: 'USA',
             cities: ['Washington','New York', 'Chikago', 'Dalas']}
        ];
        let chosenCountry = cities.find((element) => {
            return element.country === this.props.state.country;
          });
          chosenCountry.cities.unshift('Select city');
        let optionsCountries = cities.map((country, index) => <option value={country.country} key={index}>{country.country}</option>);
        let optionsCities = chosenCountry.cities.map((city, index) => <option value={city} key={index}>{city}</option>);
        return(
            <form className="form card-body">
                <Steps active = {this.props.state.step} />
                <Field labelText='Email'
                       type="email"
                       className={this.props.state.errors.email?"form-control invalid":"form-control"}
                       placeholder="Enter email"
                       name='email'
                       onChange={this.props.onChange}
                       value={this.props.state.email}
                       error={this.props.state.errors.email}
                />
                <Field labelText='Mobile'
                       type="tel"
                       className={this.props.state.errors.mobile?"form-control invalid":"form-control"}
                       placeholder="Enter mobile"
                       name='mobile'
                       onChange={this.props.onChange}
                       value={this.props.state.mobile}
                       error={this.props.state.errors.mobile}
                />
              <Selector labelText='Country'
                        className="form-control"
                        name='country'
                        onChange={this.props.onChange}
                        value={this.props.state.country}
                        options={optionsCountries} 
                />
              
              <Selector labelText='City'
                        name='city'
                        className={this.props.state.errors.city?"form-control invalid":"form-control"}
                        onChange={this.props.onChange}
                        value={this.props.state.city}
                        options={optionsCities} 
                        error={this.props.state.errors.city}
                />
             <Controls onPrev = {this.props.onPrev} onNext={this.props.onNext}/>
            </form>
            )
        }
    
    }
    
    export default Form2;