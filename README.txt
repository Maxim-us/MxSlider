MX-SLIDER � ������� �� JQuery.

��������:
- ������;
- ����������;
- ������� ���������.

�����������:
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

���������:
<script>
	$(document).ready(function(){		
		$( '.ZI-slider' ).MxSlider( {
			dots: true, // �����
			timeSlide: 500, // �������� ����������
			autoPlay: true, // �������������� ���������
			autoPlaySpeed: 5000 // ������ ����� �������������� ����������������
		} );
	})
</script>