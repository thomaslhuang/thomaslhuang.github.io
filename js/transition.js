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

					if(navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) { window.scrollTo(0) } 
					else { $(".container-fluid").html(newPage).scrollTop(0) }
					
					$(".container-fluid").fadeIn(500)
				})
			}
		})
	}
})