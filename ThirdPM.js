const uuid=require("uuid")

const users=[
    {
        id:uuid.v4(),
        name :"zahra"
    },
    {
        id:uuid.v4(),
        name :"Amin"
    },
    {
        id:uuid.v4(),
        name :"Amara"
    }
]
// console.log(users)
// console.log(
//     users.find(user=>user.name=="zahra")
// )

module.exports=users
// console.log(module)