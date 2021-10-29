// Promise : TO complete js asap
// - resolve
// - reject 
// - pending



function func1(){
    return new Promise(function(resolve , reject){
        setTimeout(() => {
            const error = true;
            if (!error) {
              console.log("Function: Your Promise is resolved");
              resolve();
            } else {
              console.log("Function: Your Promise is not resolved");
              reject();
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Person: Thnx for resolving")
}).catch(function(error){
    console.log("Person: Bad work buddy" + " " + error)
})
