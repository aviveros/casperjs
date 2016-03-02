/*eslint strict:0*/

var urlWithEncodedSpace = 'tests/site/has%20space.html'; // Fails if this is first
var urlWithoutSpace = 'tests/site/index.html'; // Passes if this is first

var firstUrl = urlWithEncodedSpace;
var secondUrl = urlWithoutSpace;

casper.test.begin(firstUrl + ' then ' + secondUrl, 2, function(test) {
   casper.start(firstUrl, function CheckResponse1(response1) {
      test.assertEquals(response1.status, 200, 'loaded 1st url');
      
      casper.thenOpen (secondUrl, function CheckResponse2(response2) {
      	test.assertEquals(response2.status, 200, 'loaded 2nd url');
      });
   });
   casper.run(function() {
      test.done();
   });
});
