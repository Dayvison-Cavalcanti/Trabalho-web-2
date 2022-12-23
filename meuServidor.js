const express = require('express');
const app = express();
const port = 8081;
const fs = require('fs');
const bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({extended:false})




app.get('/cadastrarMusica',(req,res)=>{
	
	var form = "<form action='/playlist' method='POST'>";
	

	form+= '<div style=" display: flex; justify-content: center; align-content: center; align-items: center; background-color: black;">';
	form+= '<div class="card" style="width: 25rem; margin-top: 1rem  ">';
	form+= '<img src="https://imgs.ativarsentidos.com.br/2018/11/musica_em_destaque.jpg" height: 45px" alt="...">';
	form+= '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">'
	'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"crossorigin="anonymous"></script>';

	form+="<label class='form-label'>Codigo: </label><input type='text' name='codigo' class='form-control'>";
	form+="<label class='form-label'>Musica: </label><input type='text' name='musica'class='form-control'>";
	form+="<label class='form-label'>Artista: </label><input type='text' name='artista'class='form-control'>";
	form+="<label class='form-label'>Ano de Lançamento: </label><input type='text' name='ano'class='form-control'>";
	form+="<label class='form-label'>Categoria: </label><input type='text' name='categoria'class='form-control'>";
	

	form+="<div style='display: flex; justify-content: space-between; padding: 0.7rem '>";
	form+="<button class='btn btn-primary' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'>Cadastrar</button></form>";
	form+="<button class='btn btn-primary' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'> <a href='http://127.0.0.1:5500/index.html' style='color: white; text-decoration: none;'>Voltar</a></button>";
	form+="</div>";
	form+="</div>";
	form+="</div>";
	
	res.send(form);

});

app.get('/buscarMusica',(req,res)=>{
	var form = "<form action='/playlist' method='GET'>";
	form+= '<div style=" display: flex; justify-content: center; align-content: center; align-items: center; background-color: black; ">';
	form+= '<div class="card" style="width: 25rem;  ">';
	form+= '<img src="https://imgs.ativarsentidos.com.br/2018/11/musica_em_destaque.jpg" height: 45px" alt="...">';
	form+= '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">'
	'<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"crossorigin="anonymous"></script>';

	form+="<label class='form-label'>Codigo: </label><input type='text' style='width: 23rem; margin-left: 1rem' name='codigo' class='form-control'>";
	form+="<label class='form-label'>Musica: </label><input type='text' style='width: 23rem; margin-left: 1rem' name='musica'class='form-control'>";
	form+="<label class='form-label'>Artista: </label><input type='text' style='width: 23rem; margin-left: 1rem' name='artista'class='form-control'>";
	form+="<label class='form-label'>Ano de Lançamento: </label><input type='text' style='width: 23rem; margin-left: 1rem' name='ano'class='form-control'>";
	form+="<label class='form-label'>Categoria: </label><input type='text' style='width: 23rem; margin-left: 1rem' name='categoria'class='form-control'>";
	
	
	form+="<div style='display: flex; justify-content: space-between; padding: 6px '>";
	form+="<button class='btn btn-primary' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'>Procurar</button></form>";
	form+="<button class='btn btn-primary' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;'> <a href='http://127.0.0.1:5500/index.html' style='color: white; text-decoration: none;'>Voltar</a></button>";
	form+="</div>";
	form+="</div>";
	form+="</div>";
	
	res.send(form);
});

