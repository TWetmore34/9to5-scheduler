// global dom variables
var testEl = document.querySelectorAll('[value="submit"]');
var inputEl = document.querySelectorAll('input');
var dayEl = document.getElementById('currentDay');

function clock(){
    setInterval(function(e){
        let clock = moment().format('MMMM Do YYYY, h:mm:ss a');
        dayEl.innerHTML = clock;
    },1000)
}
clock()

// runs a loop to let an event listener hit all the submit buttons
for(i=0;i<testEl.length;i++){
testEl[i].addEventListener('click', function(){
    for(let i=0;i<inputEl.length;i++){
        if(inputEl[i].value){
            // declares values object for local storage. updates with info from values on button click
            let values = {
                nine: inputEl[0].value,
                ten: inputEl[1].value,
                eleven: inputEl[2].value,
                twelve: inputEl[3].value,
                one: inputEl[4].value,
                two: inputEl[5].value,
                three: inputEl[6].value,
                four: inputEl[7].value,
                five: inputEl[8].value,
            }
        // storageArr holds our object in storage 
        let storageArr = []
        storageArr.push(values);
        localStorage.setItem('storage', JSON.stringify(storageArr));
        }
    }
})};

function display(){
    // accesses each object in the stored values to retain display and value readings on page load
inputEl[0].value = JSON.parse(localStorage.getItem('storage'))[0].nine
inputEl[1].value = JSON.parse(localStorage.getItem('storage'))[0].ten
inputEl[2].value = JSON.parse(localStorage.getItem('storage'))[0].eleven
inputEl[3].value = JSON.parse(localStorage.getItem('storage'))[0].twelve
inputEl[4].value = JSON.parse(localStorage.getItem('storage'))[0].one
inputEl[5].value = JSON.parse(localStorage.getItem('storage'))[0].two
inputEl[6].value = JSON.parse(localStorage.getItem('storage'))[0].three
inputEl[7].value = JSON.parse(localStorage.getItem('storage'))[0].four
inputEl[8].value = JSON.parse(localStorage.getItem('storage'))[0].five

console.log(moment().format('H'))
console.log(inputEl[0].dataset.time)

// changes color display based on time
console.log(typeof(inputEl[0].dataset.time))
for (i=0;i<inputEl.length;i++){
    if (inputEl[i].dataset.time == moment().format('H')){
        inputEl[i].setAttribute('class', 'bg-present col-8')
    } else if(inputEl[i].dataset.time < moment().format('H')){  
        inputEl[i].setAttribute('class', 'bg-custom col-8');
    } else if (moment().format('H') >= 9){
        inputEl[0].setAttribute('class', 'bg-custom col-8')
    } else if(moment().format('H') == 9){
        inputEl[0].setAttribute('class', 'bg-present col-8')
    }
}};
display()