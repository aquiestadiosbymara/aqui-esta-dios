document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".brand, .intro, .school-section, .links-section, .resources-section, footer"
    );

    elements.forEach((element, index) => {

        element.style.opacity = "0";
        element.style.transform = "translateY(12px)";
        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, 120 + index * 120);

    });

});
