const openMenu = document.getElementById('menu-up');
const closeMenu = document.querySelector('.close');
const popUp = document.querySelector('.menu-list');
const listItem = document.querySelectorAll('.list');

openMenu.addEventListener('click', () => {
  popUp.style.display = 'block';
});
closeMenu.addEventListener('click', () => {
  popUp.style.display = 'none';
});

listItem.forEach((item) => {
  item.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
});

// cards

const cardsUl = document.getElementById('cards');

const projects = [
  {
    id: 1,
    heading1: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/Img-Placeholder.svg',
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 2,
    heading1: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/Img-Placeholder.svg',
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },
  {
    id: 3,
    heading1: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/Img-Placeholder.svg',
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 4,
    heading1: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    description2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage: './images/Img-Placeholder.svg',
    languages: ['css', 'html', 'bootstrap', 'Ruby'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },

];

const projectCardsList = projects.map((item) => `
 <div class="${item.left ? 'post-1' : 'post'}">
<img class="placeholder" src="${item.featuredImage}" alt="placeholder">
<div class="post-a">
    <h2 class="second-header">${item.heading1}</h2>
    <p class="second-para">${item.description}</p>
    <div class="workwith">
        <ul class="base">
            <li>css</li>
            <li>html</li>
            <li>bootstrap</li>
            <li>Ruby</li>
        </ul>
    </div>
      <button class="butt-a" type="button" onclick="popUpData(${item.id})">See Project</button>
</div>
</div>
`).join('');

window.addEventListener('load', () => {
  cardsUl.innerHTML = projectCardsList;
});

const temp = document.getElementById('poupWrapper');
function popUpData() {
  temp.innerHTML = `
<div id="story-a">
  <div class="multi-1">
      <h2 class="multi-para">Multi-post story</h2>
      <h2 class="multi-para2">Multi - Post stories</h2>
      <span class="close2" onclick="closePopup()">&times;</span>
  </div>
  <img class="multi-img" src="./images/Snapshoot-Portfolio.svg" alt="Portfolio screenshot">
  <p class="lorem">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.</p>
  <p class="lorem2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.</p>
  <div>
      <ul class="story-list">
          <li>html</li>
          <li>Ruby on rails</li>
          <li>css</li>
          <li>Github</li>
      </ul>
      <ul class="story-list2">
          <li>html</li>
          <li>Ruby on rails</li>
          <li>css</li>
      </ul>
  </div>
  <div class="story-butt">
      <a class="sl" href="https://ogaga01.github.io/Ogagas-portfolio">See Live <img class="git" src="./images/Icon.svg" alt="Enter Icon"></a>
      <a class="sc" href="https://github.com/Ogaga01/Ogagas-portfolio">See Source <img class="git" src="./images/Icon-GitHub.svg" alt="Github icon"></a>
  </div>
</div>
`;
  temp.style.display = 'flex';
}popUpData();
function closePopup() {
  temp.style.display = 'none';
}
closePopup();

function val() {
  const Inputmail = document.getElementById('email1');
  const messageErr = document.getElementById('form-error-message1');
  if (Inputmail.value !== Inputmail.value.toLowerCase()) {
    messageErr.textContent = 'Your email address should be in lowercase';
    return false;
  } return val;
}val();

function val2() {
  const Inputmail2 = document.getElementById('email2');
  const messageErr2 = document.getElementById('form-error-message2');
  if (Inputmail2.value !== Inputmail2.value.toLowerCase()) {
    messageErr2.textContent = 'Your email address should be in lowercase';
    return false;
  } return val2;
}val2();