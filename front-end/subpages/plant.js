function getData(){
    fetch('http://localhost:8080/admin/plant/AllPlants')
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res)
        Display(res);
    })
    .catch((eror)=>{
        console.log(eror)
    })
}
getData();
function Display(res){
    let bag='';
    res.forEach(element => {
        bag += `<div class="container">
        <div class="row">
          <div class="col-12 col-sm-8 col-md-6 col-lg-4">
            <div class="card">
              <img class="card-img" src="https://www.naturenursery.in/wp-content/uploads/2020/01/5-1.jpg" alt="Vans">
              <div class="card-img-overlay d-flex justify-content-end">
                <a href="#" class="card-link text-danger like">
                  <i class="fas fa-heart"></i>
                </a>
              </div>
              <div class="card-body">
                <h4 class="card-title">${element.commonName}</h4>
               
        
                <div class="options d-flex flex-fill">
                   
                </div>
                <div class="buy d-flex justify-content-between align-items-center">
                  <div class="price text-success"><h5 class="mt-4">₹${element.plantCost}</h5></div>
                   <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>`;
    });
    document.getElementById("PlantContainer").innerHTML=bag;

}


