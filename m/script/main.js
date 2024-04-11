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