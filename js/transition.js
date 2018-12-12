$("body a").on("click", function(event){
	event.preventDefault()

	const href = $(this).attribute("href")

	window.history.pushState(null, null, href)

	$.ajax({
		url: href,
		success: function(data){
			$("body").fadeOut(500, function(){
				const newPage = $(data).filter("body").html()

				$("body").html(newPage)

				$("body").fadeIn(500)
			})
		}
	})
})