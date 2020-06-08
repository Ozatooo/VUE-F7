import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';
 
// Import F7 Styles
import 'framework7/css/framework7.bundle.css';
 
// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
// Import Cordova APIs
import cordovaApp from './cordova-app.js';
// Import Routes
import routes from './routes.js';
import axios from './axios.min.js'

 
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.myapp', // App bundle ID
  name: 'test', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
 
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
 
 
  // Input settings
  input: {
    scrollIntoViewOnFocus: Framework7.device.cordova && !Framework7.device.electron,
    scrollIntoViewCentered: Framework7.device.cordova && !Framework7.device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    overlay: Framework7.device.cordova && Framework7.device.ios || 'auto',
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
        
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
        init();

    },
  },
});
 
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
    console.log("LOGOWANIE!")
    
  var Login = $$('#my-login-screen [name="Login"]').val();
  var Password = $$('#my-login-screen [name="Password"]').val();
  var ID = $$('#my-login-screen [name="ID"]').val();
 
  // Close login screen
  app.loginScreen.close('#my-login-screen');
 
  // Alert username and password
  app.dialog.alert('Login: ' + Login + '<br>Password: ' + Password+'<br>Twoje ID: ');   
});
 





//sss
var db2;
var shortName = 'Bazaa';
var version = '2.0';
var displayName = 'Bazaa';
var maxSize = 65535;
    
    
    
    
    function errorHandler(transaction, error) {
   alert('Błąd: ' + error.message + ' kod błędu: ' + error.code);
}
 
// Funkcja wywoływana po udanej transakcji z bazą
function successCallBack() {
   alert("Debuger: sukces!");
}
 
function nullHandler(){};
 
//Funkcja wywoływana po starcie apki
function init(){
    if (!window.openDatabase) {
       alert('Twoje urządzenie nie obsługuje SQLite!');
       return;
    }
    db2 = openDatabase(shortName, version, displayName,maxSize); //tworzy połączenie z bazą
    db2.transaction(function(tx){ //wykonuje SQL
    //tx.executeSql( 'DROP TABLE Konta1',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS Konta1(ID TEXT NOT NULL, Login TEXT NOT NULL,Password TEXT NOT NULL)',[],
          db2.nullHandler,
          db2.errorHandler
        );
      }.bind(db2),
      db2.errorHandler,
      db2.successCallBack
    );
    
}
   
function ListDBValues() {
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 $$('#Konta1').html(''); //wyczyszczenie wcześniejszej zawartości
 db2.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM Konta1 where ID=1;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#Konta').append('<br>' + row.ID + ' ' +row.Login + ' ' + row.Password+ ' ');
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
    
 return
}
 
    
    
    
$$(document).on("page:init",'.page[data-name="Konta"]',function(e){
    console.log("LOGIN");
    $$('#pokaz').on('click', () => {      
        console.log("pokazane")
      ListDBValues();                    
 
 
 
    });
   
    $$('#zapisz').on('click', () => {   
        DeleteFromDB();
        console.log("zapisane")
        AddValueToDB();
        
 
 
    });
});
   


function DeleteFromDB(IDID,Login,Password){
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 db2.transaction(function(transaction) {
   transaction.executeSql('DELETE FROM Konta1;', [],
    function(transaction, result) {
       console.log("deleted");
       ListDBValues();
    },errorHandler);
 },errorHandler,nullHandler);
 return
}
 
 
 
function AddValueToDB(ID,Login,Password) {
 if (!window.openDatabase) {
   alert('To urządzenie nie obsługuje SQLite!');
   return;
 }
 
 db2.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO Konta1(ID, Login, Password) VALUES (?,?,?)',[$$('#ID').val(),$$('#Login').val(),$$('#Password').val(),],
     nullHandler,errorHandler);
               app.dialog.alert('Login: ' + $$('#Login').val() + '<br>Password: ' + $$('#Password').val() + '<br>Twoje ID: ' +$$('#ID').val());
       app.loginScreen.close('#my-login-screen');

                                

   });
    
    
    


 
 return false;
}

