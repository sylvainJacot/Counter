  // Initialize Firebase
  var config = {
      apiKey: "AIzaSyB-CDMpOf3ZovRtNsJy3e0RIDcZqFO8l1c",
      authDomain: "jacot-contact-form.firebaseapp.com",
      databaseURL: "https://jacot-contact-form.firebaseio.com",
      projectId: "jacot-contact-form",
      storageBucket: "jacot-contact-form.appspot.com",
      messagingSenderId: "529430376695"
  };
  firebase.initializeApp(config);

  // Reference messages collection

  var messagesref = firebase.database().ref('messages');


  //listen for form submit
  document.getElementById('contact-form').addEventListener('submit', submitform);

//submit form

  function submitform(e) {
      e.preventDefault();

      //Get Values
      var name = getinputval('name');
      var email = getinputval('email');
      var message = getinputval('message');
      //Save message
      savemessage(name,email,message);

      //Show alert
      document.getElementById('button-sent').style.backgroundColor = '#2AFA89';
      document.getElementById('button-sent').innerHTML = "Sent !";

      //Hide alert after 3secondes
//       setTimeout(function(){
//         document.getElementById('button-sent').style.backgroundColor = '#0000FF';
//         document.getElementById('button-sent').innerHTML = "send message";

//       },5000);
  }

  //fonction to get form values 
  function getinputval(id) {
      return document.getElementById(id).value;

  }

    //Save message to firebase
    function savemessage(name,email,message) {
        var newmessageref = messagesref.push();
        newmessageref.set({
            name: name,
            email: email,
            message: message,
        });
    }