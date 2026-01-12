# codeAlpha-image-gallery-task-1
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Responsive Image Gallery</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
    margin:0;
    font-family:Arial, sans-serif;
    background:#f4f6f8;
    text-align:center;
}

h1{ margin:20px; }

/* FILTER BUTTONS */
.filters button{
    padding:10px 18px;
    margin:5px;
    border:none;
    border-radius:20px;
    background:#333;
    color:#fff;
    cursor:pointer;
}
.filters button.active{
    background:#007bff;
}

/* GALLERY GRID */
.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:15px;
    padding:20px;
    max-width:1200px;
    margin:auto;
}
.gallery-item{
    overflow:hidden;
    border-radius:12px;
}
.gallery-item img{
    width:100%;
    height:100%;
    object-fit:cover;
    cursor:pointer;
    transition:0.4s;
}
.gallery-item:hover img{
    transform:scale(1.1);
    filter:brightness(80%);
}

/* LIGHTBOX */
.lightbox{
    display:none;
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.9);
    justify-content:center;
    align-items:center;
}
.lightbox img{
    max-width:90%;
    max-height:80%;
}
.lightbox span{
    position:absolute;
    color:white;
    font-size:40px;
    cursor:pointer;
}
.close{ top:20px; right:30px; }
.prev{ left:20px; }
.next{ right:20px; }
</style>
</head>

<body>

<h1>Responsive Image Gallery</h1>

<!-- FILTER BUTTONS -->
<div class="filters">
    <button class="active" onclick="filterImages('all',this)">All</button>
    <button onclick="filterImages('nature',this)">Nature</button>
    <button onclick="filterImages('animals',this)">Animals</button>
    <button onclick="filterImages('city',this)">City</button>
</div>

<!-- GALLERY -->
<div class="gallery">

<!-- CITY -->
<div class="gallery-item city"><img src="https://images.unsplash.com/photo-1494526585095-c41746248156" onclick="openLightbox(1)"></div>
<div class="gallery-item city"><img src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad" onclick="openLightbox(3)"></div>

<!-- ANIMALS -->
<div class="gallery-item animals"><img src="https://images.unsplash.com/photo-1552410260-0fd9b577afa6" onclick="openLightbox(4)"></div>
<div class="gallery-item animals"><img src="https://images.unsplash.com/photo-1546182990-dffeafbe841d" onclick="openLightbox(5)"></div>
<div class="gallery-item animals"><img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5" onclick="openLightbox(7)"></div>

<!-- NATURE -->
<div class="gallery-item nature"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" onclick="openLightbox(9)"></div>
<div class="gallery-item nature"><img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e" onclick="openLightbox(10)"></div>
<div class="gallery-item nature"><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e" onclick="openLightbox(11)"></div>

</div>

<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox">
    <span class="close" onclick="closeLightbox()">×</span>
    <span class="prev" onclick="changeImage(-1)">❮</span>
    <img id="lightbox-img">
    <span class="next" onclick="changeImage(1)">❯</span>
</div>

<script>
const images=document.querySelectorAll(".gallery img");
let currentIndex=0;

function openLightbox(i){
    currentIndex=i;
    document.getElementById("lightbox").style.display="flex";
    document.getElementById("lightbox-img").src=images[i].src;
}
function closeLightbox(){
    document.getElementById("lightbox").style.display="none";
}
function changeImage(step){
    currentIndex=(currentIndex+step+images.length)%images.length;
    document.getElementById("lightbox-img").src=images[currentIndex].src;
}
function filterImages(cat,btn){
    document.querySelectorAll(".filters button").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".gallery-item").forEach(item=>{
        item.style.display=(cat==="all"||item.classList.contains(cat))?"block":"none";
    });
}
</script>

</body>
</html>
