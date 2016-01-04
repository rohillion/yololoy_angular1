yololoy.filter('linkify', function ($sce) {
    // Regex from https://github.com/angular/angular.js/blob/master/src/ngSanitize/filter/linky.js#L5
    var urlRegex = /(((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>])/gi;
    return function (input, target) {
        var targetHTML = target ? ' target="' + target + '"' : '';
        return $sce.trustAsHtml(input.replace(urlRegex, '<a href="$1"' + targetHTML + '>$1</a>'));
    }
});