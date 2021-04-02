function tabs(controls, tabContents) {
	controls.children[0].firstElementChild.classList.add('active');
	tabContents.children[0].classList.add('active');

	for (let i = 0; i < controls.children.length; i++) {
		controls.children[i].firstElementChild.dataset.tab = i;
		tabContents.children[i].dataset.tab = i;

		controls.children[i].addEventListener('click', e => {
			e.preventDefault();
            
			for (let j = 0; j < tabContents.children.length; j++) {
				tabContents.children[j].dataset.tab == 
                    controls.children[i].firstElementChild.dataset.tab 
                        ? tabContents.children[j].classList.add('active') 
                        : tabContents.children[j].classList.remove('active');
				
                    controls.children[j].firstElementChild.dataset.tab == 
                        controls.children[i].firstElementChild.dataset.tab 
                        ? controls.children[j].firstElementChild.classList.add('active') 
                        : controls.children[j].firstElementChild.classList.remove('active');
			}
		});
	}
}

tabs(document.querySelector('.tabs-control'), document.querySelector('.tabs-content'));


/* ************************************************************************************* */

const parseUrl = (url) => new URL(url);

let obj = parseUrl("http://ffwagency.com/do/any.php?a=1#foo");

console.log(obj.hash); // -> #foo
console.log(obj.hostname); // -> ffwagency.com
console.log(obj.pathname); // -> /do/any.php
