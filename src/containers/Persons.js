import React, { Component } from 'react';
import { connect } from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.prsn.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prsn: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actionTypes.ADD_PERSON}),
        onRemovePerson: (id) => dispatch({type: actionTypes.REMOVE_PERSON, personId: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);