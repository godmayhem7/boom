function search(){
    let filter = document.getElementById("searchbar").value.toUpperCase();

    let item = document.querySelectorAll("section");

    let l = document.getElementsByTagName("h3","");

    for (var i = 0;i<=l.length;i++){
        let a = item[i].getElementsByTagName("h3")[0];

        let value = a.innerHTML || a.innerText  || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1){
            item[i].style.display="";
        }
        else{
            item[i].style.display="none";
            document.querySelector("h1").innerText="results for " + filter
        }

    }
}
