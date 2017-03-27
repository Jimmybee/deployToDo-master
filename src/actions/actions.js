import store from '../store/store';

export function updateUser(user){
    store.dispatch({
 		type: 'UPDATE_USER',
  		user: user 
  });
}

export function editAppventureTitle(title){
    store.dispatch({
 		type: 'SET_TITLE',
  		title: title 
  });
}

export function editAppventureLocationName(locationName){
    store.dispatch({
 		type: 'SET_LOCATION_NAME',
  		locationName: locationName 
  });
}
