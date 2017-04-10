// @flow

import { backendless as config } from './Config';
import Backendless from 'backendless';
import store from '../store/store';
import { updateUser } from '../Actions/Actions';

Backendless.initApp(config.APPLICATION_ID, config.JAVASCRIPT_KEY, config.VERSION);
Backendless.enablePromises();

function BackendlessAppventure(args, original) {
    args = args || {};
    original = original || {};
    this.objectId = args.objectId || original.objectId || null;
    this.title = args.title || original.title || null;
    this.description = args.description || original.description || null;
    this.themeOne = args.themeOne || original.themeOne || null;
    this.themeTwo = args.themeTwo || original.themeTwo || null;
    this.startingLocationName = args.startingLocationName || original.startingLocationName || null;
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
    successUpdate(appventure)
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
export function uploadImage(objectId, files, handleSuccess, handleError) {
    var callback = {};
    var renameCallback = {};

    renameCallback.success = handleSuccess.bind(this);
    renameCallback.fault = handleError.bind(this);


    function saveSuccess(result) {
      console.log(result.fileURL.name)
      const newName = objectId + ".image.jpg"
       // Backendless.Files.renameFile(result.fileURL, "image.png", renameCallback);
    }

    callback.success = handleSuccess;
    callback.fault = handleError;


  
   Backendless.Files.upload(files, objectId, true, callback);
}

export function renameFile() {
  const oldName = "uploadFileFunc/AppIcon60x60_U00402x.png"
  const newName = "objectId2.png"
  Backendless.Files.renameFile( oldName, newName );
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
}










