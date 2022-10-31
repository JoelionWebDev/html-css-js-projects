const theme = document.getElementsByClassName('dotted')

let thm = localStorage.getItem('thm')
if(thm == null){
      setTheme ('white')
}else{
      setTheme(thm)
}


for(let todo of theme){
      todo.addEventListener('click',  function(e) {

    let mode = this.dataset.mode
            //console.log('option chlicked is', mode)
            setTheme(mode)
      })
}

function setTheme(mode){
      if(mode === 'white'){
            document.getElementById('theme-css'). href='white.css'
      }
      if(mode === 'blue'){
            document.getElementById('theme-css'). href='blue.css'
      }
      if(mode === 'green'){
            document.getElementById('theme-css'). href='green.css'
      }
      if(mode === 'yellow'){
            document.getElementById('theme-css'). href='yellow.css'
      }

      localStorage.setItem('thm', mode)
}

//      function setTheme(e){
//       if(e.target.classList.contains('white')){
//             document.getElementById('theme-css'). href='white.css'
//       }
//       if(e.target.classList.contains('blue')){
//             document.getElementById('theme-css'). href='blue.css'
//       }
//       if(e.target.classList.contains('green')){
//             document.getElementById('theme-css'). href='green.css'
//       }

//       if(e.target.classList.contains('yellow')){
//             document.getElementById('theme-css'). href='yellow.css'
//       }
//localStorage.setItem('thm', mode)

//}