$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    

    $$('#dodawanie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1+B1;
        console.log(wynik);
        document.getElementById("wynik").innerHTML="Wynik dodawania="+wynik;
    });
    $$('#odejmowanie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1-B1;
    document.getElementById("wynik").innerHTML="Wynik odejmowania="+wynik;

        console.log(wynik);
    });
    $$('#dzielenie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1/B1;
    document.getElementById("wynik").innerHTML="Wynik dzielenia="+wynik;

        console.log(wynik);
    });
    $$('#mnozenie').on('click', () => { 
    
    var a = document.getElementById("a").value; 
    var A1 = parseInt(a); 
    var b = document.getElementById("b").value; 
    var B1 = parseInt(b); 
    var wynik = A1*B1;
    document.getElementById("wynik").innerHTML="Wynik mnozenia="+wynik;

        console.log(wynik);
    });
    
    
})



$$(document).on('page:init', '.page[data-name="tabelka"]', function (e) {
    let a = 0;
    let b = 0;

                $$('#dod').on('click', () => { 
                     
                      
                      let numerek = a+1;
                      a++;
                      b++;
                      let kol = a*13;
                      let kol1 = "x13="
                      let kol2 = a
                      var table = document.getElementById("myTable");
                      var row = table.insertRow(b);
                      var cell1 = row.insertCell(0);
                      var cell2 = row.insertCell(1);
                      var cell3 = row.insertCell(2);
                      cell1.innerHTML = "13";
                      cell2.innerHTML = numerek;
                      cell3.innerHTML = kol2+kol1+kol;
                    
              
                });
    
    
})




$$(document).on('page:init', '.page[data-name="regex"]', function (e) {


                $$('input[type="text"]').on('keyup change', function (e){ 
 var start = document.getElementById("pesel")
    start.addEventListener('keyup', function()
    {
        sprawdzpesel(start.value)
    })
 
    function sprawdzpesel(pesel)
    {
        var wzor = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
        var ostatnia = 0;
 
        for (var i = 0; i < 10; i++)
        {
            ostatnia += wzor[i] * pesel.charAt(i);
        }
 
        ostatnia %= 10;
 
        var sprawdzostatnia = pesel.charAt(10);
 
        var punktyX = document.getElementById("punkty")
        var punkty = 0;
        if (pesel.match(/^[0-9]{4}[0-3]{1}[0-9]{1}/))
        {
            punkty += 1
        }  
        if (pesel.match(/[0-9]{4}/))
        {
            punkty += 0
        }
        if (ostatnia == sprawdzostatnia) {
            punkty +=1
        }        
        if (pesel.length == 11)
        {
            punkty += 1
        }
        if (pesel.match(/[a-zA-Z]/))
        {
            punkty -= 10
        }
        if(punkty==1)
            {
              document.getElementById("a").style.backgroundColor="red";
            }
        
        if(punkty==2)
            {
              document.getElementById("a").style.backgroundColor="orange";
            }
        
        if(punkty==3)
            {
              document.getElementById("a").style.backgroundColor="green";
            }
        

        
    };
                
                });
                
    
})







$$(document).on('page:init', '.page[data-name="index"]', function(e) { //zdarzenie otwarcia strony z wirtualną listą

    axios
        .get('http://localhost/cgi-bin/20.cgi') //api url
        .then(response => {
            console.log(response.data);
            var virtualList = app.virtualList.create({
                // List Element
                el: '.virtual-list',
                // Pass array with items
                items: response.data, //JSON z api
                // Custom search function for searchbar
                searchAll: function(query, items) {
                    var found = [];
                    for (var i = 0; i < items.length; i++) {
                        if (items[i].title.toLowerCase().indexOf(query.toLowerCase()) >= 0 || query.trim() === '') found.push(i);
                    }
                    return found; //return array with mathced indexes
                },
                // List item Template7 template
                itemTemplate: '<li>' +
                    '<a href="#" class="item-link item-content">' +
                    '<div class="item-inner">' +
                    '<div class="item-title-row">' +
                    '<div class="item-title">"imie i nazwisko :"{{imie_nazwisko}}</div>' +
                    '</div>' +
                    '<div class="item-subtitle">"Wiek :"{{wiek}}</div>' +
                    '</div>' +
                    '</a>' +
                    '</li>',
                // Item height
                height: app.theme === 'ios' ? 63 : (app.theme === 'md' ? 73 : 46),
            });
        });
});


    




























































