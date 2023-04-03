export const header=`
<nav class="navbar navbar-expand-lg " style="background: linear-gradient(274.88deg, rgba(238, 230, 255, 0.91) 4.97%, rgb(174, 112, 255) 98.41%); border-radius: 10px; height: 90px;">
<div class="container-fluid">
<a class="navbar-brand" href="#" >      
<a class="navbar-brand" href="#" id="nombre-user">      
<img id="img-user" src="" alt="img" width="30" height="30" class="d-inline-block align-text-top">

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
      <li class="nav-item">  </li> 
     
              

    </a>
<img  src="assets/img/Canva-general-removebg-preview.png" alt="img" width="200px"  style="margin-left: 70%; margin-right: 40%; ">
</a> <div class="row" style="margin-top: 9%; margin-right: 2%; ">
          <div class="col text-center">
              <label id="switch"class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
              </label>
          </div>
      </div>

      <li class="nav-item">
        <a class="nav-link" href="assets/ayuda/guia-unidad4.pdf" style="margin-top: 55%; font-family: 'Baloo Bhai 2';font: size 35px;">Ayuda</a>
      </li>
      <li>
       
      </li>
      <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="margin-top: 33%; font-family: 'Baloo Bhai 2';font: size 35px;">
         Mira aqui!
        </a>
        <ul class="dropdown-menu" style=" font-family: 'Baloo Bhai 2';font: size 5px;">
         
          <li><a class="dropdown-item" href="index.html">Cerrar sesion</a></li>
          <li><a class="dropdown-item"></a></li>
        </ul>

      </li>
    </ul>
  </div>
</div>
</nav>
`;

export const main=`
<div class="container-main">
<div class="general-information">

<div class="container-post">
  <div class="charging">
    <img src="assets/img/cat-charging.gif" />
  </div
  <div class="new-post">
  <form id="task-form">
  <textarea rows="4" cols="80" placeholder="¿Qué secreto quieres comentar?" id="task-description" style="border-radius: 10px;"></textarea>
  <div class="containerProgress">
    <div class="progress"></div>
  </div>
  <div class="hide divImg">
    <span class="deleteImg">❌</span>
    <img class="picPost"/>
  </div>
  <div class="container-functions">
    <div class="camera-privacity">
    <input type="file" id="photoPost" class="hide" accept="image/*">
    <label for="photoPost"><img src="assets/img/camera.png" class="camera"></label>        
      <div class="privacidad">
        <select id="privacyPostArea">
          <option value="1" style="font-family: 'Baloo Bhai 2';font-size: 15px;">🌎 Público</option>
        </select>
                       
    <div id="reaction-buttons">
    <button class="btn btn-like" id="like-btn">
      <i class="fa fa-thumbs-up"></i>
      <span>Me gusta</span><div id="like-count">0 Me gusta</div>
    </button>
    <button class="btn btn-dislike" id="dislike-btn">
      <i class="fa fa-thumbs-down"></i>
      <span>No me gusta</span> <div id="dislike-count">0 No me gusta</div>
    </button>
  </div>
  
      </div>
    </div>
    <button id="btn-task-form" style="border-radius: 5px; background: linear-gradient(274.88deg, rgba(174, 160, 204, 0.91) 4.97%, rgb(240, 205, 241) 98.41%);padding: 6px;    font-family: 'Baloo Bhai 2';font-size: 15px;"> Compartir</button>
  </div>
</div>
<div class="container-post">
<div class="container p-4">
<div class="row">
  <div >
    <ul class="list-group" id="posts">
    </ul>
  </div>
</div>
</div>
  </div>
</div>
</div>
</div>

<div class="footer-basic">
<footer>
    <div class="social">  
    
    <a href="https://www.facebook.com/topsecretrosies1"> <i class="icon ion-social-instagram"><img src="assets/img/facefoter(2).png" width="25px" alt="">
      </i>
      </a></a><a href="https://github.com/joskim28/Red-social-unidad-4"><i class="icon ion-social-twitter"> <img src="assets/img/gitFooter.png" width="35px" alt=""></i></a><a href="https://www.instagram.com/topsecretrosies/"><i class="icon ion-social-facebook"><img src="assets/img/Foterinsta.png" width="25px" alt=""> </i></a></div>
   
    <p class="copyright">Top Secret Rosies © 2023</p>
</footer>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
s`;