window.addEventListener('resize', function(event){
    var larguraTela = window.innerWidth;
    if(larguraTela < 600) {
        document.body.style.backgroundColor = 'rgb(204, 146, 136)';
    } else {
        document.body.style.backgroundColor = 'rgb(136, 204, 146)';
    }
});
