/**
 * Created by wangyaping on 2017/10/19.
 */
var gulp = require('gulp');
var path = require('path');
var server = require('gulp-webserver');
var url = require('url');
var fs = require('fs');
gulp.task('server', function () {
    gulp.src('./')
        .pipe(server({
            port: 8090,
            host: 'localhost',
            livereload: true,
            directoryListing: {
                path: './',
                enable: true
            },
            open:true,
            fallback:'index.html',
            middleware: function (req, res, next) {
                var urlobj = url.parse(req.url).query;
                var urlfile = path.join(__dirname,'Data', urlobj + '.json');
                fs.exists(urlfile, function (exists) {
                    if (!exists) {
                        var data = {
                            isSuccess: false,
                            data: 'can not fint the file' + urlobj + '.json'
                        }
                        res.writeHead(404,{
                            "Content-Type": "text/json;charset=utf-8",
                            "Access-Control-Allow-Origin": "http://localhost:63342"
                        });
                        res.end(JSON.stringify(data));
                    } else {
                        fs.readFile(urlfile, function (err, data) {
                            var data = {
                                isSuccess: true,
                                err: '',
                                data: data.toString()
                            }
                            res.writeHead(200,{
                                "Content-Type": "text/json;charset=utf-8",
                                "Access-Control-Allow-Origin": "http://localhost:63342"
                            });
                            res.end(data.data);
                        });
                    }
                });
            }
        }))
});