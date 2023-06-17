const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get("/", function (req, res){
   const items = [
    { title: "D",
        message: "Desenvolver aplicações"
    },
    { title: "E",
        message: "EJS para renderizar html"
    },
    { title: "M",
        message: "Muito fácil"
    },
    { title: "A",
        message: "Assim"
    },
    { title: "I",
        message: "Install EJS"
    },
    { title: "S",
    message: "Syntax simple"
}   ]
    res.render("pages/index", {
        qualities: items,
    })
})

app.get("/sobre", function (req, res){
    res.render("pages/about")
})

app.listen(8080);
console.log("Rodando")