(function () {
    'use strict';

    angular.module('common.services').factory('general', ['$window', '$mdToast', '$mdDialog',
        function ($window, $mdToast, $mdDialog) {
            var self = this;

            self.isNumber = function (n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            self.success = function (msg) {
                $window.scrollTo(0, 0);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(msg)
                    .position("top right")
                    .theme('success-toast')
                    .hideDelay(3000)
                );
            }

            self.warn = function (msg) {
                $window.scrollTo(0, 0);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(msg)
                    .position("top right")
                    .theme('warn-toast')
                    .hideDelay(3000)
                );
            }

            self.info = function (msg) {
                $window.scrollTo(0, 0);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(msg)
                    .position("top right")
                    .theme('info-toast')
                    .hideDelay(3000)
                );
            }

            self.error = function (msg) {
                $window.scrollTo(0, 0);
                $mdToast.show(
                    $mdToast.simple()
                    .textContent(msg)
                    .position("top right")
                    .theme('error-toast')
                    .hideDelay(3000)
                );
            }

            self.confirmation = function (data, title, content, confirmLabel, cancelLabel, confirmFunc, cancelFunc, ev) {
                var confirm = $mdDialog.confirm()
                    .title(title)
                    .textContent(content)
                    .ariaLabel('confirm dialog')
                    .targetEvent(ev)
                    .ok(confirmLabel)
                    .cancel(cancelLabel);

                $mdDialog.show(confirm).then(function () {
                    if (confirmFunc)
                        confirmFunc(data);
                    return;
                }, function () {
                    if (cancelFunc)
                        cancelFunc(data);
                    return;
                });
            }

            self.TimestampToDate = function (timestamp) {
                return self.formatDateHMS(new Date(timestamp));
            }

            self.DateToTimestamp = function (date) {
                return date.getTime();
            }

            self.formatDate = function (fromdate) {
                var dd = fromdate.getDate();
                var mm = fromdate.getMonth() + 1; //January is 0!
                var yyyy = fromdate.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }

                return dd + '-' + mm + '-' + yyyy;
            }

            self.formatDateHMS = function (fromdate) {
                console.log(fromdate);
                
                var dd = fromdate.getDate();
                var mm = fromdate.getMonth() + 1; //January is 0!
                var yyyy = fromdate.getFullYear();
                var hr = fromdate.getHours();
                var min = fromdate.getMinutes();
                var sec = fromdate.getSeconds();

                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }

                if (hr < 10)
                    hr = '0' + hr;

                if (min < 10)
                    min = '0' + min;

                if (sec < 10)
                    sec = '0' + sec;

                return dd + '-' + mm + '-' + yyyy + ' ' + hr + ':' + min + ':' + sec;
            }

            self.formatString = function (string) {
                if (arguments.length > 1) {
                    // If we have more than one argument (insertion values have been given)
                    var str = string;
                    // Loop through the values we have been given to insert
                    for (var i = 1; i < arguments.length; i++) {
                        // Compile a new Regular expression looking for {0}, {1} etc in the input string
                        var reg = new RegExp("\\{" + (i - 1) + "\\}");
                        // Perform the replace with the compiled RegEx and the value
                        str = str.replace(reg, arguments[i]);
                    }
                    return str;
                }

                return input;
            }

            return this;
        }
    ])
})();