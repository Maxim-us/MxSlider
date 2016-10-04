MX-SLIDER – слайдер на JQuery.

СВОЙСТВА:
- легкий;
- адаптивный;
- простые настройки.

ПОДКЛЮЧЕНИЕ:
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title> MX-SLIDER</title>
	<link rel="stylesheet" href="css/MxSlider.css">
</head>
<body>
	<!-- code -->

	<script src="js/jquery-1.11.3.js"></script>
	<script src="js/MxSlider.js"></script>

	<script>
		$(document).ready(function(){		
			$( '.ZI-slider' ).MxSlider();
		})
	</script>
</body>
</html>

НАСТРОЙКА:
<script>
	$(document).ready(function(){		
		$( '.ZI-slider' ).MxSlider( {
			dots: true, // точки
			timeSlide: 500, // скорость скольжения
			autoPlay: true, // автоматическая прокрутка
			autoPlaySpeed: 5000 // Период между автоматическим воспроизвидением
		} );
	})
</script>