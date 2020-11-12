module.exports = ({types})=>({
    visitor:{
        Decorator(path){
            console.log(path.node)
        }
    }
})