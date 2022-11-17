const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  // console.log(req.url)
  // res.write("<h1>hhello</h1>")
  // res.end()
//   fs.readFile("./index.html", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.write(data);
//       res.end();
//     }
//   });
let path="./views/"
switch (req.url) {
    case "/":
        path+="home.html"
        break;
        case "/aboutus":
            res.statusCode=301
            res.setHeader('Location','/about')
            break;
        case "/about":
            path+="about.html"
            break;
    default:
        res.statusCode=404
        path+="404.html"
        break;
}
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      res.write(data);
      res.end();
    }
  });

});

server.listen(3000, (err) =>
  err ? console.log(err) : console.log("server is listening")
);
