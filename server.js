const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

var articleLists = [{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwZ2AmXcwAriD5G77QHxuFvxqJV6YZ_sCWg&usqp=CAU",
        "profile_bio": "Emily Stubbs In Fitness And In Healty"
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXwZ2AmXcwAriD5G77QHxuFvxqJV6YZ_sCWg&usqp=CAU",
        "time": "Nov 21.9 min read"
    }
},

{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCRtu9x86OcdwTZU9HeZx39XUL8VSYjy1bpw&usqp=CAU",
        "profile_bio": "Web Desing with html and css",
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
        "time": "Nov 21.9 min read"
    }
},

{
    "user": {
        "username": "",
        "profile_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0KF6cNZQJCzwTOhEiOlhCk12-HDUHX0QiQ&usqp=CAU",
        "profile_bio": "Agile Web Development With Rails 6"
    },
    "post": {
        "title": "I Exercised Twice a day for 75day-Here'sWhat Happened",
        "subtitle": "I felt invincible",
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0KF6cNZQJCzwTOhEiOlhCk12-HDUHX0QiQ&usqp=CAU",
        "time": "Nov 21.9 min read"
    }
}
];

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(articleLists));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});