const navSide = document.querySelectorAll('.nav-side li');
const navSideBar = document.querySelectorAll('.nav-side li .bar-link');
const navSideLink = document.querySelectorAll('.nav-side li .nav-link');
const section = document.getElementsByClassName('section');

// navSide 클릭시 active 클래스 추가/제거
for(let i =0; i < navSide.length; i ++){
  navSide[i].addEventListener('click', (e) => {
    e.preventDefault();
    for(element of navSideBar) {
      element.classList.remove('bar-active');
    }
    for(element of navSideLink) {
      element.classList.remove('nav-side-active');
    }

    let hasAct = navSideBar[i].classList.contains('bar-active') && navSideLink[i].classList.contains('nav-side-active');
    if(!hasAct){
      navSideBar[i].classList.add('bar-active');
      navSideLink[i].classList.add('nav-side-active');
    }else{
      navSideBar[i].classList.remove('bar-active');
      navSideLink[i].classList.remove('nav-side-active');
    }
  })
}


// scroll시 html문서의 스크롤 높이 값에 따라 navSide에 active 클래스 추가/제거
window.addEventListener('scroll', (e) => {
  e.preventDefault();

  // html의 scrollTop
  let scroll = document.documentElement.scrollTop;
  // section의 높이(index는 임의값)
  let sectionHeight = section[0].clientHeight;

  for(element of navSideBar) {
    element.classList.remove('bar-active');
  }
  for(element of navSideLink) {
    element.classList.remove('nav-side-active');
  }

  if(sectionHeight > scroll){
    navSideBar[0].classList.add('bar-active');
    navSideLink[0].classList.add('nav-side-active');
  }else if(sectionHeight == scroll) {
    navSideBar[1].classList.add('bar-active');
    navSideLink[1].classList.add('nav-side-active');
  }else if(sectionHeight * 2 == scroll){
    console.log(sectionHeight * 2);
    navSideBar[2].classList.add('bar-active');
    navSideLink[2].classList.add('nav-side-active');
  }else if(sectionHeight * 4 == scroll){
    navSideBar[3].classList.add('bar-active');
    navSideLink[3].classList.add('nav-side-active');
  }

});


// navSide 클릭시 스크롤 이동
navSide[0].addEventListener('click', () => {
  window.scrollTo(0, 0);
});

navSide[1].addEventListener('click', () => {
  let sectionHeight = section[1].clientHeight;
  window.scrollTo(0, sectionHeight);
});

navSide[2].addEventListener('click', () => {
  let sectionHeight = section[2].clientHeight;
  window.scrollTo(0, sectionHeight * 2);
});

navSide[3].addEventListener('click', () => {
  let sectionHeight = section[2].clientHeight;
  window.scrollTo(0, sectionHeight * 4);
});
