describe('restCtrl', function () {
  beforeEach(module('starter'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

    describe('getClinicNameAndLocation',function(){
       
        it('Tests getClinicNameAndLocation function of restCtrl',function(){
        
        var $scope = {};
      var controller = $controller('restCtrl', { $scope: $scope });
      var resultString = 'Clinic Name : Kansas City Clinic Clinic Location : 5100 Rockhill Rd, Kansas City, MO 64110';
      
expect($scope.getClinicNameAndLocation('Kansas City Clinic','5100 Rockhill Rd, Kansas City, MO 64110')).toEqual(resultString);//succeeds
expect($scope.getClinicNameAndLocation('Kansas City Clinic','5100 Rockhill Rd, Kansas City, MO 64110')).toEqual(resultString+'!');// fails
expect($scope.getClinicNameAndLocation('Kansas City Clinic Clinic','5100 Rockhill Rd, Kansas City, MO 64110')).toEqual(resultString);// fails
            
            
            
        });        
    });   
});

