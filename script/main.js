// header
// 스크롤에따라 헤더의 색상이 바뀜
const contentLayout = document.querySelector("#wrapper");
const header = document.querySelector("header");

contentLayout.addEventListener('scroll', () => {
  // console.log(contentLayout.scrollTop);
  if(contentLayout.scrollTop >3000){
    header.classList.remove('fixed');
  }else if(contentLayout.scrollTop >2000){
      header.classList.add('fixed');
  }else if(contentLayout.scrollTop >1000){
    header.classList.remove('fixed');
  }else if(contentLayout.scrollTop > 100){
      header.classList.add('fixed');
  }else{
    header.classList.remove('fixed');
  }
});


// 3. 제품소개
// 브랜드 로고를 누르면 제품소개의 배경색이 변함
const product = document.getElementById('product');
const p_radios = document.querySelectorAll('input[name="product"]');

for(i=0; i<p_radios.length; i++){
  p_radios[i].addEventListener('change', function(){
    // console.log(this.id);
    switch(this.id){
      case "product01" : product.style.backgroundColor = 'var(--color03)'; break;
      case "product02" : product.style.backgroundColor = 'var(--sub_color01)'; break;
      case "product03" : product.style.backgroundColor = 'var(--sub_color02)'; break;
      case "product04" : product.style.backgroundColor = 'var(--sub_color03)'; break;
      case "product05" : product.style.backgroundColor = 'var(--sub_color04)'; break;
      case "product06" : product.style.backgroundColor = 'var(--sub_color05)'; break;
      case "product07" : product.style.backgroundColor = 'var(--sub_color06)'; break;
      case "product08" : product.style.backgroundColor = 'var(--sub_color07)'; break;
    }
  });
}