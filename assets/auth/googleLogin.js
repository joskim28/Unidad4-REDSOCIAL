import { GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js'
import { auth } from './firebase.js'
import { toast } from './toast.js';
import { header, main } from '../js/home.js';
import { postlist } from './postlist.js';

const headerHo= document.querySelector("#header");
const formLogin = document.querySelector(".card-login")
const formSignUp = document.querySelector(".card-signUp")
const mainHome= document.querySelector("#main");
const btnGoogle= document.querySelector("#btnGoogle");

btnGoogle.addEventListener('click', async ()=> {
    const provider= new GoogleAuthProvider()
    try{
    const credentials= await signInWithPopup(auth, provider)
    console.log(credentials)
        toast("Welcome "+credentials.user.displayName,"success")
        //
        formLogin.style.display = 'none';
        formSignUp.style.display = 'none';
        headerHo.innerHTML=header;
      
        const nameUser=document.getElementById("nombre-user");
        nameUser.innerHTML=`<a class="navbar-brand" href="#" id="nombre-user">      
        <img id="img-user" src="" alt="img" width="30" class="d-inline-block align-text-top imguser">
        ${credentials.user.displayName}
        </a>`;
        const imgUser=document.getElementById("img-user");
        imgUser.src=credentials.user.photoURL;
        
        mainHome.innerHTML=main;
        $(document).ready(function() {
            setTimeout(function() {
                // Declaramos la capa mediante una clase para ocultarlo
                $(".charging").fadeOut(1500);
            },3000);
        });
        postlist();//
    }catch (error){
        toast(error, "error");
    }
})