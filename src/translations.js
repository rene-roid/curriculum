// Process translation
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});

// Translations
var arrLang = {
    "en": {
        "headerMenu": "Menu",

        "menuMenu": "Menu",
        "menuHome": "Home",
        "menuProjects": "Projects",
        "menuAboutMe": "About me",
        "menuContact": "Contact",

        "bannerName": "Hi! I'm Fernando Solórzano",
        "bannerText": "Microinformatics Systems and Networks Technician. Junior sofware and website developer.",

        "wrapperAboutMe": ""
    },
    "es": {
        "headerMenu": "Menú",

        "menuMenu": "Menú",
        "menuHome": "Inicio",
        "menuProjects": "Proyectos",
        "menuAboutMe": "Sobre mí",
        "menuContact": "Contacto",

        "bannerName": "Hola! Soy Fernando Solórzano",
        "bannerText": "Técnico en sistemas microinfromáticos y redes. Desarrollador junior de software y sitios web.",
    
    }
}