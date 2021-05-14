import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe( '<Event /> component', () => {
  const event = mockData[0];
  let EventWrapper;
  beforeAll( () => {
    EventWrapper = shallow( <Event event={event} /> );
  } );

  test( 'render event element', () => {
    expect( EventWrapper.find( '.event' ) ).toHaveLength( 1 );
  } );

  test( 'render event summary', () => {
    expect( EventWrapper.find( '.event-summary' ) ).toHaveLength( 1 );
  } );

  test( 'render event summary content', () => {
    expect( EventWrapper.find( '.event-summary' ).children() ).toHaveLength( 4 );
  } );
} )
