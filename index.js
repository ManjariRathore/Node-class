const fs = require('fs');


const http = require("http");

const data = fs.readFileSync("index.html", "utf-8");
console.log(data);

const port = 3000;
const host = 'localhost' ;

const server = http.createServer((req,res)=>{
  
  if(req.url === '/about'){
    res.write(data);
  }
  else if (req.url === '/login') {
    res.setHeader("Content-Type","text/html");
    res.write("<html><head><title>node js class</title></head><body>");
    res.write("<h1>Hello, Login!</h1>");
    res.write("</body></html>");


  } else {
    res.setHeader("Content-Type","text/html");
    res.write("<html><head><title>node js class</title></head><body>");
    res.write("<h1>Hello, World!</h1>");
    res.write("</body></html>");
    
  }
  res.end();
  
});
server.listen(port, host, ()=>{
  console.log(`server is listening on http//${host}:${port}`);
});

// const data = fs.readFileSync("file.txt");

// console.log(""+data);

// //rewrite on file
// fs.writeFile("sample3.txt" , "Hello Gays! ", "utf-8" , (err)=>{
//   console.log("file modified");
// });

// //append at the end of the file 
// fs.appendFileSync("sample3.txt" , "class is going on");

// // dir formed 
// fs.mkdir("dir1" , (err) =>{
//   if(err){
//     console.log(err);
//   }
//   console.log("dir formed");
// })

// //removing dir
// fs.rmdir("dir1", (err) => { 
//   if(err){
//     console.log(err);
//   }
//   console.log("Folder Deleted!"); 
// })
 
// // renaming file
// fs.rename("sample3.txt" , "file.txt" , (err)=>{
//   if(err){
//     console.log(err);
//   }
//   console.log("file has been renamed");
// })

const path = require("path");
const p = '/Users/manjari/Documents/Node/';
// //the parent folder of the file
const dirname = path.dirname(p);
// //extension name
const extension = path.extname(p);
// //gets the filename 
const base = path.basename(p);

// console.log("dirname:"+dirname);
// console.log("extension:"+extension);

// fs.writeFile("new-file.txt" ,"",(err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log('File created successfully!');
// });

// const dest = path.join(__dirname, 'dir')
// console.log("dest:" +dest)
// fs.copyFile(p, dest+'file.txt', (err) => {
//   if (err) {
//       console.log("Error Found:", err);
//   }
//   else {
//       console.log("\nFile Contents of copied_file:",fs.readFileSync("new-file.txt", "utf8"));
//   }
// });

const sourceFile = path.join(__dirname, 'file.txt');
const destinationDir = path.join(__dirname, 'dir');
const destinationFile = path.join(destinationDir, 'newFile.txt')

// // Copy the file
// fs.copyFile(sourceFile, destinationFile, (err) => {
//   if (err) throw err;
//   console.log('File was copied to destination');
// });