var http=require('http');
http.createServer(router).listen(8087);
function router(req,res){
	res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write('hello world!');
        res.end();
}
console.log('hello');
