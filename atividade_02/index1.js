var art = 'tie'
var mus = 'noite'

fetch('https://api.vagalume.com.br/search.php?art='+art+'&'+'mus='+mus+'&apikey={key}')
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => {
        console.log(json)
       
        const div2 = document.querySelector('#div2')
        const nomeArt = document.createElement('h2')
        const nomeMusica = document.createElement('h2')
        const musica = document.createElement('h4')

        nomeArt.innerText = 'Nome do Artista: '+json.art.name
        div2.appendChild(nomeArt)

        nomeMusica.innerText = 'Nome da Musica: '+json.mus[0].name
        div2.appendChild(nomeMusica)

        musica.innerText = json.mus[0].text
        div2.appendChild(musica)
    })    //imprimir dados no console
    .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch


