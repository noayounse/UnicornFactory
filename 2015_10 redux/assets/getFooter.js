// footer for project pages
var div = document.getElementById("footer");
if (div != null) {
	div.innerHTML = '<footer class="footer"><div class="container"><div class="row"><div class="col-xs-6" style="text-align:left"><a href="../../index.html">< home</a></div><div class="col-xs-6 text-muted" style="text-align:right">Noa Younse&nbsp;&nbsp; 2016&nbsp;&nbsp;</div></div></div></footer>';
}

// footer for the landing page.  had no link back home
var divLander = document.getElementById("landingPageFooter");
if (divLander != null) {
	divLander.innerHTML = '<footer class="footer"><div class="container"><div class="row"><div class="col-xs-12 text-muted" style="text-align:right">Noa Younse&nbsp;&nbsp; 2016&nbsp;&nbsp;</div></div></div></footer>';
}