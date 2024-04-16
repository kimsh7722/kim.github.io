// Swiper 를 쓰는이유? 슬라이드를 하기 위해 사용한다.
// 새로운 swiper를 만든다. class swiper1 swiper를 받는다.
new Swiper('.swiper1 .swiper',{
  // direction : 방향 
    direction:'horizontal',
    // 자동으로 이동한다
    autoplay:{
      // delay : 2000 : 2초마다 이동한다.
      delay:2000,
      // disableOnInteraction : 사용자가 마우스나 다른 방식으로 상호작용해 2초전? 에 이동하게 될시 원래 swiper는 꺼진다.
      // 계속 가고싶을때 못 가게 될시 쓰기 위한 방법이다.
      disableOnInteraction:false
    },

    // 네이게이션 적용
    navigation:{
      // prevEl : 버튼을 누를시 뒤로 슬라이드가 뒤로 이동하게 만들어준다.
      prevEl:'.swiper .swiper-button-prev',
      // nextEl : 버튼을 누를 시 앞으로 슬라이드가 이동하게 만들어준다.
      nextEl:'.swiper .swiper-button-next'
    }
  })