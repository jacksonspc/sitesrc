const artlist = {
	"Window Manager/Desktop Environments": {
		"DWM": "sw/dwm.html",
		"sway": "sw/sway.html",
		"KDE Plasma": "sw/plasma.html",
		"Other Window Managers": "sw/wmetc.html"
	},
	"Editors": {
		"Emacs": "emacs/emacs.html",
		"Vim": "sw/vim.html",
		"VSCode": "sw/vs.html",
		"Nano": "sw/nano.html"
	},
	"Image Tool": {
		"GIMP": "sw/gimp.html",
		"sxiv (Screenshot)": "sw/sxiv.html",
		"feh (Set wallpapers and view images)": "sw/feh.html",
		"Grimshot(Best screenshot util)": "sw/grimshot.html"
	},
	"Video Tool": {
		"Kdenlive (Editor)": "sw/kdenlive.html",
		"Pitivi (Editor in GTK)": "sw/pit.html",
		"Peek (Gif maker": "sw/peek.html"
	},
	"Terminal Emulator": {
		"Alacritty": "sw/alacritty.html",
		"St": "sw/st.html"
	},
	"Shell": {
		"Bash": "sw/bash.html",
		"Zsh": "sw/zsh.html",
		"Fish": "sw/fish.html",
		"Powershell": "sw/ps1.html"
	}

};


for (let i = 0; i < Object.keys(artlist).length; i++) {

	let list = document.createElement('li');
	let nested = document.createElement('ul');

	nested.class = "nested";
	let citer = Object.keys(artlist)[i];
	let expandlist = Object.keys(artlist[citer]);
	nested.id = "Expand" + Object.keys(artlist)[i];
	nested.classList.add("JackExpandNode");
	for (let si = 0; si < expandlist.length; si++) {
		let nestedli = document.createElement('li');
		nestedli.innerText = expandlist[si];
		nested.appendChild(nestedli);
	}
	list.innerText = Object.keys(artlist)[i] + "    (▼)";
	list.appendChild(nested);
	nested.setAttribute("jack-expand-node", '');
	document.querySelector('#blogsearchlist').appendChild(list);
	list.setAttribute("onclick","toggleExpand(\"" + Object.keys(artlist)[i] + "\")");

}
function toggleExpand(topic) {
	let listexpand = document.getElementById("Expand" + topic);
	let parentexpand = document.querySelector("#blogsearchlist li");
	console.log(listexpand.getAttribute("jack-expand-node"));
	listexpand.toggleAttribute("jack-expand-node");
	console.log(listexpand.getAttribute("jack-expand-node"));
	if (listexpand.getAttribute("jack-expand-node") == '' ) {
		listexpand.style.display = "contents";
	} else {
		listexpand.style.display = "none";
	}
}
function searchQuer() {
	let searchquer = document.getElementById('searchBarInput');
	let upperquer = searchquer.value.toUpperCase();
	let arts = document.getElementById("blogsearchlist");
	let artsToCheck = arts.getElementsByTagName('li');
	for (let i = 0; i < artsToCheck.length; i++) {
		let indextext = artsToCheck[i].textContent;
		if (indextext.toUpperCase().indexOf(upperquer) > -1) {
			artsToCheck[i].style.display = "";
		} else {
			artsToCheck[i].style.display = "none";
		}
	}
}


