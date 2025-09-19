const url = `http://localhost:3000`;

async function fetchUserDetail(){
    const response = await fetch(url + '/details');
    const json = await response.json();
    console.log(json); 
    json.users.forEach(element => {
        console.log(element); 
    });
    
}

fetchUserDetail(); 




