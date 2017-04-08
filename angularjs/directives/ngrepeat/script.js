var hand=angular.module("demoApp",[]);
hand.controller("kuchbhiCtrl",function($scope){
	$scope.c="";
	$scope.$watch("c",function(){
	if($scope.c=='L'){
		$scope.combination=["special1","special2"];
	}
	else{
		$scope.combination=["special4","special3"];
	}
	});
	
	$scope.cricketers=[
{"url":"http://im.rediff.com/cricket/2013/feb/14spec2.jpg","details":"Raina"},
{"url":"http://cric.kikiadmin.webfactional.com/wp-content/uploads/2011/09/Gautam-Gambhir-a-batsman-of-Indian-cricket-team1.jpg","details":"Gambhir"},
{"url":"http://media2.intoday.in/indiatoday/images/stories//2016April/shikhar-dhawan-650_040816023432.jpg","details":"Shikhar"},
{"url":"http://www.worldstopmost.com/wp-content/uploads/2016/09/R-Ashwin-Most-handsome-cricketers-in-India-in-2017.jpg","details":"Ashwin"},
{"url":"http://st3.cricketcountry.com/wp-content/uploads/2014/10/Irfan-Pathan-of-India-smiles-during-the-One-Day-International-match-between-Australia-and-India-at-the-Sydney-C.jpg","details":"Irfan"},
{"url":"http://st2.cricketcountry.com/wp-content/uploads/cricket/625e239ab140692b86d7f08730391e53.jpeg","details":"Rohit"},
{"url":"http://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024146.jpeg","details":"Bhuvi"},
{"url":"http://images.jagran.com/spor8_17112015.jpg","details":"Shami"},{"url":"http://www.viratkohli.website/wp-content/uploads/2015/03/Indian-cricket-star-Yuvra-00111.jpg","details":"Yuvi"},
{"url":"http://media2.intoday.in/indiatoday/images/stories/msd_fbsport_647_061616104643.jpg","details":"Dhoni"},
{"url":"http://st3.cricketcountry.com/wp-content/uploads/cricket/20140521022339.jpeg","details":"Umesh Yadav"},
{"url":"http://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024112.jpeg","details":"Jadeja"},
{"url":"http://s1.firstpost.in/fpimages/300x225/proportional/jpeg/cricket/india/virat_kohli.jpg","details":"Kohli"},
{"url":"http://resources3.news.com.au/images/2007/12/20/va1237283471021/Sachin-Tendulkar-George-Salpigtidis-5808880.jpg","details":"Sachin"}
]	;
});