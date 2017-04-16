var app = angular.module("myApp", []);

app.directive("test", function() {
		function asd(a1,a2,a3){
			a1.message="Good Morning!!!";
			a1.change=function(){
				a1.message="Good Evening#######";
			}
			console.log(a2);
			a2[0].click(function(){
				a2[0].style("backgroundColor","pink");
			});
		}
    return {
        restrict : "EA",
				scope:true,
        template :`<h1 ng-click="change()">Praveen Gubbala{{message}}</h1>`,
				link: asd				
    }
});



















// function abc(s,e,a){
			// s.name="Gubbala";
			// s.xyz=function(i){
				// s.name=i;
			// }
			// e.bind("click",function(x){
				// console.log(x);
			// });
		// }