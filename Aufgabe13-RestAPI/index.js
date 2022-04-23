 const body = document.querySelector('body')

 const get = async () => {
     const response = await fetch("https://randomuser.me/api/")
     console.log(response);
     const data = await response.json()

     console.log(data.results[0]);
     //mitarbeiter.innerHTML = `${data.results[0].name.first}`

     body.innerHTML = `
    <h1 class="text-danger">Mitarbeiter Liste<h1/>
    <div class= "container">
     <div class="card" style="width: 25rem;">
       <img src="${data.results[0].picture.large}" class="card-img-top" alt="...">
      <div class="card-body bg-success text-white">
        <h5 class="card-title fs-3"><u>${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}<u/></h5>
        <p class="card-text fs-6"> Gender: ${data.results[0].gender} 
        <br>
        Email: ${data.results[0].email} 
        <br> 
        Phone: ${data.results[0].phone}</p>
       </div>
     </div>
    <div/>`
  
 }

 get();