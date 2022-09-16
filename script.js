function DaytoNight() {
    if (this.scrollY > this.innerHeight / 1.2) {
        
       document.body.classList.add('newNight') 
    }
    else {
        document.body.classList.remove('newNight')
    }
    
    }
    
window.addEventListener('scroll', DaytoNight)