app.post('/playlist', urlEncodedParser, (req,res)=>{
	
	var codigo = req.body.codigo;
	var musica = req.body.musica;
	var artista = req.body.artista;
	var ano = req.body.ano;
	var categoria = req.body.categoria;
	
	
	var novaMusica = {codigo:codigo, musica:musica, artista:artista, ano:ano, categoria:categoria};
	
	fs.readFile('meu_BD_musica.json','utf8',(erro, texto)=>{
		if (erro)
			throw "Deu algum erro: "+erro;
		
		var meu_BD_musica = JSON.parse(texto);
		
		meu_BD_musica.playlist.push(novaMusica);
		
		var meu_BD_musicaString = JSON.stringify(meu_BD_musica);
	
	
		fs.writeFile('meu_BD_musica.json',meu_BD_musicaString,(erro)=>{
			if (erro){
				throw "Deu algum erro: "+erro;
			}
			else{
				res.send("<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4' crossorigin='anonymous'></script><div>Musica Cadastrada Com Sucesso.</div><br><br><button class='btn btn-primary' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem; '><a href='http://127.0.0.1:8081/cadastrarMusica' style='color: white; text-decoration: none;'>Voltar</a></button>");
			}
		});
		
	});
	
});

app.get('/playlist', (req,res)=>{
	
	var codigo = req.query.codigo;
	var musica = req.query.musica;
	var artista = req.query.artista;
	var ano = req.query.ano;
	var categoria = req.query.categoria;
	
	//console.log(req.query);
		
	fs.readFile('meu_BD_musica.json','utf8',(erro, texto)=>{
		if (erro)
			throw "Deu algum erro: "+erro;
		var meu_BD_musica = JSON.parse(texto);
		
		console.log(meu_BD_musica);
		
		var encontrado = meu_BD_musica.playlist.filter(p => 
			(parseInt(p.codigo) == codigo || 
			p.musica.toLowerCase() == musica.toLowerCase() || 
			p.artista.toLowerCase() == artista.toLowerCase() || 
			p.ano == ano || 
			p.categoria.toLowerCase() == categoria.toLowerCase()));
     
           console.log(encontrado)

		var exibicao = "";
		
		for(var i=0; i < encontrado.length;i++){

			exibicao+="<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css' rel='stylesheet'integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65' crossorigin='anonymous'><script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js' integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4' crossorigin='anonymous'></script>";
			exibicao+= '<div class="card" style="display: flex; justify-content: center; align-content: center; align-items: center; background-color: black; width: 100%;">';
			exibicao+= '<div class="card" style="width: 20rem; margin-top:1rem">';
			exibicao+= '<div class="card-body">'+'<h5 class="card-title"  style="background-color: black; color: white">Codigo</h5>'+'<ul class="list-group list-group-flush"></ul>'+'<li class="list-group-item" style="border: solid; text-align: center; background-color: black; color: white">'+encontrado[i].codigo+'</li></div>';
			exibicao+= '<div class="card-body">'+'<h5 class="card-title" style="background-color: black; color: white;">Musica</h5>'+'<ul class="list-group list-group-flush"></ul>'+'<li class="list-group-item" style="border: solid; text-align: center; background-color: black; color: white">'+encontrado[i].musica+'</li></div>';
			exibicao+= '<div class="card-body">'+'<h5 class="card-title" style="background-color: black; color: white;">Artista</h5>'+'<ul class="list-group list-group-flush"></ul>'+'<li class="list-group-item" style="border: solid; text-align: center; background-color: black; color: white">'+encontrado[i].artista+'</li></div>';
			exibicao+= '<div class="card-body">'+'<h5 class="card-title" style="background-color: black; color: white;">Ano de Lançamento</h5>'+'<ul class="list-group list-group-flush"></ul>'+'<li class="list-group-item" style="border: solid; text-align: center; background-color: black; color: white">'+encontrado[i].ano+'</li></div>';
			exibicao+= '<div class="card-body">'+'<h5 class="card-title" style="background-color: black; color: white;">Categoria</h5>'+'<ul class="list-group list-group-flush"></ul>'+'<li class="list-group-item" style="border: solid; text-align: center; background-color: black; color: white">'+encontrado[i].categoria+'</li></div>';
		
			exibicao+= "</div><br>";
		}
		
		res.send(exibicao);
	})
});


app.listen(port, () => {
	console.log(`Esta aplicação está escutando a
	porta ${port}`)
});