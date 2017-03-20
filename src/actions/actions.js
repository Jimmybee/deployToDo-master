import store from '../store/store';

export function updateUser(user){
    store.dispatch({
 		type: 'UPDATE_USER',
  		user: user 
  });
}


