function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = '2px solid black';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}

document.getElementById('menu').addEventListener('click', show);

