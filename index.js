const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	let respath = __dirname + '/public/index.html';
	res.sendFile(respath);
})

app.get('/templates', (req, res) => {
	let respath = __dirname + '/public/html_template.html';
	res.sendFile(respath);
})

app.get('/imports', (req, res) => {
	let respath = __dirname + '/public/html_import.html';
	res.sendFile(respath);
})

app.get('/modules', (req, res) => {
	let respath = __dirname + '/public/html_module.html';
	res.sendFile(respath);
})

app.get('/custom_elements_simple', (req, res) => {
	let respath = __dirname + '/public/html_custom_element_simple.html';
	res.sendFile(respath);
})

app.get('/custom_elements', (req, res) => {
	let respath = __dirname + '/public/html_custom_element.html';
	res.sendFile(respath);
})

app.get('/simplecvc', (req, res) => {
	let respath = __dirname + '/public/basiccvc.html';
	res.sendFile(respath);
})

app.get('/customizedlist', (req, res) => {
	let respath = __dirname + '/public/customizedlist.html';
	res.sendFile(respath);
})

app.get('/lifecycles', (req, res) => {
	let respath = __dirname + '/public/lifecycles.html';
	res.sendFile(respath);
})

app.get('/cardcomponent', (req, res) => {
	let respath = __dirname + '/public/cardcomponent.html';
	res.sendFile(respath);
})

app.listen(port, () => console.log(`Custom element app listening on port ${port}!`))
