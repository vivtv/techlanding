$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#header a').addClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logoblack.png");
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').addClass('mobile-nav-toggle--scrolled');

    } else {
        $('#header').removeClass('header-scrolled');
        $('#header a').removeClass('nav-link-dark');
        $('#headerImg').attr("src", "images/logowhite.png");
        $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
        $('.mobile-nav-toggle').removeClass('mobile-nav-toggle--scrolled');
    }
});


if ($('.main-nav').length && $('.main-nav').attr('display') != 'none') {
    var $mobile_nav = $('.main-nav').clone().prop({
        class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('nav').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><span></span><span></span><span></span></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function (e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-overly').toggle();
        $('.mobile-nav-toggle>span').addClass('mobile-nav-toggle--span');
    });

    $(document).click(function (e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ($('body').hasClass('mobile-nav-active')) {
                $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
                $('body').removeClass('mobile-nav-active');
                $('.mobile-nav-overly').hide();
            }
        }
    });
} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $('.mobile-nav-toggle span').removeClass('mobile-nav-toggle--span');
    $(".mobile-nav, .mobile-nav-toggle").hide();
    $('.mobile-nav-overly').hide();
}

$('.owl-one').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})

$('.owl-two').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    items: 1
})



$(document).ready(function () {
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 10);
    $("#countdown").countdown(myDate, function (event) {
        $(this).html(
            event.strftime(
                '<div class="col-3"> <div class="time text-slate-dark">%D</div> <span class="text text-slate">Days</span> </div> <div class="col-3"> <div class="time text-slate-dark">%H</div><span class="text text-slate">Hours</span> </div> <div class="col-3"> <div class="time text-slate-dark">%M</div><span class="text text-slate">Minutes</span> </div> <div class="col-3"> <div class="time text-slate-dark">%S</div><span class="text text-slate">Seconds</span> </div>'
            )
        );
    });

});


