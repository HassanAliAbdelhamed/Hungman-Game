let object = {
  animals : [{value:'cat' ,src : 'images/animals/cat.png' }
  ,{value:'checken' ,src : 'images/animals/checken.png'}
  ,{value:'cheep' ,src : 'images/animals/cheep.jpg'}
  ,{value:'cow' ,src : 'images/animals/cow.jpg'}
  ,{value:'dog' ,src : 'images/animals/dog.jpg'}
  ,{value:'duck' ,src : 'images/animals/duck.jpg'}
  ,{value:'goat' ,src : 'images/animals/goat.png'}
  ,{value:'hourse' ,src : 'images/animals/hourse.jpg'}
  ,{value:'lion' ,src : 'images/animals/lion.jpg'}
  ,{value:'rabit' ,src : 'images/animals/rabit.jpg'}
  ],
  sports : [{value:'baseball' ,src : 'images/sports/baseball.png' }
  ,{value:'basketball' ,src : 'images/sports/basket ball.jpg'}
  ,{value:'cycling' ,src : 'images/sports/cycling.jpg'}
  ,{value:'football' ,src : 'images/sports/football.jpg'}
  ,{value:'golf' ,src : 'images/sports/golf.jpg'}
  ,{value:'skateboard' ,src : 'images/sports/skateboard.jpg'}
  ,{value:'skipping' ,src : 'images/sports/skipping.jpg'}
  ,{value:'swimming' ,src : 'images/sports/swimming.jpg'}
  ,{value:'tennis' ,src : 'images/sports/tennis.jpg'}
  ,{value:'vollyball' ,src : 'images/sports/vollyball.jpg'}
  ]

};
let reloadDiv = document.createElement('div')


let keysOfObject = Object.keys(object);
let randomObject = Math.floor(Math.random() * keysOfObject.length);
let selectedPart = Object.keys(object)[randomObject];
let indexSelectedThing = Math.floor(Math.random() * selectedPart.length);
let selectedThing = object[selectedPart][indexSelectedThing];
let value = selectedThing["value"];
let path = selectedThing['src'];

let imagepath = document.querySelector('img');
imagepath.src = path;
console.log(value);
let valueSpan = document.querySelector('.container .rightPart h3 span');
let listOfValue = Array.from(value);

valueSpan.textContent = selectedPart;
let keyboardContainer = document.querySelector('.keyboard .container');
let letters = 'abcdefghijklmnopqrstuvwxyz';
let arrayOfLetters = Array.from(letters);
arrayOfLetters.forEach((item) => {
  let span = document.createElement('span');
  let spanText = document.createTextNode(item);
  span.appendChild(spanText);
  keyboardContainer.appendChild(span);
});


let guessedWordContainer = document.querySelector('.guessedWord .container');
listOfValue.forEach((item) => {
  let span = document.createElement('span');
  let spanText = document.createTextNode('');
  span.appendChild(spanText);
  guessedWordContainer.appendChild(span);
  if (item===' ')
  {
    span.className = 'space';
  }
});

