$(document).ready(function() {
    drawPicture(data)
})

function filteredData(){
    let filteredNames = [];

    $('input').each(function(elem) {
        let currentElem = $('input')[elem];
        if(currentElem.checked === true) {
            filteredNames.push(currentElem.value)
        }
    })

    let filter = data.filter(function(item, index){
        if(filteredNames.includes(item.name)) {
            return true
        } else {
            return false
        }
    })
    
    if(filter.length > 0) {
        drawPicture(filter)
    } else {
        drawPicture(data)
    }
}

function filteredColor(){
    console.log("shakalad");
}


function drawPicture(arr){
    let formatted = '';

    arr.forEach(function(item, index) {
        formatted += `
        <div class="card" style="width: 18rem;">
          <img src=${item.imgUrl} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Kirish</a>
          </div>
        </div>`
        $('#myProducts').empty();
        $('#myProducts').append(formatted)
    })
}


