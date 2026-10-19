// =========================
// DADOS DOS PRODUTOS
// =========================

const products = {
    "produto-01": {
        name: "Bolsa Vitória",
        description:
            "Bolsa artesanal em crochê, produzida sob encomenda e com possibilidade de personalização de cores.",
        price: "A partir de R$ 150,00",
        customization: "Outras cores disponíveis",
        production: "Sob encomenda",
        image: "img/bolsa_Vitória3.png"
    },

    "produto-02": {
        name: "Bolsa Bruna",
        description:
            "Bolsa artesanal em crochê, produzida sob encomenda e com possibilidade de personalização de cores.",
        price: "A partir de R$ 150,00",
        customization: "Outras cores disponíveis",
        production: "Sob encomenda",
        image: "img/bolsa_bruna.png"
    },

    "produto-03": {
        name: "Bolsa Jane",
        description:
            "Bolsa artesanal em crochê, produzida sob encomenda e com possibilidade de personalização de cores.",
        price: "A partir de R$ 150,00",
        customization: "Outras cores disponíveis",
        production: "Sob encomenda",
        image: "img/bolsa_jane.png"
    }
};


// =========================
// ELEMENTOS DO MODAL
// =========================

const modal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.querySelector(".modal-overlay");

const productButtons =
    document.querySelectorAll(".open-product");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.querySelector(".modal-description");

const modalProductImage =
    document.getElementById("modalProductImage");

const modalWhatsapp =
    document.getElementById("modalWhatsapp");

const modalDetails =
    document.querySelectorAll(".modal-details strong");


// =========================
// ABRIR MODAL
// =========================

productButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const productId =
            button.dataset.product;

        const product =
            products[productId];

        if (!product) {
            return;
        }


        // Nome
        modalTitle.textContent =
            product.name;


        // Descrição
        modalDescription.textContent =
            product.description;


        // Foto
        modalProductImage.src =
            product.image;

        modalProductImage.alt =
            `Foto da ${product.name}`;

        const whatsappMessage =
            `Olá! Vim pelo catálogo do Ateliê Taty Bernardes e gostaria de encomendar a ${product.name}.`;

        modalWhatsapp.href =
            `https://wa.me/5524988668077?text=${encodeURIComponent(whatsappMessage)}`;


        // Informações
        modalDetails[0].textContent =
            product.price;

        modalDetails[1].textContent =
            product.customization;

        modalDetails[2].textContent =
            product.production;


        // Abre o modal
        modal.classList.add("active");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    });

});


// =========================
// FECHAR MODAL
// =========================

function closeModal() {

    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


// Botão X
modalClose.addEventListener(
    "click",
    closeModal
);


// Clique no fundo
modalOverlay.addEventListener(
    "click",
    closeModal
);


// Tecla ESC
document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closeModal();
        }

    }
);


// =========================
// NAVEGAÇÃO ATIVA
// =========================

const sections =
    document.querySelectorAll(
        "#inicio, #modelos, #personalizacao, #como-encomendar, #sobre"
    );

const navLinks =
    document.querySelectorAll(".nav a");


function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop - 180 &&
            window.scrollY <
            sectionTop + sectionHeight - 180
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveMenu
);

updateActiveMenu();


// =========================
// MENU MOBILE
// =========================

const menuToggle =
    document.getElementById("menuToggle");

const mobileNav =
    document.querySelector(".nav");


menuToggle.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );

        const menuOpen =
            mobileNav.classList.contains(
                "active"
            );

        menuToggle.setAttribute(
            "aria-expanded",
            menuOpen
        );


        if (menuOpen) {

            menuToggle.setAttribute(
                "aria-label",
                "Fechar menu"
            );

        } else {

            menuToggle.setAttribute(
                "aria-label",
                "Abrir menu"
            );

        }

    }
);


// =========================
// FECHAR MENU MOBILE
// =========================

mobileNav
    .querySelectorAll("a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }
        );

    });


// =========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =========================

const revealElements =
    document.querySelectorAll(
        ".models, .customization, .order, .about, .contact, .footer"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12,
            rootMargin:
                "0px 0px -60px 0px"
        }
    );


setTimeout(() => {

    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });

}, 100);