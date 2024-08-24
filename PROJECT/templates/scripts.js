const papers = [
    {
        title: "Great Memory, Shallow Reasoning: Limits of kNN-LMs",
        authors: "Shangyi Geng Wenting Zhao Alexander M Rush Cornell University {sg2323, wz346, arush}@cornell.edu",
        abstract: "K-nearest neighbor language models (kNNLMs), which integrate retrieval with next-word prediction",
        link: "https://arxiv.org/pdf/2408.11815"
    },
    {
        title: "A PERCOLATION MODEL OF EMERGENCE: ANALYZING TRANSFORMERS TRAINED ON A FORMAL LANGUAGE",
        authors: "Ekdeep Singh Lubana∗1,5, Kyogo Kawaguchi∗2,3,4, Robert P. Dick5, Hidenori Tanaka1,61CBS-NTT Program in Physics of Intelligence, Harvard University",
        abstract: "Increase in data, size, or compute can lead to sudden learning of specific capabilities by a neural network—a phenomenon often called “emergence”",
        link: "https://arxiv.org/pdf/2408.12578"
    },
    {
        title: "PA-LLaVA: A Large Language-Vision Assistant for Human Pathology Image Understanding",
        authors: "Dawei Dai1, Yuanhui Zhang1, Long Xu1, Qianlan Yang2, Xiaojing Shen2, Shuyin Xia1, and Guoyin Wang1,3",
        abstract: "The previous advancements in pathology image understanding primarily involved developing models tailored tospecific tasks",
        link: "https://arxiv.org/pdf/2408.09530"
    },
    {
        title: "Transformers As Approximations of Solomonoff Induction",
        authors: "Nathan Young,Michael Witbrock",
        abstract: "Solomonoff Induction is an optimal-in-the-limit unboundedalgorithm for sequence prediction, representing a Bayesian mixture ofevery computable probability distribution and performing close to optimally in predicting any computable sequence",
        link: "https://arxiv.org/pdf/2408.12065"
    },
    {
        title: "On the Undecidability of Artificial Intelligence Alignment: Machines that Halt",
        authors: "Gabriel A. Melo1,*, Marcos R. O. A. Maximo ´, Nei Y. Soma, and Paulo A. L. Castro1",
        abstract: "The inner alignment problem, which asserts whether an arbitrary artificial intelligence (AI) model satisfices a non-trivial alignment function of its outputs given its inputs, is undecidable",
        link: "https://arxiv.org/pdf/2408.08995"
    },
    {
        title: "Preoperative Rotator Cuff Tear Prediction from Shoulder Radiographsusing a Convolutional Block Attention Module-Integrated Neural Network",
        authors: "Chris Hyunchul Jo1†, Jiwoong Yang",
        abstract: "This is a brief abstract of the research paper...",
        link: "https://arxiv.org/pdf/2408.09894"
    },
    {
        title: "Reasoning and Tools for Human-Level Forecasting",
        authors: "Elvis Hsieh, Preston Fu, Jonathan Chen",
        abstract: "Language models (LMs) trained on web-scaledatasets are largely successful due to their ability to memorize large amounts of training data,even if only present in a few examples",
        link: "https://arxiv.org/pdf/2408.12036"
    },
    {
        title: "Towards Aligned Data Removal via Twin Machine Unlearning",
        authors: "Yuyao Sun1, Zhenxing Niu1",
        abstract: "Modern privacy regulations have spurred the evolution of machine unlearning, a technique that enables the removal of datafrom an already trained ML model without requiring retraining from scratch.",
        link: "https://arxiv.org/pdf/2408.11433"
    },
    {
        title: "Linking Robustness and Generalization:A k*Distribution Analysis of Concept Clustering in Latent Space for Vision Models",
        authors: "Shashank Kotyan",
        abstract: "Most evaluations of vision models use indirect methods to assess latent space quality",
        link: "https://arxiv.org/pdf/2408.09065"
    },
    {
        title: "Why am I Still Seeing This: Measuring the Effectiveness Of Ad Controls and Explanations in AI-Mediated Ad Targeting Systems",
        authors: "Jane Castleman, Aleksandra Korolova",
        abstract: "Recently, Meta has shifted towards AI-mediated ad targeting mechanisms that do not require advertisers to provide detailed targeting criteria",
        link: "https://arxiv.org/pdf/2408.11910"
    },

    
];
document.addEventListener("DOMContentLoaded", function() {
    // Get the search input and paper cards
    const searchInput = document.querySelector("input[type='search']");
    const paperCards = document.querySelectorAll(".card");

    // Add event listener to the search input
    searchInput.addEventListener("input", function() {
        const searchValue = searchInput.value.toLowerCase();

        // Loop through all paper cards
        paperCards.forEach(card => {
            const title = card.querySelector(".card-title").textContent.toLowerCase();

            // Check if the title includes the search value
            if (title.includes(searchValue)) {
                card.style.display = ""; // Show the card
            } else {
                card.style.display = "none"; // Hide the card
            }
        });
    });
});

function displayPapers() {
    const papersList = document.getElementById('papersList');
    papersList.innerHTML = '';

    papers.forEach((paper, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${paper.title}</h3>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Abstract:</strong> ${paper.abstract}</p>
            <a href="#" onclick="openModal(${index})">Read more</a>
        `;
        papersList.appendChild(article);
    });
}

function openModal(index) {
    const paper = papers[index];
    document.getElementById('modalTitle').innerText = paper.title;
    document.getElementById('modalAuthors').innerText = `Authors: ${paper.authors}`;
    document.getElementById('modalAbstract').innerText = `Abstract: ${paper.abstract}`;
    document.getElementById('modalLink').href = paper.link;
    
    const modal = document.getElementById('paperModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('paperModal');
    modal.style.display = 'none';
}

function searchPapers() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredPapers = papers.filter(paper =>
        paper.title.toLowerCase().includes(input) ||
        paper.abstract.toLowerCase().includes(input)
    );

    const papersList = document.getElementById('papersList');
    papersList.innerHTML = '';

    filteredPapers.forEach((paper, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h3>${paper.title}</h3>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Abstract:</strong> ${paper.abstract}</p>
            <a href="#" onclick="openModal(${index})">Read more</a>
        `;
        papersList.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', displayPapers);
