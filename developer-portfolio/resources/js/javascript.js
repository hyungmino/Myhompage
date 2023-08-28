const viewproject = document.getElementsByTagName('viewproject');

for(let i = 0; i < viewproject.length; i++) {

    viewproject[i].addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('.project' + (i + 1)).scrollIntoView(true);
    });
}