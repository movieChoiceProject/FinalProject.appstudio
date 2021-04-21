let elbNetID = "elb22116"
let elbPw = "cozmox-5jibsI-sethyg"
let genreQuery = ""
let movies = ""
let genres = ""

GenreSelect.onshow = function() {
      genreQuery = "SELECT DISTINCT genre FROM movies;"
      selGenre.clear()
      sHost = "host=ormond.creighton.edu&user=" + elbNetID + "&pass=" + elbPw + "&database=375groupb1&query=" + genreQuery
      //NSB.MsgBox(sHost)
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)

      if (req1.status == 200) { //everything worked.
            genres = req1.responseText
            console.log(genres)
            console.log(genres.length)
            for (let y = 0; y < genres.length; y++) {
                  selGenre.addItem(genres[y])
            }
      } else {
            NSB.MsgBox(`Error: ${req.status}`)
      }
}

selGenre.onclick = function() {
      let chosenGenre = "Science Fiction"
      movies = "SELECT `title`, `yearProduced` FROM movies WHERE genre='" + chosenGenre + "';"
      sHost = "host=ormond.creighton.edu&user=" + elbNetID + "&pass=" + elbPw + "&database=375groupb1&query=" + movies
      req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", sHost)
      if (req1.status == 200) {
      console.log(req1.responseText)
            lblMovies.value = req1.responseText
      } else {
            NSB.MsgBox(`Error: ${req.status}`)
      }
}

btnLoginPage.onclick = function() {
      ChangeForm(Login)
}