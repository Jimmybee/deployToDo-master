import { backendless as config } from '../config';
import Backendless from 'backendless';


Backendless.initApp(config.APPLICATION_ID, config.JAVASCRIPT_KEY, config.VERSION);
Backendless.enablePromises();

function Contact(args) {
    args = args || {};
    this.name = args.name || "";
    this.age = args.age || "";
    this.phone = args.phone || "";
    this.title = args.title || "";
}

export const registerUser = () => new Promise((resolve) => {
  Backendless.initApp(config.APPLICATION_ID, config.JAVASCRIPT_KEY, config.VERSION);
  Backendless.enablePromises();

  var user = new Backendless.User();
  user.email = "michael@backendless.com";
  user.password = "my_super_password";
  Backendless.UserService.register(user);

  function Comment(args) {
     args = args || {};
     this.message = args.message || "";
     this.authorEmail = args.authorEmail || "";
  } 

  var dataStore = Backendless.Persistence.of(Comment);
  var commentObject = new Comment({message: "From Web", authorEmail: user.email})  
  dataStore.save( commentObject );
});


export function asyncRegisterUser() {
  function userRegistered(user) {
    console.log("user has registered");
  }
  
  function gotError(err) {
    console.log("error message - " + err.message);
    console.log("error code - " + err.statusCode);
  }
 
  var user = new Backendless.User();
  user.email = "backendlessdeveloper@backedless.com";
  user.password = "password";
  Backendless.UserService.register(user).then(userRegistered).catch(gotError);
}

export function asyncCreate() {
  function saved(contact) {
    console.log("then ");
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
 
  var savedContact = Backendless.Persistence.of( Contact ).save(contactObject).then(saved).catch(gotError);
}
















