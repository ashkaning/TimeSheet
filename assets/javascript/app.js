var fullName
var rol
var startDate
var monthlyRate
var config = {
    apiKey: "AIzaSyA5kSxmSEXivFwddsX5ynwn6ytx74PsTQ8",
    authDomain: "timesheetform-9ba33.firebaseapp.com",
    databaseURL: "https://timesheetform-9ba33.firebaseio.com",
    projectId: "timesheetform-9ba33",
    storageBucket: "",
    messagingSenderId: "174581867394",
    appId: "1:174581867394:web:ae5365d0fad33be2"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  var database = firebase.database();


$( document ).ready(function() {
    $("#addData").on("click",function(evt){
        evt.preventDefault()
        
        fullName  = $("#fullName").val()
        rol  = $("#rol").val()
        monthlyRate  = $("#date").val()
        monthlyRate  = $("#rate").val()
        //alert("hi")
   
        database.ref().push({
            name: fullName,
            role: rol,
            date: monthlyRate,
            rate: monthlyRate
          });
        
          
   
   
    })

    database.ref().on("child_added", function(snapshot) {
        
        
        
    })
})

 