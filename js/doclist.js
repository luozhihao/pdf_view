(function () {
    // 解决getElementsByClassName兼容问题
    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function(className, element) {

            var children = (element || document).getElementsByTagName('*');
            var elements = new Array();

            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                var classNames = child.className.split(' ');

                for (var j = 0; j < classNames.length; j++) {
                    if (classNames[j] == className) {
                        elements.push(child);
                        break;
                    }
                }
            }

            return elements;
        };
    }


    // 添加点击事件
    var list = document.getElementsByClassName('list');

    for (var i = 0, len = list.length; i < len; i++) {
        list[i].onclick = function (e) {
            removeActive();

            this.className = 'list active';

            PDFObject.embed(this.getAttribute('data-src'), "#pdf");
        }
    }

    // 移除样式方法
    function removeActive() {
        for (var i = 0, len = list.length; i < len; i++) {
            list[i].className = 'list';
        }
    }
})();