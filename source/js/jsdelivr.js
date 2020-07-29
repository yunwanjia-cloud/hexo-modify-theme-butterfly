if(document.domain != 'localhost'){
	if(document.getElementById("post")){
		for (var key in document.getElementById("article-container").getElementsByTagName('img')){
  			if (isNaN(key)){
    			break;
  			}
			document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(/https?:\/\//, '').replace(document.domain, jsd_url.slice(0, jsd_url.length - 1));
			document.getElementById("article-container").getElementsByClassName('fancybox')[key].href = document.getElementById("article-container").getElementsByClassName('fancybox')[key].href.replace(/https?:\/\//, '').replace(document.domain, jsd_url.slice(0, jsd_url.length - 1))
		}
    }
}