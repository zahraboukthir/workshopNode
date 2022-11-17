
const getuser=(arr,searchedname)=>{
if (arr.find(user=>user.name==searchedname)) {
    return arr.find(user=>user.name==searchedname)
} else {
    return "no user"
}

}
module.exports={getuser}