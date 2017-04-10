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

export function updateReduxAppventureDetails(appventure){
    store.dispatch({
 		type: 'UPDATE_APPVENTURE_DETAILS',
 		appventure: appventure
  });
}


var p1 = new Promise(function(resolve, reject) {
  resolve('Success!');
  // or
  // reject ("Error!");
});