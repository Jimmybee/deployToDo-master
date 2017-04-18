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


export function setEditStep(step){
  store.dispatch({
    type: 'SET_EDIT_STEP',
    step: step
  });
}

export function addNewStep(stepNumber) {
  var step = {}
  step.stepNumber = stepNumber;

  store.dispatch({
    type: 'ADD_NEW_STEP',
    step: [step]
  });

}


var p1 = new Promise(function(resolve, reject) {
  resolve('Success!');
  // or
  // reject ("Error!");
});