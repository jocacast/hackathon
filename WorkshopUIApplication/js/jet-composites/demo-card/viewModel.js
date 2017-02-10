define(['knockout'],
        function (ko) {

            function model(context) {

                var self = this;
                self.initials = null;
                self.workFormatted = null;
                        var element = context.element;

                var formatPhoneNumber = function (number) {

                    return number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
                }
                context.props.then(function (properties) {

                    if (properties.name) {

                        var initials = properties.name.match(/\b\w/g);
                        self.initials = (initials.shift() + initials.pop()).toUpperCase();
                    }

                    if (properties.workNumber)
                        self.workFormatted = formatPhoneNumber(properties.workNumber);
                });
                self.flipCard = function (model, event) {

                    if (event.type === 'click' || (event.type === 'keypress' && event.keyCode === 13)) {

                        $(element.childNodes[0]).toggleClass('flipped');
                    }

                };
            }

            return model;
        }
)