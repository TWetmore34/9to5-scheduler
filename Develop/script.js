var testEl = document.querySelectorAll('[value="submit"]');

console.log(testEl)

// this test means i dont need my onclicks to be buttons. I can now go thru and change the :hover for each of these divs
for(i=0;i<testEl.length;i++){
testEl[i].addEventListener('click', function(){
    // in this function, ill need to save to local memory and be sure it loads that display on page load for each text div :)
    console.log('this sure does work!')

})};