{"filter":false,"title":"app.js","tooltip":"/app.js","undoManager":{"mark":1,"position":1,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":33}},"text":"var express = require(\"express\"),"},{"action":"insertText","range":{"start":{"row":0,"column":33},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":8,"column":0}},"lines":["    app = express();","app.use(express.static('./public'));","app.listen(process.env.PORT, process.env.IP);","","app.get('/', function(req, res) {","    // res.send(\"hello\");","     res.render(\"home.jade\", {});"]},{"action":"insertText","range":{"start":{"row":8,"column":0},"end":{"row":8,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":6,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":["    // res.send(\"hello\");"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":0},"end":{"row":6,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1411466195426,"hash":"c17b34fd1d4e7e2a3ae4161ca68507c8128a7efa"}