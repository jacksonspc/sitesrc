const artlist = {
	"Blog":"blog/blog.html", 
	"Emacs":"emacs/emacs.html",
	"Programming":"prog/prog.html", 
	"Linux":"os/linux.html", 
	"Etc":"more.html",
}
for (let i = 0; i < Object.keys(artlist).length; i++)
{
	
        let list = document.createElement('li'); 
	let link = document.createElement("a");
	link.innerText = Object.keys(artlist)[i];
	link.href = artlist[Object.keys(artlist)[i]];
	list.appendChild(link);
        document.querySelector('#blogsearchlist').appendChild(list);

}

function searchQuer() {
        let searchquer = document.getElementById('searchBarInput');
        let upperquer = searchquer.value.toUpperCase();
        let arts = document.getElementById("blogsearchlist");
        let artsToCheck = arts.getElementsByTagName('li');
        for (i = 0; i < artsToCheck.length; i++){
                let indextext = artsToCheck[i].textContent;
                if (indextext.toUpperCase().indexOf(upperquer) > -1) {
                        artsToCheck[i].style.display = "";
                }
                else
                {
                        artsToCheck[i].style.display = "none";
                }
	}
}


