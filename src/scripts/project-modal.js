document.addEventListener('DOMContentLoaded', (event) => {
    const modal = document.getElementById("project-modal");
    const btn = document.getElementById("project-button");
    const close = document.getElementsByClassName("project-close-button")[0];

    btn.onclick = () => {
        modal.style.display = "block";
    }

    close.onclick = () => {
        modal.style.display = "none";
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    //dinmamic content
    const prevBtn = document.querySelector('.project-prev-button');
    const nextBtn = document.querySelector('.project-next-button');
    const content = document.getElementById('project-content');

    const JannyContent = `<div class="project-description">
        <h2>Jannyfer Souza</h2>
        <p>E uma profissional renomada no campo da arquitetura,
            com uma paixão inigualável por criar espaços que inspiram
            e transformam vidas. Sua abordagem única combina a estética
            contemporânea com a funcionalidade, resultando em projetos
            elegantes e atemporais.
        </p>
        <p>
            Acreditando que a arquitetura é uma arte capaz de transformar
            vidas, Jannyfer busca criar espaços que reflitam a personalidade
            e o estilo de vida de seus clientes. Através de um diálogo
            constante e transparente, ela busca entender as necessidades e
            os desejos de cada projeto, garantindo resultados que superam
            as expectativas.
        </p>
    </div>
    <div class="project-image">
        <img src="./media/janny.png" alt="Architecture studio workspace" />
    </div>`

    const contentList = [JannyContent];
    let currentPage = 0;
    const totalPages = contentList.length - 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage <= 0) {
            currentPage = 0;
        }
        else {
            currentPage--;
        }
        updateContent();
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage >= totalPages) {
            currentPage = totalPages;
        }
        else {
            currentPage++;
        }
        updateContent();
    });

    function updateContent() {
        content.innerHTML = contentList[currentPage];
        // console.log(content)
    }
});