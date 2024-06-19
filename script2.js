// Select the elements
var leftimg = document.querySelector(".leftimg");
var rightvid = document.querySelector(".rightvid");
var lefttxt = document.querySelector(".lefttxt");
var righttxt = document.querySelector(".righttxt");
var txt = document.querySelector(".txt");

// Add mouseover event listener to leftimg
leftimg.addEventListener('mouseover', function() {
    txt.innerHTML = `
        <div class="lefttxt flex items-center gap-3 text-3xl ml-32 mt-5 hidden">
            <h1>Caritus</h1>
            <img src="starw.svg" class="h-6" alt="">
            <h1>Kampagne</h1>
        </div>
    `;
});

// Add click event listener to rightvid
rightvid.addEventListener('click', function() {
    txt.innerHTML = `
        <div class="righttxt flex gap-4 mr-24 text-5xl hidden">
            <h1>LINK3</h1>
            <img src="starw.svg" class="h-12" alt="">
            <h1>Branding & identity</h1>
        </div>
    `;
});