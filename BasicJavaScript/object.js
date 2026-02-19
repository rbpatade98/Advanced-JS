const jsuser = {
    name : "Ram",
    age : 25,
    location : "Mumbai",
    email : "rbpatade@gmail.com"
}

console.log(jsuser.name,jsuser.age,jsuser.location,jsuser.email)
console.log(jsuser["name"],jsuser["age"],jsuser["location"],jsuser["email"])

//how to change value
jsuser.name = "nikhil"
console.log(jsuser.name)

//if you dont want to change object then you can freeze 

//Object.freeze(jsuser)

jsuser.age = 60

jsuser.grettings = function()
{
    console.log("hello")
}

console.log(jsuser.grettings())
console.log(jsuser.grettings)

jsuser.grettingstwo = function()
{
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsuser.grettingstwo())