function repear(){
  let i = 0 ;
  let j = 0 ;
  let shape = document.querySelectorAll('.Game .container .shape .sh');
  let body = document.querySelector('body');
  let putInput = document.querySelectorAll('.guessedWord .container span');
  let lettersScanFromScreen  = document.querySelectorAll('.keyboard .container span');
  lettersScanFromScreen.forEach((item) => {
    item.onclick = function () {
    let letterScanned = item.textContent;
    if(letterScanned ==listOfValue[i] ){
    putInput[i].textContent = letterScanned;
    i+=1;

    if(i == value.length)
    {
      let nonCursor = document.querySelector('.keyboard .container');
      nonCursor.style.pointerEvents = "none";
     let winDivtext = document.createTextNode('You Win . ');
     let winDiv = document.createElement('div');

     let reloadWinText = document.createTextNode('Play Again');
     let reloadDiv =  document.createElement('div');
     reloadDiv.style.backgroundColor = 'teal';
     reloadDiv.style.color = 'white';
     reloadDiv.appendChild(reloadWinText);
     body.style = 'background : #cbcad7';
     winDiv.className = "GameOverDiv";

     winDiv.appendChild(winDivtext);
     winDiv.appendChild(reloadDiv);
     document.body.appendChild(winDiv);
     reloadDiv.onclick = function () {
       let nonCursor = document.querySelector('.keyboard .container');
       nonCursor.style.pointerEvents = "visible";
         j=0 ;
         i=0 ;
         shape.forEach((item) => {
           item.style.display  = 'none';
           body.style.backgroundColor= 'white';
         });

         deleted = document.querySelector('.GameOverDiv');
         deletedSpan =  document.querySelector('.container .rightPart h3 span');
         spandeleted = document.querySelectorAll('.guessedWord .container span');
         spandeleted.forEach((item) => {
           item.remove();
         });
         winDivtext.textContent = '';
         deleted.remove();
         keysOfObject = Object.keys(object);
         randomObject = Math.floor(Math.random() * keysOfObject.length);
         selectedPart = Object.keys(object)[randomObject];
         indexSelectedThing = Math.floor(Math.random() * selectedPart.length);
         selectedThing = object[selectedPart][indexSelectedThing];
         value = selectedThing["value"];
         path = selectedThing['src'];
         imagepath = document.querySelector('img');
         imagepath.src = path;
         valueSpan = document.querySelector('.container .rightPart h3 span');
         listOfValue = Array.from(value);
         valueSpan.textContent = selectedPart;
         guessedWordContainer = document.querySelector('.guessedWord .container');
         console.log(listOfValue);
         listOfValue.forEach((item) => {
         span = document.createElement('span');
         spanText = document.createTextNode('');
         span.appendChild(spanText);
         guessedWordContainer.appendChild(span);
         if (item===' ')
           {
             span.className = 'space';
           }
         });


         repear();

    }


  }}
    else{
      if ( j==5 ) {
        j=6;
      }
      if(j<8){
        shape[j].style.display = 'block';
        j+=1;

      }
      else {
        shape[j].style.display = 'block';
        let gameOverDiv = document.createElement('div')
        let nonCursor = document.querySelector('.keyboard .container');
        nonCursor.style.pointerEvents = "none";
        let text = 'You lose the word is : ' + value;

        let gameOverText = document.createTextNode(text);
        let reloadText = document.createTextNode('Play Again');

        body.style = 'background : #cbcad7';
        gameOverDiv.className = "GameOverDiv";

        reloadDiv.appendChild(reloadText);
        gameOverDiv.appendChild(gameOverText);
        gameOverDiv.appendChild(reloadDiv);
        console.log(gameOverDiv);
        document.body.appendChild(gameOverDiv)
        let reloeadClickedDiv = document.querySelector('.GameOverDiv div');

        reloeadClickedDiv.onclick = function () {
          let nonCursor = document.querySelector('.keyboard .container');
          nonCursor.style.pointerEvents = "visible";
            j=0 ;
            i=0 ;
            shape.forEach((item) => {
              item.style.display  = 'none';
              body.style.backgroundColor= 'white';
            });

            let deleted = document.querySelector('.GameOverDiv');
            let deletedSpan =  document.querySelector('.container .rightPart h3 span');
            let spandeleted = document.querySelectorAll('.guessedWord .container span');
            spandeleted.forEach((item) => {
              item.remove();
            });
            reloeadClickedDiv.textContent = '';
            deleted.remove();
            keysOfObject = Object.keys(object);
            randomObject = Math.floor(Math.random() * keysOfObject.length);
            selectedPart = Object.keys(object)[randomObject];
            indexSelectedThing = Math.floor(Math.random() * selectedPart.length);
            selectedThing = object[selectedPart][indexSelectedThing];
            value = selectedThing["value"];
            path = selectedThing['src'];
            imagepath = document.querySelector('img');
            imagepath.src = path;
            valueSpan = document.querySelector('.container .rightPart h3 span');
            listOfValue = Array.from(value);
            valueSpan.textContent = selectedPart;
            guessedWordContainer = document.querySelector('.guessedWord .container');
            console.log(listOfValue);
            listOfValue.forEach((item) => {
            span = document.createElement('span');
            spanText = document.createTextNode('');
            span.appendChild(spanText);
            guessedWordContainer.appendChild(span);
            if (item===' ')
              {
                span.className = 'space';
              }
            });
            repear();


        }

      }

    }
  }

});
}
repear();
