gsap.registerPlugin(ScrollTrigger);


jQuery(function ($) {
    if ($('.fade-slide-in').length) {

        $('.fade-slide-in').each(function () {
            const el = this;

            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                x: -50, // slide in from left
                duration: 1.5,
                ease: 'power2.out'
            });
        });
    }

    if ($('.fade-slide-down').length) {

        $('.fade-slide-down').each(function () {
            const el = this;

            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 95%',
                    toggleActions: 'play none none reverse'
                },
                opacity: 0,
                y: -50, // slide down
                duration: 1.5,
                ease: 'power2.out'
            });
        });
    }

    if ($('.slight-slide-down').length) {

        $('.slight-slide-down').each(function () {
            const el = this;

            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    end: 'top 30%', 
                    scrub: 1, 
                    toggleActions: 'play none none reverse'
                },
                y: -50, // slide down
                ease: 'power2.out'
            });
        });
    }

    // if ($('.cover-header.static-image').length) {
    //     //This is a cover-image page, let's animate the scroll down. 
    //     ScrollTrigger.matchMedia({
    //         "(min-width: 783px)": function () {

    //             var $header = $('.cover-header.static-image');
    //             var el = $header[0];
    //             var scrollDistance = 200;
    //             var finalHeight = 0;

    //             function lockStartHeight() {
    //                 el.style.height = Math.round(window.innerHeight * 0.8) + 'px';
    //                 finalHeight = Math.round((window.innerHeight * 0.8) + scrollDistance) + 'px';
    //             }

    //             var tween;

    //             function build() {
    //                 if (tween) { tween.scrollTrigger.kill(); tween.kill(); tween = null; }

    //                 lockStartHeight();

    //                 tween = gsap.to(el, {
    //                     height: finalHeight,
    //                     ease: 'none',
    //                     scrollTrigger: {
    //                         trigger: el,
    //                         start: 'top top',
    //                         end: 'bottom top',
    //                         scrub: true,
    //                         invalidateOnRefresh: true
    //                         // ,markers: true
    //                     }
    //                 });
    //             }

    //             build();
    //             ScrollTrigger.addEventListener('refreshInit', lockStartHeight);

    //             // Rebuild on resize/orientation
    //             $(window).on('resize', function () {
    //                 build();
    //                 ScrollTrigger.refresh();
    //             });
    //         }

    //     });
    // }
});


// ---- Config
const MODAL_ANIM_DUR = 0.3; // seconds
const EASE = "power2.out";

// ---- Utilities
function openModal() {
    $(".menu-modal").addClass("open");
    $("html").addClass("no-scroll");
    $("#hamburger-icon").addClass("open");

    gsap.from(".menu-modal-inner", {
        xPercent: 100,
        yPercent: -100,
        borderRadius: 0,
        duration: 0.5,
        ease: EASE,
        onComplete: () => {
            gsap.to(".mobile-menu-list-wrapper li", {
                x: "-1em",
                opacity: 1,
                duration: 0.5,
                ease: EASE,
                stagger: 0.06
            });
        }
    });
}

// Return a Promise so we can chain navigation *after* it closes.
function closeModal({ triggeredByButton = false } = {}) {
    return new Promise((resolve) => {
        // Ensure classes reflect closed state (no toggles -> no desync)
        $("#hamburger-icon").removeClass("open");
        $("html").removeClass("no-scroll");

        gsap.to(".menu-modal-inner", {
            xPercent: 100,
            yPercent: -100,
            duration: MODAL_ANIM_DUR,
            ease: EASE,
            onComplete: () => {
                $(".menu-modal").removeClass("open");
                gsap.set(".menu-modal-inner", { clearProps: "borderRadius,transform" });
                gsap.set(".mobile-menu-list-wrapper li", { clearProps: "opacity,transform" });
                resolve();
            }
        });
    });
}

// ---- Triggers
$('#hamburger-icon').on('click', function () {
    if ($(".menu-modal").hasClass('open')) {
        closeModal({ triggeredByButton: true });
    } else {
        openModal();
    }
});

// Only close when clicking the dark overlay, not the inner panel.
// (Prevents accidental close while interacting INSIDE the modal.)
$(".menu-modal-inner").on("click", function (e) {
    e.stopPropagation();
});
$(".menu-modal").on('click', function () {
    // Clicked the overlay
    closeModal();
});

// ---- Delay page navigation until after modal closes
// Target links in the modal and (optionally) in your site header nav.
$(document).on("click", '.menu-modal a, header a', function (e) {
    // Ignore non-left clicks, modifier keys, or targets with special attributes
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || this.target === "_blank") return;

    const href = $(this).attr("href");
    if (!href || href.startsWith("javascript:")) return;

    // If modal isn't open, let it behave normally
    if (!$(".menu-modal").hasClass("open")) return;

    e.preventDefault();

    // Close, then navigate
    closeModal().then(() => {
        // Handle same-page anchors smoothly
        if (href.startsWith("#")) {
            const $target = $(href);
            if ($target.length) {
                // Scroll to anchor (optional: smooth)
                $target[0].scrollIntoView({ behavior: "smooth" });
                return;
            }
        }
        // Navigate to a different page/URL
        window.location.href = href;
    });
});


// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 10;
var navbarHeight = $('#site-header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#site-header').addClass("header-hidden");
    } else {
        // Scroll Up
        if(st < lastScrollTop || st < navbarHeight) {
            $('#site-header').removeClass("header-hidden");
        }
    }
    lastScrollTop = st;
}