const teamMembers = [{
        name: "Marco Bianchi",
        role: "Designer",
        email: "marcobianchi@team.com",
        img: "img/male1.png"
    },
    {
        name: "Laura Rossi",
        role: "Front-end Developer",
        email: "laurarossi@team.com",
        img: "img/female1.png"
    },
    {
        name: "Giorgio Verdi",
        role: "Back-end Developer",
        email: "giorgioverdi@team.com",
        img: "img/male2.png"
    },
    {
        name: "Marta Ipsum",
        role: "SEO Specialist",
        email: "martarossi@team.com",
        img: "img/female2.png"
    },
    {
        name: "Roberto Lorem",
        role: "SEO Specialist",
        email: "robertolorem@team.com",
        img: "img/male3.png"
    },
    {
        name: "Daniela Amet",
        role: "Analyst",
        email: "danielaamet@team.com",
        img: "img/female3.png"
    }
];
//Recupero elementi Dom 
const cardContainer = document.getElementById('cardContainer')


// Creo funzione che genera struttura della card
const generaCard = () => {
    const cardSingola = `
                 <div class="col-12 col-sm-6 col-md-4">
                    <div class="card">
                        <div class="img-container">
                            <img class="img" src="./assets/img/female1.png" alt="">
                        </div>
                        <div class="text-container">
                            <h3>Marco</h3>
                            <p>SEO specialist</p>
                            <p>Email</p>
                        </div>
                    </div>
                </div> 
                `
    return cardSingola;
};

// Ciclo gli elemnti dell'array e inserisco ogniuno in pagina html 

for (let i = 0; i < teamMembers.length; i++) {
    let card = generaCard(teamMembers[i]);
    cardContainer.innerHTML += card;
}