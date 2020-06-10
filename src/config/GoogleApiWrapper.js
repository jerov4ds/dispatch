import React from 'react'
import { GoogleApiWrapper } from 'google-maps-react';
import SendItem from '../components/Dashboard/SendItem';

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBqmlK2M7zLsDAt0G5r9vZ4cx75P4q78qU'
  })(SendItem);