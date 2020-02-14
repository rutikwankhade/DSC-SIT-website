let navbar=document.querySelector('nav');
let navMarkup=`
<a class="navbar-brand title" href="index.html"><img src="images/google-dev.webp" class="logo">DSC SIT</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class=" sticky-top collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav navlinks">
    <li class="nav-item ml-2"><a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a></li>
    <li class="nav-item ml-2"><a class="nav-link" href="events.html">Events</a></li>
    <li class="nav-item ml-2"><a class="nav-link" href="team.html">Team</a></li>
    <li class="nav-item ml-2"><a class="nav-link" href="about.html">About</a></li>
  </ul>
  </div>


  `;

  navbar.innerHTML=navMarkup;