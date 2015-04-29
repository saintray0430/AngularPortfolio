function VideosController($scope,$filter,$http) {
	
    $http.get('/Response.jsp').success(function (response) {
        $scope.data = response;
    }).error(function () { alert('error'); });
    
    $scope.pageIndex = 0;
    $scope.totalRecords = $scope.data.length;
    $scope.totalPages = Math.round($scope.totalRecords / 6);
    $scope.pages = [];
    
    function init() {
        getVideosByPage(0, 6);
        for (var i = 1; i <= $scope.totalPages; i++) {
            $scope.pages.push(i);
        }
    }
    init();

    function getVideosByPage(startIndex, count) {
        $scope.videos = [];

        for (var i = startIndex; i < count; i++) {
            if (startIndex < $scope.totalRecords) {
                $scope.videos.push($scope.data[i]);
            }
            else {
                break;
            }
        }
    }

    $scope.getByPage = function (pagenumber) {

        if ($scope.pageIndex < $scope.totalRecords) {
            $scope.pageIndex = (pagenumber * 6) - 6;
            getVideosByPage($scope.pageIndex, pagenumber*6);           
        }
        else {
            $scope.pageIndex = 0;
        }
    }

    var orderBy = $filter('orderBy');
   

    $scope.sortVideos = function () {
        $scope.videos = orderBy($scope.videos, 'title', false);
    }
}

app.controller('VideosController', VideosController);
