const imageslider = document.querySelector("#imageSlider")
const nextBtn = document.querySelector("#nextButton")
const prevBtn = document.querySelector("#prevButton")
const images = [
    "https://img.freepik.com/free-photo/breathtaking-view-cesky-krumlov-city-south-bohemia-region-czech-republic-europe_181624-43081.jpg?size=626&ext=jpg&ga=GA1.1.99715196.1705257954&semt=sph",
    "https://img.freepik.com/free-photo/beautiful-view-empire-states-skyscrapers-new-york-city_181624-6295.jpg?size=626&ext=jpg&ga=GA1.1.99715196.1705257954&semt=sph",
    "https://img.freepik.com/free-photo/skyline-downtown-new-york-new-york-usa_268835-773.jpg?size=626&ext=jpg&ga=GA1.2.99715196.1705257954&semt=sph",
    "https://img.freepik.com/free-photo/view-new-york-city-night-time_53876-138055.jpg?size=626&ext=jpg&ga=GA1.2.99715196.1705257954&semt=sph"
]
let indeximage = 0
function currentimage (){
    imageslider.src = images[indeximage]
}
// handle next button
nextBtn.addEventListener("click", function(){
    indeximage++
    if(indeximage > images.length-1){
        indeximage = 0
    }
    currentimage()
})

// handle prev button
prevBtn.addEventListener("click", function(){
    indeximage--
    if(indeximage<0){
        indeximage = 0
    }
    currentimage()
})
nextBtn.addEventListener("mouseover", function(){
    nextBtn.style.backgroundColor = "green"
})
nextBtn.addEventListener("mouseout", function(){
    nextBtn.style.backgroundColor = "pink"
})
prevBtn.addEventListener("mouseover", function(){
    prevBtn.style.backgroundColor = "green"
})
prevBtn.addEventListener("mouseout", function(){
    prevBtn.style.backgroundColor = "pink"
})




currentimage()