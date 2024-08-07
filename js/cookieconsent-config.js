import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.0.1/dist/cookieconsent.umd.js';

console.log('Cookie Consent module loaded');

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "bar inline",
            position: "bottom",
            equalWeightButtons: true,
            flipButtons: false
        },
    },

    onFirstConsent: function() {
        if (CookieConsent.acceptedCategory('necessary')) {
        }
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
    },

    language: {
        default: "en",
        autoDetect: "browser",
        translations: {
            en: {
                consentModal: {
                    title: "This site uses cookies",
                    description: "We collect cookies to analyze our website traffic. Some are essential while others are used to ensure you get the best browsing experience.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    footer: "<a href=\"http://www.aspectsoffitness.co.uk/pages/privacy.html\" target=\"_blank\">Privacy Policy</a>\n<a href=\"http://www.aspectsoffitness.co.uk/pages/tandc.html\" target=\"_blank\">Terms and conditions</a>"
                },
            }
        }
    }
});