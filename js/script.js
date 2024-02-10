let pictures = [
    './img/1.jpg', 
    './img/2.jpg', 
    './img/3.jpg', 
    './img/4.jpg', 
    './img/5.jpg', 
    './img/6.jpg', 
    './img/7.jpg', 
    './img/8.jpg', 
    './img/9.jpg', 
    './img/10.jpg', 
    './img/11.jpg', 
    './img/12.jpg', 
    './img/13.jpg', 
    './img/14.jpg', 
    './img/15.jpg', 
    './img/16.jpg', 
    './img/19.jpg', 
    './img/18.jpg', 
    './img/19.jpg', 
    './img/20.jpg', 
    './img/21.jpg', 
    './img/22.jpg', 
    './img/23.jpg', 
    './img/24.jpg',
    './img/25.jpg', 
    './img/26.jpg', 
    './img/26.jpg', 
    './img/28.jpg', 
    './img/29.jpg', 
    './img/30.jpg', 
    './img/31.jpg', 
    './img/32.jpg', 
    './img/33.jpg', 
    './img/34.jpg', 
    './img/35.jpg', 
    './img/36.jpg', 
    './img/37.jpg', 
    './img/38.jpg', 
    './img/39.jpg', 
    './img/40.jpg', 
    './img/41.jpg'];


// function loadPicPathInArray() {
//     for (let i = 1; i <= 41; i++) {
//         pictures.push(`./img/${i}.jpg`);
//     }
// }


async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let respo = await fetch(file);
        if (respo.ok) {
            element.innerHTML = await respo.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function  render() {
    for(i = 0; i < pictures.length; i++)
    document.getElementById('picContainer').innerHTML += renderHtml();
}


function renderHtml(){
    return /*html*/ `
        <div id="picbox(${i})" class="picbox">
         <img class="escape" onclick="openPicture(${i})" src="${pictures[i]}">
         </div>
    `;
}


function openPicture(i) {
    let pictureSize = document.getElementById('bigPicture');
    pictureSize.classList.add('d-block');
    document.getElementById('bigPicture').innerHTML = openPictureHtml(i);
}


function openPictureHtml(i) {
    return /*html*/ `
        <button class="closeBTN" onclick="closePicture()"><img src="./img/icon/schliessen_white.png" alt="close button"></button>
        <div class="bigPictureContainer">
            <button onclick="prevPicture(${i -1})" class="sliderBtn"><img src="./img/icon/links_white.png" alt=""></button>
            <img id="bigPicture(${i})" class="bigPicture" src="${pictures[i]}">
            <button onclick="nextPicture(${i +1})" class="sliderBtn"><img src="./img/icon/rechts_white.png" alt=""></button>
        </div>
          `;
}


function closePicture() {
    document.getElementById('bigPicture').innerHTML = '';
    let pictureSize = document.getElementById('bigPicture');
    pictureSize.classList.remove('d-block');
}


function toggle() {
    document.getElementById(`menuLeft`).classList.toggle(`menuLeftTrans`);
    document.getElementById(`responsivBack`).classList.toggle(`showX`);
}


function nextPicture(i) {
    if (i > (pictures.length - 1)) {
        i=1;
        openPicture(i);
      } else  {
        i = i++;
        openPicture(i);
      }; 
}


function prevPicture(i) {
    if (i < 1) {
        i=(pictures.length - 1);
        openPicture(i);
      } else  {
        i = i--;
        openPicture(i);
      }; 
}