$(document).ready(function () {
    $(".scroll-to").on("click", function (event) {
        event.preventDefault();

        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 800); // Adjust speed as needed
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            heading: "Smart Metro Tracking for Smarter Travel in Vienna.",
            paragraph: "Get live metro updates, arrival times, and route details instantly, ensuring a seamless travel experience.",
            button: "Learn More",
            feature: {
                block: {
                    text1: "Seamless, Smart, Efficient",
                    text2: "Unlock the Power of ViennaFlow",
                    text3: "Experience real-time metro insights with ViennaFlow. Navigate the city effortlessly with precise tracking and reliable information at your fingertips."
                },
                descriptions: [
                    {
                        heading: "Live Metro Tracking",
                        text: "Stay updated with real-time train locations on an interactive map."
                    },
                    {
                        heading: "Find Nearby Stations",
                        text: "Locate the closest metro stations instantly, hassle-free."
                    },
                    {
                        heading: "Reliable Arrival Times",
                        text: "Know exactly when your train arrives with precise ETAs."
                    },
                    {
                        heading: "Cross-Platform Accessibility",
                        text: "Enjoy seamless access on web and mobile devices."
                    }
                ]
            },
            slider: {
                text1: "Live, Smart, Reliable",
                heading: "A Real-Time Proof of Transit Intelligence",
                text2: "Easily track live metro movements across the city. Get real-time updates, smarter routes, and smoother commutes."
            },
            
            contacts: {
                heading: "Get The Latest ViennaFlow Updates",
                subheading: "And be the first to know when our project launches!",
                emailPlaceholder: "Enter your Email address",
                button: "Subscribe",
                bottomText: "Become part of our ever growing community."
            },
            footer: {
                columns: [
                    {
                        heading: "About us",
                        items: [
                            "Support center",
                            "Customer Support",
                            "About us"
                        ]
                    },
                    {
                        heading: "Feature",
                        items: [
                            "Support center",
                            "Customer Support",
                            "About us"
                        ]
                    },
                    {
                        heading: "Contacts",
                        items: [
                            "Support center",
                            "Customer Support",
                            "About us"
                        ]
                    }
                ],
                copyright: "&copy; 2025 ViennaFlow. All Rights Reserved."
            }
        },
        de: {
            heading: "Intelligente Metro-Verfolgung für eine intelligentere Reise in Wien.",
            paragraph: "Erhalten Sie Live-Metro-Updates, Ankunftszeiten und Routendetails sofort für eine nahtlose Reiseerfahrung.",
            button: "Mehr erfahren",
            feature: {
                block: {
                    text1: "Nahtlos, Intelligent, Effizient",
                    text2: "Entfesseln Sie die Kraft von ViennaFlow",
                    text3: "Erleben Sie Echtzeit-Einblicke in die Metro mit ViennaFlow. Navigieren Sie mühelos durch die Stadt mit präzisem Tracking und zuverlässigen Informationen."
                },
                descriptions: [
                    {
                        heading: "Live Metro Tracking",
                        text: "Bleiben Sie mit Echtzeit-Zugstandorten auf einer interaktiven Karte auf dem Laufenden."
                    },
                    {
                        heading: "Find Nearby Stations",
                        text: "Finden Sie die nächsten U-Bahn-Stationen sofort und problemlos."
                    },
                    {
                        heading: "Reliable Arrival Times",
                        text: "Erfahren Sie genau, wann Ihr Zug ankommt, mit präzisen Ankunftszeiten."
                    },
                    {
                        heading: "Cross-Platform Accessibility",
                        text: "Genießen Sie nahtlosen Zugriff auf Web- und mobilen Geräten."
                    }
                ]
            },
            slider: {
                text1: "Schnell, Günstig, Null Betrug",
                heading: "Ein skalierbares Investitionsfahrzeug",
                text2: "Kaufen, verkaufen oder tauschen Sie mühelos über 30 verschiedene Kryptowährungen. Jetzt sind Ein- und Auszahlungen in Euro verfügbar."
            },
    
            contacts: {
                heading: "Erhalten Sie die neuesten ViennaFlow-Updates",
                subheading: "Und seien Sie der Erste, der von unserem Projektstart erfährt!",
                emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
                button: "Nachricht senden",
                bottomText: "Werden Sie Teil unserer stetig wachsenden Community."
            },
            footer: {
                columns: [
                    {
                        heading: "Über uns",
                        items: [
                            "Support Center",
                            "Kundensupport",
                            "Über uns"
                        ]
                    },
                    {
                        heading: "Feature",
                        items: [
                            "Support Center",
                            "Kundensupport",
                            "Über uns"
                        ]
                    },
                    {
                        heading: "Kontakte",
                        items: [
                            "Support Center",
                            "Kundensupport",
                            "Über uns"
                        ]
                    }
                ],
                copyright: "&copy; 2024 Ihr Unternehmen. Alle Rechte vorbehalten."
            }
        }
    };

    function changeLanguage(lang) {
        const bannerHeading = document.querySelector(".banner_section__h2");
        const bannerParagraph = document.querySelector(".banner_section p");
        const bannerButton = document.querySelector(".btn-success");
        const dropdown = document.getElementById("dropdownMenuLink");
        if (bannerHeading) bannerHeading.innerText = translations[lang].heading;
        if (bannerParagraph) bannerParagraph.innerText = translations[lang].paragraph;
        if (bannerButton) bannerButton.innerText = translations[lang].button;
        if (dropdown) {
            dropdown.innerHTML = `<span class="caret">${lang === 'en' ? 'English' : 'German'}</span>`;
        }

        const testimonialItems = document.querySelectorAll(".testimonial-item");
        testimonialItems.forEach((item, index) => {
            if (translations[lang].testimonials && translations[lang].testimonials[index]) {
                const trans = translations[lang].testimonials[index];
                const quoteEl = item.querySelector(".testimonial-quote");
                const personNameEl = item.querySelector(".testimonial-person h3");
                const personTitleEl = item.querySelector(".testimonial-person h4");
                if (quoteEl) quoteEl.innerText = trans.quote;
                if (personNameEl) personNameEl.innerText = trans.name;
                if (personTitleEl) personTitleEl.innerText = trans.title;
            }
        });

        const featureBlock = document.querySelector("#feature .features__block");
        if (featureBlock) {
            const pHeadingBig = featureBlock.querySelector("p.heading-big");
            const h2Intro = featureBlock.querySelector(".features__intro h2");
            const pBlock = featureBlock.querySelector("p:not(.heading-big)");
            if (pHeadingBig) pHeadingBig.innerText = translations[lang].feature.block.text1;
            if (h2Intro) h2Intro.innerText = translations[lang].feature.block.text2;
            if (pBlock) pBlock.innerText = translations[lang].feature.block.text3;
        }

        const featureDescContainers = document.querySelectorAll("#feature .features__description .col-12");
        translations[lang].feature.descriptions.forEach((desc, index) => {
            const container = featureDescContainers[index];
            if (container) {
                const h4 = container.querySelector("h4");
                const p = container.querySelector("p");
                if (h4) h4.innerText = desc.heading;
                if (p) p.innerText = desc.text;
            }
        });

        const sliderContainer = document.querySelector(".featureSlider .row.text-center");
        if (sliderContainer) {
            const sliderP = sliderContainer.querySelector("p.heading-big");
            const sliderH2 = sliderContainer.querySelector("h2");
            const sliderP2 = sliderContainer.querySelectorAll("p")[1];
            if (sliderP) sliderP.innerText = translations[lang].slider.text1;
            if (sliderH2) sliderH2.innerText = translations[lang].slider.heading;
            if (sliderP2) sliderP2.innerText = translations[lang].slider.text2;
        }

        const betaSection = document.querySelector(".betaSection");
        if (betaSection) {
            const betaHeading = betaSection.querySelector("h2");
            const betaSubheading = betaSection.querySelector("p");
            if (betaHeading) betaHeading.innerText = translations[lang].beta.heading;
            if (betaSubheading) betaSubheading.innerText = translations[lang].beta.subheading;
            const betaItems = betaSection.querySelectorAll(".col-lg-4");
            translations[lang].beta.items.forEach((item, index) => {
                const betaItem = betaItems[index];
                if (betaItem) {
                    const h4 = betaItem.querySelector("h4");
                    const p = betaItem.querySelector("p");
                    if (h4) h4.innerText = item.heading;
                    if (p) p.innerText = item.text;
                }
            });
        }

        const contactsSection = document.querySelector("#contacts");
        if (contactsSection) {
            const contactsHeading = contactsSection.querySelector(".contact-wrapper h4");
            const contactsSubheading = contactsSection.querySelector(".contact-wrapper p");
            const emailInput = contactsSection.querySelector("input[type='email']");
            const submitInput = contactsSection.querySelector("input[type='submit']");
            const bottomTextP = contactsSection.querySelector(".contact-wrapper > .row:last-of-type p");
            if (contactsHeading) contactsHeading.innerText = translations[lang].contacts.heading;
            if (contactsSubheading) contactsSubheading.innerText = translations[lang].contacts.subheading;
            if (emailInput) emailInput.setAttribute("placeholder", translations[lang].contacts.emailPlaceholder);
            if (submitInput) submitInput.setAttribute("value", translations[lang].contacts.button);
            if (bottomTextP) bottomTextP.innerText = translations[lang].contacts.bottomText;
        }

        const footerColumns = document.querySelectorAll(".footerSection .footer-column");
        translations[lang].footer.columns.forEach((colData, index) => {
            const col = footerColumns[index];
            if (col) {
                const colHeading = col.querySelector("p.heading-big");
                if (colHeading) colHeading.innerText = colData.heading;
                const ul = col.querySelector("ul");
                if (ul) {
                    ul.innerHTML = "";
                    colData.items.forEach(itemText => {
                        const li = document.createElement("li");
                        li.classList.add("mb-2");
                        const a = document.createElement("a");
                        a.classList.add("text-white");
                        a.href = "#";
                        a.innerText = itemText;
                        li.appendChild(a);
                        ul.appendChild(li);
                    });
                }
            }
        });

        const copyrightEl = document.getElementById("footer-copyright");
        if (copyrightEl) {
            copyrightEl.innerHTML = translations[lang].footer.copyright;
        }

        localStorage.setItem("selectedLang", lang);
    }

    const savedLang = localStorage.getItem("selectedLang") || "en";
    changeLanguage(savedLang);

    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const lang = this.innerText.includes("English") ? "en" : "de";
            changeLanguage(lang);
        });
    });
});


