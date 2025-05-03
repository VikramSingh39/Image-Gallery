let image1 = document.querySelector('.image1');
let image2 = document.querySelector('.image2');
let image3 = document.querySelector('.image3');
let selected_img = document.querySelector('.selected_img');
let images = document.querySelectorAll('.image_list img')


let img_src1 = 'https://images.unsplash.com/photo-1716377896129-2d44af2d40a7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG9yYW5nZSUyMGZydWl0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww';

let img_src2 = 'https://images.unsplash.com/photo-1597714026720-8f74c62310ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yYW5nZSUyMGZydWl0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww'

let img_src3 = 'https://images.unsplash.com/photo-1709655915115-6372bc6f76a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG9yYW5nZSUyMGZydWl0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww'

image1.src = img_src1;
image2.src = img_src2;
image3.src = img_src3;

 function changeImg(event){
     selected_img.src = event.target.src;
 }
 images.forEach(img =>{
      img.addEventListener('click', changeImg)
 })