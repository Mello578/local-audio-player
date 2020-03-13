module.exports.index = function (req, res) {
	res.send(`
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>audio-player</title>
	<link type="text/css" rel="stylesheet" href="./src/style/main.css">
</head>
<body>
<div id="trailer" class="is_overlay">
	<video id="video" width="100%" height="auto" autoplay="autoplay" loop="loop" preload="auto">
		<source src= "./src/img/bcg.mp4"  type="video/mp4">
		<source src= "./src/img/bcg.webm"  type="video/webm">
	</video>
	<div class="bckg-darken">
	</div>
</div>
<div id="content"></div>
<script type="text/javascript" src="http://127.0.0.1:8081/dist/common.js"></script>
<script type="text/javascript" src="http://127.0.0.1:8081/dist/main.js"></script>
</body>
</html>
    `);
};
