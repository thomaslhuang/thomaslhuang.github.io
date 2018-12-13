$(window).on('popstate', function(event){
	window.history.back();
})

$("body").on("click", "a", function(event){
	if (!$(event.target).is(".external")){
		event.preventDefault()

		const href = $(this).attr("href")

		window.history.pushState(null, null, href)

		$.ajax({
			url: href,
			success: function(data){
				$(".container-fluid").fadeOut(500, function(){
					const newPage = $(data).filter(".container-fluid").html()

					$(".container-fluid").html(newPage).scrollTop(0)

					$(".container-fluid").fadeIn(500)
				})
			}
		})
	}
})