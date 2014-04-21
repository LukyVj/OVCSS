$(document).ready(function() {

 function linker(){
   var frLinks = $('a[href*="{[link-"]');

  frLinks.each(function(e) {
      var $this = $(this);
      var url = $this.css('content');
      var url = url.replace("'", "");
      var url = url.replace("'", "");

      var oldUrl = $this.attr('href');

      console.log('Old value : ' + oldUrl + '| New value :' + url )


      $this.attr('href', url)

  });
 }

  function paragrapher(){
   var frParagraphs = $('p:contains({[paragraph-)');

  frParagraphs.each(function(e) {
      var $this = $(this);
      var paragraph = $this.css('content');
      var paragraph = paragraph.replace("'", "");
      var paragraph = paragraph.replace("'", "");
      var paragraph = paragraph.replace("'", "");

      var oldParagraph = $this.text();

      console.log('Old paragraph : ' + oldParagraph + '| New paragraph :' + paragraph )


      $this.text(paragraph)

  });
 }



  linker();
  paragrapher();
});
