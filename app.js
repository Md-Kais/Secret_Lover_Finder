document.getElementById('submitted').addEventListener('click',()=>{
    console.log('click');
    // 
    // console.log(x.innerHTML());
    if (document.getElementById("exampleInputName1").value.length==0){ 
        document.getElementById("exampleInputName1").value="Rohit";
    }
    if (document.getElementById("exampleInputLover1").value.length == 0) {
        document.getElementById("exampleInputLover1").value = "Lover";
    }
    document.getElementById('user').textContent = document.getElementById("exampleInputName1").value;
    document.getElementById('followers').textContent = document.getElementById("exampleInputLover1").value;
    document.getElementById('main').classList.remove('d-none');
    console.log(document.getElementById('main'));
    document.getElementById('Followers').classList.remove('d-none');
    console.log(document.getElementById('followers'));
    const x = document.getElementById('form').className="d-none";


})

async function main() {
    document.getElementById('Followers').classList.remove('small-middle');
    let requestNumber = Math.floor(Math.random() *1000)+1;
    let url = `https://randomuser.me/api/?results=${requestNumber}`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        process(json);
    } else {
        alert("HTTP-error: " + response.status);
    }
 
 var id1=0;
    function process(data) {
        const pre=document.getElementById('pre');
        pre.classList.remove('d-none');
        const nex = document.getElementById('nex');
        nex.classList.remove('d-none');
        function change(id) {
            id1=id;
            const member =data.results.length;
            const result = data.results[id];
          
            const {
                name: { first },
                name: { last },
                picture: { large },
                location: { city },
                location: { country },
                
                phone,
                email
            } = data.results[id];
            streetName = result.location.street.name;
            streetNumber = result.location.street.number;
            dob=result.dob.date;
            birthdate=new Date(dob);
            let dateBirth = birthdate.getDate() + '/' + (birthdate.getMonth() + 1) + '/' + birthdate.getFullYear() ;
            // birthdate.getFullYear()+'-'+(birthdate.getMonth()+1)+'-'+date.getDate();
            document.getElementById('Followers').innerHTML = ` <div class="container">
              
                <div class="row max-height ">
               
                   
                    <img src="${large}" class="card-img-top" alt="" id="photo" style="margin-top: 5vh;">
                  
                  
                    <div class="card-body">

                    <div class="person-info">
                    <!-- single input -->
                      <p id="up-position" class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-address-book"></i></span><span class="text-info"> Position : </span><span id="email"
                        class="text-lowercase ml-2 badge badge-secondary single-info">${id + 1}/${member}</span></p>
                
                    <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-user"></i></span><span class="text-info"> name :</span><span id="${first}"
                        class="text-uppercase ml-2 badge badge-secondary single-info">${first} ${last}</span></p>
                    <!-- end of single input -->
                    <!-- single input -->
                   
                    <!-- end of single input -->
                    <!-- single input -->
                    <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-street-view"></i></span><span class="text-info"> location :</span>
                        <span id="street" class="text-uppercase ml-2 badge badge-secondary single-info">${streetNumber}-${streetName},${city}</span></p>
                    <!-- end of single input -->
                     <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="far fa-flag"></i></span><span class="text-info"> Country : </span><span id="last"
                        class="text-uppercase ml-2 badge badge-secondary single-info">${country}</span></p>
                    <!-- single input -->
                    <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-birthday-cake"></i></span><span class="text-info badge badge-light"> BirthDate :</span><span 
                        class="text-uppercase ml-2 badge badge-secondary single-info">${dateBirth}</span></p>
                    <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-phone"></i></span><span class="text-info"> phone :</span><span id="phone"
                        class="text-uppercase ml-2 badge badge-secondary single-info">${phone}</span></p>
                    <!-- end of single input -->
                    <!-- single input -->
                   
                    <p class="text-capitalize"><span class="mr-3 text-light bg-dark"><i class="fas fa-envelope"></i></span><span class="text-info"> email : </span><span id="email"
                        class="text-lowercase ml-2 badge badge-secondary single-info">${email}</span></p>
                    <!-- end of single input -->
                    
                    <br>
                    </div>
                    <a id="${id}" class="btn btn-info btn-sm " href="#" role="button">Hack his Email? </a>
                   
                    </div>
                </div>
                </div>
                </div>

              <br>
   
                `;
            
            document.getElementById(id).addEventListener('click', () => {
            
                let username = data.results[id].login.username;
                let password = data.results[id].login.password;
                alert(`
            His Username Is : ${username}
            His Password Is : ${password}
            `)
            })
        }
        change(0);
       

        console.log(data.results[0].login.password);
        let next = 1;
        let previous = data.results.length;
        document.getElementById('next').addEventListener('click', function Next() {
            next += 1; previous = next;
            if (next + 1 > (data.results.length)) {
                next = 0;

            }
            change(next);
            //console.log(typeof(next));
            console.log(next, previous);
            console.log(data.results[next]);
        })
        document.getElementById('previous').addEventListener('click', function Previous() {
            previous -= 1;
            next = previous;
            console.log(previous, next);
            if (previous < 0) {

                previous = data.results.length - 1;
            }
            change(previous);
            //console.log(typeof(next));
            console.log(data.results[previous]);
        })

    }
}
