const tempat = "C:\\Windows\\System32\\drivers\\etc\\hosts";

const fs = require('fs');
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

console.clear()
console.log("GTPS Launcher Made By Jesen N\n")
rl.question("Put IP: ", IP => {
    let tolol = `${IP} growtopia1.com\n${IP} growtopia2.com`
    let banget = ''

rl.question("Press Enter To Continue: ", function(number) {
    if (number === "")
    {
        console.clear()
        fs.writeFile(tempat, tolol, function(err) {
            if (err) throw err;
        })
    }

    rl.question("GTPS Launcher ON!\n\nPress Enter Again To Turn OFF: ", function(numbers) {
    if (numbers === "")
    {
        console.clear()
        fs.writeFile(tempat, banget, function (err) {
            if (err) throw err;
            console.log("GTPS Launcher OFF")
        });
    }
    else
    {
        console.log("")
        console.log("wrong number!")
    }
});
});
});