 // Details data for each person, now with birthdays and no images
    const detailsData = {
        "Domingo Lam-co": {
            title: "Domingo Lam-co",
            content: "Domingo Lam-co was a Chinese immigrant from Fujian, China, who arrived in the Philippines in the late 1600s. He converted to Catholicism and adopted the surname Mercado. He is the great-great-great-grandfather of José Rizal."
        },
        "Lakandula": {
            title: "Lakandula",
            content: "Lakandula was one of the last native rulers of Tondo. He is considered a distant ancestor of José Rizal through the maternal line."
        },
        "Francisco Mercado": {
            title: "Francisco Mercado",
            content: "Francisco Mercado was the son of Domingo Lam-co and continued the Mercado family line. He is part of José Rizal's paternal ancestry."
        },
        "Juan Mercado": {
            title: "Juan Mercado",
            content: "Juan Mercado was the grandson of Domingo Lam-co and father of Francisco Engracio Mercado Rizal."
        },
        "Manuel de Quintos": {
            title: "Manuel de Quintos",
            content: "Manuel de Quintos was a maternal ancestor of José Rizal, part of the Alonso/Realonda family line."
        },
        "Regina Ursua": {
            title: "Regina Ursua",
            content: "Regina Ursua was a maternal ancestor of José Rizal, part of the Alonso/Realonda family line."
        },
        "Francisco Engracio Mercado Rizal": {
            title: "Francisco Engracio Mercado Rizal",
            content: "Francisco Engracio Mercado Rizal (May 11, 1818 – January 5, 1898) was José Rizal's father. He was a farmer and a well-respected member of the community in Calamba, Laguna."
        },
        "Teodora Alonso Realonda": {
            title: "Teodora Alonso Realonda",
            content: "Teodora Alonso Realonda (November 9, 1827 – August 16, 1911) was José Rizal's mother. She came from a family of mixed Tagalog and Spanish ancestry and was known for her intelligence and strong character."
        },
        "Saturnina": {
            title: "Saturnina Rizal",
            content: "Saturnina Rizal (June 29, 1850 – September 14, 1913) was the eldest sibling of José Rizal. She was known for her support and care for her family."
        },
        "Paciano": {
            title: "Paciano Rizal",
            content: "Paciano Rizal (March 9, 1851 – April 13, 1930) was José Rizal's only brother. He was a revolutionary and played a significant role in the Philippine Revolution."
        },
        "Narcisa": {
            title: "Narcisa Rizal",
            content: "Narcisa Rizal (October 29, 1852 – 1939) was one of José Rizal's sisters. She was known for her kindness and support for her brother."
        },
        "Olympia": {
            title: "Olympia Rizal",
            content: "Olympia Rizal (1855 – 1887) was one of José Rizal's sisters. She died young but was remembered fondly by her family."
        },
        "Lucia": {
            title: "Lucia Rizal",
            content: "Lucia Rizal (1857 – 1919) was one of José Rizal's sisters. She was supportive of her brother's endeavors."
        },
        "María": {
            title: "María Rizal",
            content: "María Rizal (1859 – 1945) was one of José Rizal's sisters. She was close to her brother and family."
        },
        "José Protacio Rizal": {
            title: "José Protacio Rizal",
            content: "José Protacio Rizal Mercado y Alonso Realonda (June 19, 1861 – December 30, 1896) is the national hero of the Philippines. He was a writer, reformist, and martyr whose works inspired the Philippine Revolution."
        },
        "Concepción": {
            title: "Concepción Rizal",
            content: "Concepción Rizal (1862 – 1865) was one of José Rizal's sisters. She died at a young age."
        },
        "Josefa": {
            title: "Josefa Rizal",
            content: "Josefa Rizal (September 6, 1865 – May 1, 1945) was one of José Rizal's sisters. She was known for her strong will and independence."
        },
        "Trinidad": {
            title: "Trinidad Rizal",
            content: "Trinidad Rizal (June 28, 1868 – May 1951) was one of José Rizal's sisters. She was a supporter of her brother and the revolution."
        },
        "Soledad": {
            title: "Soledad Rizal",
            content: "Soledad Rizal (February 16, 1870 – September 28, 1929) was the youngest sibling of José Rizal. She was known for her intelligence and dedication."
        }
    };

    function showDetails(name) {
        const details = detailsData[name];
        if (details) {
            const detailsDiv = document.getElementById('details');
            detailsDiv.classList.remove('closing');
            detailsDiv.style.display = 'block';
            document.getElementById('details-content').innerHTML =
                `<div class="details-title">${details.title}</div>
                 <div class="details-content">${details.content}</div>`;
            detailsDiv.classList.add('active');
            window.scrollTo({ top: detailsDiv.offsetTop - 40, behavior: 'smooth' });
        }
    }

    function closeDetails() {
        const detailsDiv = document.getElementById('details');
        detailsDiv.classList.remove('active');
        detailsDiv.classList.add('closing');
        setTimeout(() => {
            detailsDiv.classList.remove('closing');
            detailsDiv.style.display = 'none';
        }, 500); // Match popOut animation duration
    }