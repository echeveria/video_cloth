/**
 * Created by qaz on 14-10-14.
 */

/*

require add constructor property for dom element object. For example:
var domEle = document.getElementById('video');
var videoObj =  new VideoCloth({ 'element': domEle });


*/

function VideoCloth (conf) {

    this.config = conf || {};

    return this;

}

VideoCloth.prototype.setConfig = function ( newConf ){

    var _selfConf =  this.config;

    function _setConfig (newObj, oldObj) {

        for (var i in newObj) {

            oldObj[i] = newObj[i];
        }
        return oldObj;
    }

    for (var p in newConf) {

        try {

            if ( newConf[p].constructor == Object ) {

                _selfConf[p] = _setConfig( newConf[p], _selfConf[p]);

            } else {
                _selfConf[p] = newConf[p];

            }

        } catch(e) {

            _selfConf[p] = newConf[p];

        }
    }

    return  this;
}
VideoCloth.prototype.autoConfig = function() {

    var defaultConf = {
        width:  this.config.element.offsetWidth,
        height: this.config.element.offsetHeight,
        zIndex: this.config.element.style.zIndex
    };

    this.setConfig(defaultConf);
    return this;
}
VideoCloth.prototype.createVideo = function () {
    return this.config.height;
}
var videoEle = document.getElementById('video_tag');

var obj = new VideoCloth({'element': videoEle}).setConfig({'height': {a:550}})
console.log(obj.createVideo());
obj.setConfig({'height': {a:150, b:88}})
console.log(obj.createVideo());
