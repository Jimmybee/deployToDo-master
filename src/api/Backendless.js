// @flow

import { backendless as config } from './Config';
import Backendless from 'backendless';
import store from '../store/store';
import { updateUser, updateReduxAppventureDetails } from '../Actions/Actions';


Backendless.initApp(config.APPLICATION_ID, config.JAVASCRIPT_KEY, config.VERSION);
Backendless.enablePromises();

function BackendlessAppventure(args, original) {
    args = args || {};
    original = original || {};
    this.title = args.title || original.title || null;
    this.subtitle = args.subtitle || original.subtitle || null;
    this.themeOne = args.themeOne || original.themeOne || null;
    this.themeTwo = args.themeTwo || original.themeTwo || null;
    this.startingLocationName = args.startingLocationName || original.startingLocationName || null;
    this.location = args.location || null;
    this.imageUrl = args.imageUrl || null;
    if (typeof args.steps !== 'undefined') {
        var steps = args.steps.map(step => new BackendlessStep(step))
        this.steps = steps
    }
    this.objectId = args.objectId || original.objectId || null;

}

function BackendlessStep(args) {
    args = args || {};
    var setup = new BackendlessSetup(args.setup)
    this.___class = 'BackendlessStep'
    this.answerHint = args.duration || null;
    this.answerText = args.answerText || null;
    this.checkInProximity = args.checkInProximity || null;
    this.completionText = args.completionText || null;
    this.freeHints = args.freeHints || null;
    this.hintPenalty = args.hintPenalty || null;
    this.initialText = args.initialText || null;
    this.location = args.location || null;
    this.nameOrLocation = args.nameOrLocation || null;
    this.setup = args.setup || null;
    this.stepNumber = args.stepNumber || null;
    this.objectId = args.objectId || null;
}

function BackendlessSetup(args) {
    args = args || {};
    this.___class = 'BackendlessSetup'
    this.checkIn = args.checkIn || null;
    this.compassShown = args.compassShown || null;
    this.distanceShown = args.distanceShown || null;
    this.isLocation = args.isLocation || null;
    this.locationShown = args.locationShown || null;
    this.pictureClue = args.pictureClue || null;
    this.soundClue = args.soundClue || null;
    this.textClue = args.textClue || null;
    this.objectId = args.objectId || null;

}


export function createGeoPoint(googleLocation) {
  console.log("googleLocation", googleLocation)
  const geoPoint = new Backendless.GeoPoint({latitude: googleLocation.lat(), longitude: googleLocation.lng()})
  return geoPoint
}

// REGISTRATION 
export function asyncRegisterUser(email, password, successCallback) {
 
  var user = new Backendless.User();
  user.email = email;
  user.password = password;
  Backendless.UserService.register(user).then(successCallback).catch(gotError);
}

//LOGIN FUNCTIONS
export function classicLogin(email, password, successCallback) {
  
   
  function gotError( err ) {
    console.log( "error message - " + err.message );
    console.log( "error code - " + err.statusCode );
  }

  var callback = new Backendless.Async( successCallback, gotError );

  Backendless.UserService.login(email, password, true, callback );


}

// EASY FACEBOOK LOGIN 

export function facebookLogin(successCallback) {
   
  var callback = new Backendless.Async( successCallback, gotError );

  const permissions = "email";
  const facebookFieldsMapping = {email:"email"};

  Backendless.UserService.loginWithFacebook(facebookFieldsMapping, permissions, callback)
}



export function updateBackendlessAppventureDetails(appventure, update, successUpdate){
  console.log("values", appventure, update)

  function saved(appventure) {
    updateReduxAppventureDetails(appventure)
    console.log("saved ");
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }

  var backendlessAppventure = new BackendlessAppventure(update, appventure)

 Backendless.Persistence.of( BackendlessAppventure ).save(backendlessAppventure).then(saved).catch(gotError);

}


//FETCH TO EXPLORE
export function asyncFetch() {

  function fetch(appventures) {
    store.dispatch({type:'RECIEVED_ALL_APPVENTURES', appventures: appventures.data})
  }

  Backendless.Persistence.of( BackendlessAppventure ).find().then(fetch).catch(gotError);
}

//FETCH OWNED
export function fetchQuery(condition) {

  function fetched(appventures) {
    store.dispatch({type:'RECIEVED_ALL_APPVENTURES', appventures: appventures.data})
  }

  var callback = new Backendless.Async( fetched, gotError );

  var dataQuery = new Backendless.DataQuery();
  dataQuery.condition = condition;
  Backendless.Persistence.of( BackendlessAppventure ).find( dataQuery, callback);
}

// IMAGE METHODS
export function uploadImage(objectId, file, handleSuccess, handleError) {
    var callback = {};


    // renameCallback.success = handleSuccess;
    // renameCallback.fault = handleError;

    // function saveSuccess(result) {
      // console.log(result.fileURL.name)
      // const newName = objectId + ".image.jpg"
      // Backendless.Files.renameFile(result.fileURL, "image.png", renameCallback);
    //   renameFile(renameCallback)
    // }

    callback.success = handleSuccess;
    callback.fault = gotError;

    const fullPath = "myfiles/562820C8-06E1-A04D-FFBA-9BEEDED19100"
  
   Backendless.Files.upload(file, fullPath, true, callback);
}

export function renameFile(handleSuccess) {
     var callback = new Backendless.Async(
     function(result)
      {
        handleSuccess(result)
      },
      function(result)
      {
        gotError(result)
      });

     const oldName = "myfiles/562820C8-06E1-A04D-FFBA-9BEEDED19100/AppLogo.png"
     const newName = "image.png"
     Backendless.Files.renameFile( oldName, newName, callback );
}

export function removeFile() {
  var callback = new Backendless.Async(
  function(result)
  {
    alert( "File successfully deleted" );
  },
  function(result)
  {
    alert( "error - " + result.message );
  });
 
  Backendless.Files.remove( "media/Test.txt", callback );
}


function gotError(err) {
    console.log( "error message - " + err.message );
    console.log( "error code - " + err.statusCode );
    Backendless.UserService.logout()
}












