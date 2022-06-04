window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});

function toggleMenu(){
   const menuToggle = document.querySelector('.menuToggle');
   const navigation = document.querySelector('.navigation');
   menuToggle.classList.toggle('active');
   navigation.classList.toggle('active');
}



const firebaseConfig = {
    apiKey: "AIzaSyBTwaqkA_Umj70wXP73tUhoorqX8IWmTQE",
    authDomain: "fmp-jawan-pakistan.firebaseapp.com",
    databaseURL: "https://fmp-jawan-pakistan-default-rtdb.firebaseio.com",
    projectId: "fmp-jawan-pakistan",
    storageBucket: "fmp-jawan-pakistan.appspot.com",
    messagingSenderId: "351777592394",
    appId: "1:351777592394:web:2af9fc5e1dedd87d95c2b3"
};
firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() =>{
        document.querySelector('.alert').style.display = 'none';
    }, 3000);


    document.getElementById('contactForm').reset();
}


const saveMessages = (name, emailid, msgContent) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name : name,
        emailid : emailid,
        msgContent : msgContent,
    })
};



const getElementVal = (id) =>{
    return document.getElementById(id).value;
}






