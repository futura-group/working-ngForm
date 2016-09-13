var module = angular.module('ngFormFixes', []);

module.directive('ngForm', function() {
    return {link: linkFunction};

    function linkFunction($scope, $element, $attrs) {
        var submit_button = findSubmitButton();

        // bind Enter key
        $element.bind('keydown', function (e) {
            if ((e.keyCode || e.which) !== 13) return;
            if ($attrs.ngSubmit) {
                $scope.$apply($attrs.ngSubmit);
                e.stopPropagation();
                e.preventDefault();
            } else if (submit_button) {
                submit_button.click();
                e.stopPropagation();
                e.preventDefault();
            }
        });

        // bind Submit click to run itself or ngSubmit
        angular.element(submit_button).bind('click', function(e) {
            if ($attrs.ngSubmit && angular.element(this).attr('ng-click') === undefined) {
                $scope.$apply($attrs.ngSubmit);
                e.stopPropagation();
                e.preventDefault();
            }
        });

        function findSubmitButton() {
            var current, $containingForm, buttons = $element.find('button, input');
            for (var i = 0; i < buttons.length; i++) {
              current = buttons[i];
              if (current.type.toLowerCase() !== 'submit') continue;
              $containingForm = angular.element(current).closest('form, [ng-form], [data-ng-form]');
              if ($element[0] !== $containingForm[0]) continue;
              return current;
            }
        }
    }
});

module.directive('onEnter', function() {
    return {link: linkFunction};
    
    function linkFunction($scope, $element, $attrs) {
        $element.bind('keyup', function(e) {
            if ((e.keyCode || e.which) === 13 && $attrs.onEnter) {
                $scope.$apply($attrs.onEnter);
            }
        });
    }
});
