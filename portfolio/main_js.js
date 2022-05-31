
    ///////             selects text then devide it per words or letter then add class           /////////////////

    // const matrix = document.getElementById('matrix');
    // const content = matrix.textContent.split(' ');
    // matrix.textContent = "";

    // content.forEach(obj =>{
    //     matrix.innerHTML += "<span class = 'matrix'>" + obj + " </span>";
        
    // });

    window.onload = (event) =>{


    const matrix = document.querySelectorAll('p');

    matrix.forEach(cb =>{
        var content = cb.textContent.split(' ');
        cb.textContent = "";
        
        content.forEach(obj =>{
            cb.innerHTML += "<span class = 'matrix fade_up'>" + obj + " </span>";
            
        });
        
    })






    ////////////             INTERSECTION OBSERVER ANIMATION             /////////////
    /*********************SLIDE OBSERVER ANIMATION *********************/
    let style = "slide";       //css class styling
    let timer = 0;

    let intersectionObserver = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setTimeout(function() {entry.target.classList.add(style)},timer);
                timer += 50;
                intersectionObserver.unobserve(entry.target);
            }

            if(timer === 100){
            timer = 0;
            }
        })
        
    }) 

    document.querySelectorAll('.animate').forEach(obj => {
        intersectionObserver.observe(obj); 
    },
    );

    /***********************FADE OBSERVER ANIMATION ***********************/

    let style_fade = "fade";       //css class styling
    let timer_fade = 0;
    let intersectionObserver_fade = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                setTimeout(function() {entry.target.classList.add(style_fade)},timer_fade);
                timer_fade += 150;
                intersectionObserver_fade.unobserve(entry.target);
            }

            if(timer_fade === 3000){
            timer_fade = 0;
            }
        })
        
    },options = {
        threshold: 0.8
    }); 

    document.querySelectorAll('.fade_up').forEach(obj => {
        intersectionObserver_fade.observe(obj); 
    });



    /*********************  NAV BAR OBSERVER **********************/

    let nav_observer = document.querySelector('.intro');
    let obeserver_nav = new IntersectionObserver(entries => {
    
        document.querySelector('.nav_container').classList.toggle("fade");
    })


    obeserver_nav.observe(nav_observer); 

};
