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

    const project1 = `<div class="project-description">
        <h2>Casa Beira Lago</h2>
        <p>Uma casa aconchegante com o frescor e a bela paisagem de um lago.</p>
    </div>
    <div class="project-image">
        <img src="./media/project1.jpg" alt="Casa beira lago" />
    </div>`

    const project2 = `<div class="project-description">
        <h2>Sala com desing moderno</h2>
        <p>Um desing de interiores feito para uma sala fornecendo um ambiente agradavel.</p>
    </div>
    <div class="project-image">
        <img src="./media/project2.jpg" alt="Casa beira lago" />
    </div>`

    const contentList = [project1, project2];
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