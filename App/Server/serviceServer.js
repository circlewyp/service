/**
 * Created by wangyaping on 2017/10/19.
 */
app.factory("carFactory", function ($http, $q) {
    return {
        getData: function (type, url) {
            var df = $q.defer();
            if (type == "jsonp" || type == "JSONP") {
                $.ajax({
                    url: url,
                    dataType: type,
                    success: function (data) {
                        df.resolve(data);
                    },
                    error: function (res) {
                        df.reject(res);
                    }
                });
            } else {
                $http({
                    method: type,
                    url: url
                }).then(function (data) {
                    df.resolve(data.data);
                }, function (err) {
                    df.reject(err)
                });
            }
            return df.promise;
        }
    }
});