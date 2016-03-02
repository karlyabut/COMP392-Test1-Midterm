/// <reference path="../../typings/tsd.d.ts"/>
//Author: Karl Eisen Yabut (300699795)
//Date modified: March 2, 2016
//Program description: Tapered Tower (Midterm)
// first commit: Initial commit
// second commit: finished
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotation1, rotation2, rotation3, rotation4, rotation5) {
            this.rotation1 = rotation1;
            this.rotation2 = rotation2;
            this.rotation3 = rotation3;
            this.rotation4 = rotation4;
            this.rotation5 = rotation5;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Control.prototype.rotateTower1 = function () {
            this.rotation1 = 0;
        };
        Control.prototype.rotateTower2 = function () {
            this.rotation2 = 0;
        };
        Control.prototype.rotateTower3 = function () {
            this.rotation3 = 0;
        };
        Control.prototype.rotateTower4 = function () {
            this.rotation4 = 0;
        };
        Control.prototype.rotateTower5 = function () {
            this.rotation5 = 0;
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map