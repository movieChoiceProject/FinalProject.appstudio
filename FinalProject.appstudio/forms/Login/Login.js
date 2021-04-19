
let req1 = ""
let query = ""
let results = ""
let pw = "gorams21"
let allUsers = [ ]
let username = "1"
let netID = "cjf07630"
let sHost = ""

query = "SELECT net_id FROM user"

sHost = "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=Group B1&query=" + query 
//NSB.MsgBox(sHost)

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)
    

    if (req1.status == 200) { //everything worked.
   // results = JSON.parse(req1.responseText)
      console.log(req1.responseText)
    allUsers = results
    console.log(allUsers)

username = txtUsername.value
pw = txtPassword.value

    }
else {
    NSB.MsgBox(`Error: ${req.status}`)
    }

btnLogin.onclick=function(){
//ChangeForm(NewUserForm)
}


btnHome1.onclick=function(){
    ChangeForm(HomePage)
}

/*
btnLogin.onclick=function(){

query = "SELECT net_id FROM user"

sHost = "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=Group B1&query=" + query 
//NSB.MsgBox(sHost)

req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)
    

    if (req1.status == 200) { //everything worked.
   // results = JSON.parse(req1.responseText)
      console.log(req1.responseText)
    allUsers = results
    console.log(allUsers)

username = txtUsername.value
pw = txtPassword.value

    }
else {
    NSB.MsgBox(`Error: ${req.status}`)
    }
//ChangeForm(NewUserForm)
}
*/
