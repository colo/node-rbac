// require("mootools").apply(GLOBAL);
var Moo = require("mootools");

var fs = require('fs'),
    path = require('path'),
    packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '/../package.json')));

exports.VERSION = packageJSON.version.split('.');


var Subject = require('./lib/rbac/subject').Subject;
var Session = require('./lib/rbac/session').Session;
var Role = require('./lib/rbac/role').Role;
var Resource = require('./lib/rbac/resource').Resource;
var Permission = require('./lib/rbac/permission').Permission;
var Operation = require('./lib/rbac/operation').Operation;
var DSD = require('./lib/rbac/constrain/dsd').DSD;
var RC = require('./lib/rbac/constrain/rc').RC;
var SSD = require('./lib/rbac/constrain/ssd').SSD;
var Rbac = require('./lib/rbac/rbac').Rbac; 
 

exports.Subject = Subject;
exports.Session = Session;
exports.Role = Role;
exports.Resource = Resource;
exports.Permission = Permission;
exports.Operation = Operation;
exports.DSD = DSD;
exports.RC = RC;
exports.SSD = SSD;
exports.Rbac = Rbac;
