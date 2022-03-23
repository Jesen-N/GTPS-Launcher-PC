//Made By Jesen N#9071

const place = "C:\\Windows\\System32\\drivers\\etc\\hosts";
const fs = require("fs");
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

//setup here
var ip = "ip gtps";
let nameserver = "your name gtps";

let on = `
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost

${ip} growtopia1.com
${ip} growtopia2.com
`;

let off = `
# Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost
`;
var loop = function () {
	rl.question("Press enter to turn on: ", (text) => {
		if (text == "") {
			main()
		} else {
			loop()
		}
	})
}

console.clear();
var main = function () {
  fs.writeFile(place, on, function (err) {
    if (err) {
      console.log(
        "ERROR: Please open the application/command prompt with administrator!!"
      );
    } else {
      console.clear();
      console.log(`${nameserver} Launcher Is ON!`);
      rl.question("Press enter to turn off: ", function (enter) {
        if (enter === "") {
          console.clear();
          fs.writeFile(place, off, function (err) {
            if (err) {
              console.log(
                "ERROR: Please open the application/command prompt with administrator!!"
              );
            } else {
              console.log(`${nameserver} Launcher Is OFF`);
              loop()
            }
          });
        }
      });
    }
  });
}

main()
