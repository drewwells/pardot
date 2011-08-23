var results = document.getElementById('results');
var input = document.getElementsByTagName('input')[0];

input.oninput = function(){
    results.innerHTML = fibLoop( this.value ).join( ', ' );
};