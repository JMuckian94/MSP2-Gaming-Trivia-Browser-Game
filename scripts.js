var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        document.getElementById('data').innerHTML = this.responseText;
    }
};

xhr.open("GET", "https://opentdb.com/api.php?amount=20&category=15");

xhr.send;