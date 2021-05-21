import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe( '<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll( () => {
    NumberOfEventsWrapper = shallow( <NumberOfEvents /> );
  } );

  test( 'render textbox', () => {
    expect( NumberOfEventsWrapper.find( '.number-input' ) ).toHaveLength( 1 );
  } );

  // test( 'render number input correctly with initial state', () => {
  //   const number = NumberOfEventsWrapper.state( 'numberEvents' );
  //   expect( NumberOfEventsWrapper.find( '.number-input' ).prop( 'value' ) ).toBe( number );
  // } );

  // test( 'change state when input changes', () => {
  //   NumberOfEventsWrapper.setState( {
  //     numberEvents: 10
  //   } );
  //   const eventObject = { target: { value: 30 } };
  //   NumberOfEventsWrapper.find( '.number-input' ).simulate( 'change', eventObject );
  //   expect( NumberOfEventsWrapper.state( 'numberEvents' ) ).toBe( 30 );
  // } );

  // test( 'change value of textbox when state changed', () => {
  //   NumberOfEventsWrapper.setState( {
  //     numberEvents: 5
  //   } );
  //   const firstNumber = NumberOfEventsWrapper.state( 'numberEvents' );
  //   expect( NumberOfEventsWrapper.find( '.number-input' ).prop( 'value' ) ).toBe( firstNumber );
  //   NumberOfEventsWrapper.setState( {
  //     numberEvents: 15
  //   } );
  //   const secondNumber = NumberOfEventsWrapper.state( 'numberEvents' );
  //   expect( NumberOfEventsWrapper.find( '.number-input' ).prop( 'value' ) ).toBe( secondNumber );
  // } );
} );