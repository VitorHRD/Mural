
document.addEventListener('DOMContentLoaded',()=>{
    updadePosts();
})
function updadePosts(){
 fetch("http://localhost:3000/api/all").then(res=>{
          return res.json()
    }).then(json=>{
        let postElements = ""
        
        let posts= JSON.parse(json);

        posts.forEach(post => {
            let postElement = `<div id="post">
            <div id="${post.id}" class="card mb-4">
                <div class="card-header">
                    <div class="card-title  cartas ">${post.title}</div>
                    <button class = "btn btn-danger float-end" onclick="deleteCard('${post.id}')" >Deletar</button>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.description}</div>
                </div>
            </div>
        </div>
    </div>`
      postElements+=postElement
        });
      document.getElementById("posts").innerHTML = postElements;
    })
}

    


function newPost(){
      let title = document.getElementById("title").value;
      let description = document.getElementById("desc").value;
      
      
      let post ={title , description};
      const options ={method:"POST",
                     headers: new Headers({'content-type':'application/json'}),
                     body:JSON.stringify(post)}
                     if(title && description != "" ){
      fetch("http://localhost:3000/api/new",options).then(res=>{

          updadePosts();
      })
    }
}
function deleteCard(event) {
   console.log(event)
    let id = {id:event}
    
    
    const options ={method:"Delete",
    headers: new Headers({'content-type':'application/json'}),
    body:JSON.stringify(id)}
fetch("http://localhost:3000/api/delete",options).then(res=>{

updadePosts();
})
 
    
}