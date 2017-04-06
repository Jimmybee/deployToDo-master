// @flow

import { backendless as config } from './Config';
import Backendless from 'backendless';
import store from '../store/store';
import { updateUser } from '../Actions/Actions';

Backendless.initApp(config.APPLICATION_ID, config.JAVASCRIPT_KEY, config.VERSION);
Backendless.enablePromises();

function Contact(args) {
    args = args || {};
    this.name = args.name || "";
    this.age = args.age || "";
    this.phone = args.phone || "";
    this.title = args.title || "";
}

function BackendlessAppventure(args) {
    args = args || {};
}

function TestAppventure(args) {
    args = args || {};
    this.title = args.title || "";
}

// EASY FACEBOOK LOGIN 

export function facebookLogin() {
    function userLoggedIn( user ) {
    console.log( "user has logged in" );
    updateUser(user)
  }
   
  function gotError( err ) {
    console.log( "error message - " + err.message );
    console.log( "error code - " + err.statusCode );
  }

  var callback = new Backendless.Async( userLoggedIn, gotError );

  const permissions = "email";
  const facebookFieldsMapping = {email:"email"};

  Backendless.UserService.loginWithFacebook(facebookFieldsMapping, permissions, callback)
}


// REGISTRATION 
export function asyncRegisterUser(email, password) {
  function userRegistered(user) {
    console.log("user has registered");
    updateUser(user)
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }
 
  var user = new Backendless.User();
  user.email = email;
  user.password = password;
  Backendless.UserService.register(user).then(userRegistered).catch(gotError);
}

export function asyncCreate() {
  function saved(contact) {
    console.log("saved ");
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }

  var contactObject = new Contact( {
    name: "James Bond",
    age: 45,
    phone: "1-800-JAMESBOND",
    title: "chief spying officer"
  });
 
 Backendless.Persistence.of( Contact ).save(contactObject).then(saved).catch(gotError);
}

export function updateBackendlessAppventureDetails(appventure){
  function saved(appventure) {
    console.log("saved ");
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }

  var backendlessAppventure = new TestAppventure(appventure)

 Backendless.Persistence.of( TestAppventure ).save(backendlessAppventure).then(saved).catch(gotError);

}

//LOGIN FUNCTIONS
export function classicLogin(email, password) {
  function userLoggedIn( user ) {
    console.log( "user has logged in" );
    updateUser(user)
    
  }
   
  function gotError( err ) {
    console.log( "error message - " + err.message );
    console.log( "error code - " + err.statusCode );
  }

  var callback = new Backendless.Async( userLoggedIn, gotError );

  Backendless.UserService.login(email, password, true, callback );


}


export function asyncFetch() {

  function fetch(appventures) {
    store.dispatch({type:'RECIEVED_ALL_APPVENTURES', appventures: appventures.data})
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }

  Backendless.Persistence.of( BackendlessAppventure ).find().then(fetch).catch(gotError);
}

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











