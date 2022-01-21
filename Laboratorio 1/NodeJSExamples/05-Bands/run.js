let band_list = require("./bands")

for(let genre in band_list){
    // console.log(genre)
    // console.log(band_list[genre])
    console.log(`A ${genre} band is ${band_list[genre]}`)
}