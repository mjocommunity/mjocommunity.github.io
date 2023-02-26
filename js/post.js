function renderPost() {
	let params = new URLSearchParams(window.location.search);
	let id = params.get('id');
	fetch(`/posts/${id}.md`, options)
		.then((response) => response.text())
		.then((data) => {
			let post_body = document.getElementById('post_body');
			let converter = new showdown.Converter();
			let content = converter.makeHtml(data);
			post_body.innerHTML = content;
			console.log(data);
			console.log(content);
			const parser = new DOMParser();
			const body = parser.parseFromString(content, 'text/html');
			let title = body.getElementsByTagName('h1');
			if (title == undefined) {
				title = "Unknown";
			} else {
				title = title.innerText;
			};
			window.title = `${window.title} - ${title}`;
		})
}