//cars
/*var db;
var shortName = 'Baza';
var version = '1.0';
var displayName = 'Baza';
var maxSize = 65535;
var db1;
var shortName1 = 'Baza1';
var version1 = '1.1';
var displayName1 = 'Baza1';
var maxSize1 = 65535;
 
// wywoływana kiedy pojawi się błąd w połączeniu do bazy:
function errorHandler(transaction, error) {
   //alert('Błąd: ' + error.message + ' kod błędu: ' + error.code);
}
 
// Funkcja wywoływana po udanej transakcji z bazą
function successCallBack() {
   alert("Debuger: sukces!");
}
 
function nullHandler(){};
 
//Funkcja wywoływana po starcie apki
function init(){
    if (!window.openDatabase) {
       alert('Twoje urządzenie nie obsługuje SQLite!');
       return;
    }
    db = openDatabase(shortName, version, displayName,maxSize); //tworzy połączenie z bazą
    db.transaction(function(tx){ //wykonuje SQL
     //tx.executeSql( 'DROP TABLE User11',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS User10(ID INTEGER PRIMARY KEY, Marka TEXT NOT NULL,Rok TEXT NOT NULL,Silnik TEXT NOT NULL,Pojemnosc TEXT NOT NULL)',[],
          db.nullHandler,
          db.errorHandler
        );
      }.bind(db),
      db.errorHandler,
      db.successCallBack
    );
    
    db1 = openDatabase(shortName1, version1, displayName1,maxSize1);
    console.log("utworzono"); 
    db.transaction(function(tx){ //wykonuje SQL
    // tx.executeSql( 'DROP TABLE User',nullHandler,nullHandler);
    tx.executeSql( 'CREATE TABLE IF NOT EXISTS User11(UserId INTEGER PRIMARY KEY,Adres TEXT NOT NULL,Pesel TEXT NOT NULL,Imie TEXT NOT NULL,Nazwisko TEXT NOT NULL )',[],
          db.nullHandler,
          db.errorHandler
        );
      }.bind(db),
      db.errorHandler,
      db.successCallBack
    );
}
   
function ListDBValues() {
 if (!window.openDatabase) {
  alert('To urządzenie nie obsługuje SQLite!');
  return;
 }
 $$('#lbUsers').html(''); //wyczyszczenie wcześniejszej zawartości
 db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM User10;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#lbUsers').append('<br>' + row.ID + ' ' + row.Marka+ ' ' + row.Rok+ ' ' + row.Silnik+ ' ' + row.Pojemnosc+ ' ');
                             
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
    
    $$('#lbUsers1').html('');
    db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM User11;', [],
     function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          $$('#lbUsers1').append('<br>' + row.UserId + ' '  + row.Pesel+ ' '+ row.Adres+ ' ' + row.Imie+ ' ' + row.Nazwisko+ ' ');
                             
        }
       }
     },errorHandler);
 },errorHandler,nullHandler);
 return
}
 
$$(document).on("page:init",'.page[data-name="index"]',function(e){
    $$('#odswiezanie').on('click', () => {      
        console.log("click")
      ListDBValues();                    
 
 
 
    });
   
$$('#dodawanie').on('click', () => {      
        console.log("click")
      AddValueToDB();                    
 
 
 
    });
});
 
 
 
function AddValueToDB() {
 if (!window.openDatabase) {
   alert('To urządzenie nie obsługuje SQLite!');
   return;
 }
 
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO User10(ID,Marka, Rok, Silnik, Pojemnosc) VALUES (?,?,?,?,?)',[$$('#ID').val(),$$('#Marka').val(),$$('#Rok').val(),$$('#Silnik').val(),$$('#Pojemnosc').val()],
     nullHandler,errorHandler);
   });
 db.transaction(function(transaction) {
   transaction.executeSql('INSERT INTO User11(UserId,Pesel, Adres, Imie, Nazwisko) VALUES (?,?,?,?,?)',[$$('#UserId').val(),$$('#Pesel').val(),$$('#Adres').val(),$$('#Imie').val(),$$('#Nazwisko').val()],
     nullHandler,errorHandler);
   });
 
 return false;
}*/