$("body").not('.external').on("click", "a", function(event){
	event.preventDefault()

	const href = $(this).attr("href")

	window.history.pushState(null, null, href)

	$.ajax({
		url: href,
		success: function(data){
			$(".container-fluid").fadeOut(500, function(){
				const newPage = $(data).filter(".container-fluid").html()

				$(".container-fluid").html(newPage)

				$(".container-fluid").fadeIn(500)
			})
		}
	})
})