 //sidenav
 const sideNav = document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});
 //slider
 const slider = document.querySelector('.slider');
 M.Slider.init(slider,{
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000
 });
 //autocomplete
 const ac = document.querySelector('.autocomplete');
 M.Autocomplete.init(ac, {
   data: {
     "Middle Fork": null,
     "Goldbug Hot Springs": null,
     "Lemhi Historical Museum": null,
     "Lewis & Clark Back Country ByWay": null,
     "Meriwether Lewis": null,
     "Main Salmon River": null,
     "Middle Fork": null,
    }
 })

//material boxed
const mb = document.querySelectorAll ('.materialboxed');
M.Materialbox.init(mb, {}); 

//scrollspy
const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

