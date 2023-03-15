// Open a database
// Create objectstore
// Make transactions
let db;
//attempt to open a connection to the named database
let openRequest = indexedDB.open("myDataBase");

//events jab database open ho jaya ga 
openRequest.addEventListener("success", (e) => {
    console.log("DB Success");
    db = openRequest.result;
})
openRequest.addEventListener("error", (e) => {
    console.log("DB error");
})
openRequest.addEventListener("upgradeneeded", (e) => {
    console.log("DB upgraded and also for initial DB creation");
     // db to access kara
    db = openRequest.result;
     // creating obj store
    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });
})