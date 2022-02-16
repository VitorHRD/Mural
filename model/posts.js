module.exports = {

        posts : [
        {id:"bemvindo",
         title:"Bem vindo ao Mural !!",
         description:"Aqui você pode salvar suas ideias, seus compromissos e etc ."},
    ],
    getAll(){
        return this.posts
    },
    newPosts(title,description){
        this.posts.push({id:generateId(),title,description})

    },
    deletePost(id){
        this.posts = this.posts.filter( obj => obj.id != id)
    }

}
function generateId(){
    return Math.random().toString(36).substring(2)
}