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

var allModels = [{modelName: 'Future Vehicle 9', modelURL: 'https://pitchk.github.io/land-hover-21/fv9.jpg', difficulty: 5, tags: ['Future vehicle', 'Recreational vehicle', 'Hover'], description: 'A twist on the LandHover\'21. Now featuring two large back jets! Looks even faster!', webLink: '/air-point-21'}, {modelName: 'Future Vehicle 1', modelURL: 'https://pitchk.github.io/land-hover-21/fv1.jpg', difficulty: 6.5, tags: ['Air', 'Future vehicle', 'Recreational vehicle'], description: 'The very first model I came up with. Features a single upright tail jet and two engines that propel the vehicle forward.', webLink: '/hexawing'}];



for (var i = 0; i < allModels.length; i++){
    var d = document.createElement('div');
    d.className = 'outer';
    document.getElementById('allModels').appendChild(d);

    var image = document.createElement('img');
    image.setAttribute('src', allModels[i].modelURL);
    image.className = 'similarImage';
    document.getElementsByClassName('outer')[i].appendChild(image);
    
    var innerDiv = document.createElement('div');
    innerDiv.className = 'innerDiv';
    document.getElementsByClassName('outer')[i].appendChild(innerDiv);

    var title = document.createElement('p');
    title.className = 'modelTitle';
    title.innerHTML = allModels[i].modelName;
    document.getElementsByClassName('innerDiv')[i].appendChild(title);

    var subtitle = document.createElement('p');
    subtitle.className = 'modelSubtitle';
    subtitle.innerHTML = allModels[i].description;
    document.getElementsByClassName('innerDiv')[i].appendChild(subtitle);

    //difficulty display
    var difficulty = document.createElement('div');
    difficulty.className = 'difficultyDiv';
    document.getElementsByClassName('innerDiv')[i].appendChild(difficulty);

    var word = document.createElement('p');
    word.className = 'difficultyWord';
    word.innerHTML = 'Difficulty: ';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(word);

    var num = document.createElement('p');
    num.className = 'difficultyDisplay2';
    num.innerHTML = allModels[i].difficulty + '/10';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(num);

    var time = document.createElement('p');
    time.className = 'time';
    time.innerHTML = ' | ⌛ Estimated time: 10-12 min';
    document.getElementsByClassName('difficultyDiv')[i].appendChild(time);

    //bottom two buttons

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Instructions');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks2';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    var link = document.createElement('a');
    var innerLink = document.createTextNode('Watch tutorial');
    link.appendChild(innerLink);
    link.setAttribute('href', allModels[i].webLink);
    link.setAttribute('target', '_blank');
    link.className = 'bottomlinks2';
    document.getElementsByClassName('innerDiv')[i].appendChild(link);

    
}

for (var i = 0; i < document.getElementsByClassName('difficultyDisplay2').length; i++){
    document.getElementsByClassName('difficultyDisplay2')[i].style.background = 'linear-gradient(to right, #42aaf5 0%, #42aaf5 ' + allModels[i].difficulty*10 + '%, lightgrey ' + allModels[i].difficulty*10 +'%, lightgrey 100%)';
}