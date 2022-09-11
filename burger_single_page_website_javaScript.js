var navbarEl = document.getElementById("navbarId");
window.onscroll = function()
{
	console.log(window.scrollY );
	if( window.scrollY >= 100) 
		{
			navbarEl.style.backgroundColor = "#000";
		}
	else
		{
			navbarEl.style.backgroundColor = "transparent";
		}
}