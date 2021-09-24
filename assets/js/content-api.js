document.addEventListener("DOMContentLoaded",function(){
    var search = document.getElementById("query");
    search.addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            alerts();
        }
    });


    //food photo
    function alerts()
    {
        var input = document.getElementById("query").value;
        getnutrition(input,"content");
        document.getElementById("query").value = "";
    }

    function getphotos(input, location){
    const url = "https://api.pexels.com/v1/search?query="+input+"&per_page=1"
    const api_key = "563492ad6f917000010000018347c83b0e8a41c5a48a27b7da245e2b"
                const img = fetch(url,{
                    method:"GET",
                    headers:{
                        authorization:api_key
                    }
                })
                .then(response=>{
                    return response.json();
                }) 
                .then(data=>{
                    //console.log(data.photos);
                    document.querySelector(location).src = data.photos[0].src.landscape;
                
                })
                .catch(function(error) {
                    console.log(error);
                });
        
        

    }

    //nutrition facts
    function getnutrition(input){
        const url = "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" + input;
        const settings = fetch(url, {
            async: true,
            crossDomain: true,
            method: "GET",
            headers: {
                "x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "7c8230c9femshd8d42c53c0de608p1873d3jsn5951e6af9ca2"
            }
        })  	
        .then(response=>{
            return response.json();
        }) 
        .then(response=>{
            var str = response[0].name;
            //document.querySelector(".content h1").innerHTML = str.toUpperCase();
            document.querySelector(".content").innerHTML = `<header><h1>${str.toUpperCase()}	</h1></header>
                <p><strong>Calories</strong>:&nbsp&nbsp${response[0].calories}</p>
                <p><strong>Protein</strong>:&nbsp&nbsp${response[0].protein_g}</p>
                <p><strong>Saturated Fat</strong>:&nbsp&nbsp${response[0].fat_saturated_g}</p>
                <p><strong>Total Fat</strong>:&nbsp&nbsp${response[0].fat_total_g}</p>
                <p><strong>Soduim</strong>:&nbsp&nbsp${response[0].sodium_mg}</p>
                <p><strong>Sugar</strong>:&nbsp&nbsp${response[0].sugar_g}</p>
                <p><strong>Fiber</strong>:&nbsp&nbsp${response[0].fiber_g}</p>
                <p><strong>Carbohydrates</strong>:&nbsp&nbsp${response[0].carbohydrates_total_g}</p>
                <ul class="actions">
                </ul><div>`
            getphotos(input,".image img");				
        })
        .catch(function(error) {
            console.log(error);
            document.querySelector(".content").innerHTML =`<header><h1 style = "color:red">Looks like we dont have info for your food</h1></header>
            <p>(what are you eating)?<p>`
            document.querySelector(".object img").src = "images/pass-out-face.jpg";

        });
                
    }

    /*
    function getnutrition(input, location){
        const url = "https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=" + input;
        const settings = fetch(url, {
            async: true,
            crossDomain: true,
            method: "GET",
            headers: {
                "x-rapidapi-host": "nutrition-by-api-ninjas.p.rapidapi.com",
                "x-rapidapi-key": "7c8230c9femshd8d42c53c0de608p1873d3jsn5951e6af9ca2"
            }
        })  	
        .then(response=>{
            return response.json();
        }) 
        .then(response=>{
            var str = response[0].name;
            //document.querySelector(".content h1").innerHTML = str.toUpperCase();
            document.getElementById(location).innerHTML = `<header><h1>${str.toUpperCase()}	</h1></header>
                <p><strong>Calories</strong>:&nbsp&nbsp${response[0].calories}</p>
                <p><strong>Protein</strong>:&nbsp&nbsp${response[0].protein_g}</p>
                <p><strong>Saturated Fat</strong>:&nbsp&nbsp${response[0].fat_saturated_g}</p>
                <p><strong>Total Fat</strong>:&nbsp&nbsp${response[0].fat_total_g}</p>
                <p><strong>Soduim</strong>:&nbsp&nbsp${response[0].sodium_mg}</p>
                <p><strong>Sugar</strong>:&nbsp&nbsp${response[0].sugar_g}</p>
                <p><strong>Fiber</strong>:&nbsp&nbsp${response[0].fiber_g}</p>
                <p><strong>Carbohydrates</strong>:&nbsp&nbsp${response[0].carbohydrates_total_g}</p>
                <ul class="actions">
                </ul><div>`
            getphotos(input);				
        })
        .catch(function(error) {
            console.log(error);
            document.querySelector(".content").innerHTML =`<header><h1 style = "color:red">Looks like we dont have info for your food</h1></header>
            <p>(what are you eating)?<p>`
            document.querySelector(".object img").src = "images/pass-out-face.jpg";

        });
                
    }
    */

    //sidebar

    var randomizer = Math.floor(Math.random() * 6);
    //console.log(randomizer);

    let foodarray1 = ["Croissant", "Tomatoes", "Olives", "Crepes", "Pizza", "Lime", "Crab"]
    let foodarray2 = ["Beets", "Coffee", "Dark Chocolate", "Sushi", "Blackberries", "Avocado", "Pomegranate"]
    let foodarray3 = ["Garlic", "Bacon", "Apple", "Beef", "Pork", "Rice", "Cherries"]

    getphotos(foodarray1[randomizer], ".image1 img");
    document.querySelector(".image1 p").innerHTML = foodarray1[randomizer];
    document.querySelector(".image1 img").addEventListener("click",e=>{
        getnutrition(foodarray1[randomizer],"content");
    })

    getphotos(foodarray2[randomizer], ".image2 img");
    document.querySelector(".image2 p").innerHTML = foodarray2[randomizer];
    document.querySelector(".image1 img").addEventListener("click",e=>{
        getnutrition(foodarray2[randomizer],"content");
    })

    getphotos(foodarray3[randomizer], ".image3 img");
    document.querySelector(".image3 p").innerHTML = foodarray3[randomizer];
    document.querySelector(".image1 img").addEventListener("click",e=>{
        getnutrition(foodarray3[randomizer],"content");
    })
})