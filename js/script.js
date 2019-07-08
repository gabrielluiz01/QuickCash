function clicar(id){
    if(document.getElementById(id).style.display == 'flex'){
    document.getElementById(id).style.display = 'none'
    }else{
        document.getElementById(id).style.display = 'flex'
    }
    if (document.getElementById('card').style.display == 'flex'){
        document.getElementById('cash').style.display = 'none'
    }


    if (document.getElementById('account').style.display == 'flex'){
        document.getElementById('card').style.display = 'none'
    }
}