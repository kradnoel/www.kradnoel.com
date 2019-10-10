/*!
*
 * kradnoel.com v1.0.0
 * https://github.com/kradnoel/kradnoel.com
 *
 * @license MIT
 *
 * Copyright (C) 2019 https://kradnoel.com - A project by Djamal dos Santos
 */

<!-- Fullpage.js implementation -->
var myFullpage = new fullpage('#fullpage', {
        anchors: ['home', 'about','skills', 'portfolio'],
        sectionsColor: ['#EE3233', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'About' , 'Skills', 'Portfolio'],
        licenseKey : 'GPLv3',
        parallax: false
    });

<!-- OwlCarousel implementation -->
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    items:1,
    loop: true,
    center: true,
    rewind: true,
    info: true
  });
});

<!-- Google Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-140686023-1', 'auto');
            ga('send', 'pageview');
