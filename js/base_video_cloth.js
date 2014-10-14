/**
 * Created by qaz on 14-10-14.
 */

function VideoCloth (  conf) {

    this.config = conf || {};

    return this;

}

VideoCloth.prototype.setConfig = function ( newConf) {

    var _selfConf =  this.config;

    for (var p in newConf) {

        try {

            if ( newConf[p].constructor == Object ) {
                _selfConf[p] = this.setConfig(_selfConf[p], newConf[p]);

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
        zIndex:this.config.element.style.zIndex
    };

    this.setConfig(defaultConf);
    return this;
}
VideoCloth.prototype.createVideo = function () {

}
var videoEle = document.getElementById('video_tag');

var obj = new VideoCloth({'element': 'videoEle'}).setConfig({'height': 550})


obj.autoConfig();
console.log(obj .config)