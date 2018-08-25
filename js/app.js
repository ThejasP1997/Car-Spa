var app=angular.module("myApp",[]);

/*
var app=angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
  $routeProvider.when("/expert",{
    controller:"myController",
    templateUrl:"experts.html"
  }).when("/gallery",{
    templateUrl:"gallery.html"

  }).when("/aboutus",{
    controller:"myController",
    templateUrl:"aboutus.html"
  })

});
*/



//to retrieve feedbacks from mlab
app.controller("feedbackController",function($scope,$http){
    $http.get("http://localhost:3000/getfeedbacks").then(function(response){
      $scope.feedbacks=response.data;
      console.log($scope.feedbacks[15].name);
    });
})




app.controller("myController",function($scope,$http){
    $http.get("http://localhost:3000/").then(function(response){
        $scope.datas=response.data;

    });

//insert feedback
    $scope.giveFeedback=function(){
      let feedback={
        name:$scope.name,
        email1:$scope.email1,
        comment:$scope.comment
        }

        $http.post("http://localhost:3001/feedback",feedback).then(function(response){
            console.log(response.data);
            $scope.msg1=response.data;
            $scope.name="";
            $scope.email1="";
            $scope.comment="";
        })
}


//signup
      //   $scope.signup=function(){
      //     let signup={
      //       name:$scope.name,
      //       vname:$scope.vname,
      //       vid:$scope.vid,
      //       email:$scope.email,
      //       addr:$scope.addr,
      //       city:$scope.city,
      //       state:$scope.state,
      //       zip:$scope.zip
      //       }
      //
      //         $http.post("http://localhost:3000/signup",signup).then(function(response){
      //           console.log(response.data);
      //           $scope.emsg=response.data;
      //           $scope.name="";
      //           $scope.vname="";
      //           $scope.vid="";
      //           $scope.email="";
      //             $scope.addr="";
      //           $scope.city="";
      //           $scope.state="";
      //           $scope.zip="";
      //       })
      //
      // }





//mail & details of vehicle service order
  $scope.signup=function(){

    console.log("signup function called");
let mail={
  name:$scope.name,
  vname:$scope.vname,
  vid:$scope.vid,
  email:$scope.email,
  addr:$scope.addr,
  city:$scope.city,
  state:$scope.state,
  zip:$scope.zip
}

      $http.post("http://localhost:3000/signup",mail).then(function(response){
console.log("inside post request");
        console.log(response.data);
        $scope.emsg=response.data;
        $scope.name="";
        $scope.vname="";
        $scope.vid="";
        $scope.email="";
          $scope.addr="";
        $scope.city="";
        $scope.state="";
        $scope.zip="";
      })

}


});














/*
app.controller("myController",function($scope){
  $scope.title="Our Services";

  $scope.datas=[{
      exp:"BW04",
      name:"Body Wash",
      time:"5 hrs",
      price:200
  },{
    exp:"RT014",
    name:"Re-paint & Tinkering",
    time:"5 hrs",
    price:340.30
  },{
    exp:"LC06",
    name:"Lube CARE",
    time:"5 hrs",
    price:4200
  },{
    exp:"BP012",
    name:"Body Polish",
    time:"5 hrs",
    price:2300.89
  },
  {
    exp:"ID012",
    name:"Inteior Decoration",
    time:"5 hrs",
    price:230.43
  },
  {
    exp:"AV012",
    name:"Audio Visual System Upgrading",
    time:"5 hrs",
    price:55000
  }]

});
*/
