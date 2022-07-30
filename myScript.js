var image, text;

// Describe this function...
function displayCurrent() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_current_image = document.getElementById('current_image');
  element_current_image.replaceChildren();
  element_current_image.setAttribute("src", image[0]);
  let element_current_text = document.getElementById('current_text');
  element_current_text.replaceChildren();
  element_current_text.innerText = text[0];
}


image = ['https://georgeprimentas.github.io/London9/TwitterGuideline-BMW-4Nov2016%2008-15-20.jpg', 'https://georgeprimentas.github.io/London9/TwitterGuideline-ContactlessCards-3Nov2016.jpg', 'https://georgeprimentas.github.io/London9/TwitterGuideline-HotelChocolat-19Oct2016.jpg', 'https://georgeprimentas.github.io/London9/TwitterGuideline-MedalsMetalsRio2016.jpg', 'https://georgeprimentas.github.io/London9/TwitterGuideline-Oil-12Dec2016.jpg'];
text = ['1/5 Comparison of sales of Rolls-Royce and Mini cars', '2/5 Contactless card payments in the UK', '3/5 Hotel Chocolat Results', '4/5 The medals and the metals of the Rio Olympic Games', '5/5 Crude Oil Production Cuts'];


document.getElementById('next').addEventListener('click', (event) => {
  let element_current_image2 = document.getElementById('current_image');
  image.push(image.shift());
  displayCurrent();
  let element_current_text2 = document.getElementById('current_text');
  text.push(text.shift());
  displayCurrent();

});

document.getElementById('previous').addEventListener('click', (event) => {
  let element_current_image3 = document.getElementById('current_image');
  image.unshift(image.pop());
  displayCurrent();
  let element_current_text3 = document.getElementById('current_text');
  text.unshift(text.pop());
  displayCurrent();

});
