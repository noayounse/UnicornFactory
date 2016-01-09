// footer for project pages
var div = document.getElementById("footer");
if (div != null) {
	div.innerHTML = '<footer class="footer"><div class="container"><div class="row"><div class="col-xs-6" style="text-align:left"><a href="../../index.html">< home</a></div><div class="col-xs-6 text-muted" style="text-align:right">Noa Younse&nbsp;&nbsp; 2016</div></div></div></footer>';
}

// footer for the landing page.  had no link back home
var divLander = document.getElementById("landingPageFooter");
if (divLander != null) {
	divLander.innerHTML = '<footer class="footer"><div class="container"><div class="row"><div class="col-xs-12 text-muted" style="text-align:right">Noa Younse&nbsp;&nbsp; 2016&nbsp;&nbsp;</div></div></div></footer>';
}

// analytics stuff
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-3248663-1', 'auto');
ga('send', 'pageview');

