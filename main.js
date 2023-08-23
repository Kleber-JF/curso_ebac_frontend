$(document).ready(function(){
    fetch('https://api.github.com/users/Kleber-JF')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        const avatar = json.avatar_url;
        const twitter = json.twitter_username;
        const name = json.name;
        const repos = json.public_repos;
        const seguidores = json.followers;
        const seguindo = json.following;
        const siteGit = json.html_url;

        $('#nome').text(name);
        $('#avatar').attr('src', avatar);
        $('#twitter').text(`@${twitter}`);
        $('#repositorios').text(repos);
        $('#seguidores').text(seguidores);
        $('#seguindo').text(seguindo);
        $("#link-pessoal").attr('href', siteGit);
    })
})