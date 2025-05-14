// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const certificatesSection = document.getElementById("certifications");
    const certificates = document.querySelectorAll(".certificate-slide");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Animate certificates when section comes into view
                    certificates.forEach((certificate, index) => {
                        setTimeout(() => {
                            certificate.style.opacity = "1";
                            certificate.style.transform = "translateX(0)";
                        }, index * 300); // Delay each certificate by 300ms
                    });
                } else {
                    // Reset certificates when section goes out of view
                    certificates.forEach((certificate) => {
                        certificate.style.opacity = "0";
                        certificate.style.transform = "translateX(100%)";
                    });
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    observer.observe(certificatesSection);
});