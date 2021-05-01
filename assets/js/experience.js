//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Member Technical Staff",
    cardImage: "assets/images/experience-page/imstrong.jpeg",
    place: "Imstrong",
    time: "(Jan, 2020 - Present)",
    desp: "<li>Joined as a Backend Developer (GoLang & NodeJS) in the small product team.</li> <li>Promoted to handle the whole cloud infrastructure that spanned over AWS & GCP.</li> <li>Did AI/ML Research & Development to enhance our product’s user experience.</li> <li>Integrated many third-party services, like MUX, AWS VOD solution, Razorpay & Stripe payment gateways.</li>",
  },
  {
    title: "Senior Software Engineer",
    cardImage: "assets/images/experience-page/sysvine.png",
    place: "Sysvine Technologies",
    time: "(Apr, 2018 - Dec 2019)",
    desp: "<li>Elsevier - GeoFacets (BHP)</li> <li>Digitizes customers raw data, extracts the Metadate & Content, including geotagging for map-based discovery, and indexes the data</li> <li>PelotonBlockchain</li> <li>Peloton Blockchain provides solutions for issuance and trading of securities. Offers Peloton Exchange that enables the securitized products to be traded with other products or currencies (either fiat or cryptocurrency).</li> <li>TurboPro</li> <li>A cloud-based custom ERP product that is for Erection companies to manage their supply chain, finance, orders and inventory.</li>",
  },
  {
    title: "Software Engineer",
    cardImage: "assets/images/experience-page/sysvine.png",
    place: "Sysvine Technologies",
    time: "(Dec, 2015 - Mar 2018)",
    desp:"<li>Started my career as a Java developer and worked on many client projects. Learnt and worked in many programming languages with various level of team.</li> <li>Broadridge - Dojima Trade & Clear</li> <li>Dojima Clear is a platform for clearing the traded derivative instruments</li> <li>Order and Market data management service using Fix protocol. Integrated many clearing services using FIX, FIXML, NASDAQ Genium API</li> <li>HealthPractice</li> <li>Hospital Information Management Solution for Indian Healthcare Market.  HealthPractice is a desktop app for the Hospital Information Management.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "PClub Summer Of Code 2020",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
  {
    title: "30 DaysofFlutter",
    cardImage: "assets/images/experience-page/5.jpg",
    description:
      "Helping beginners from their first steps in Flutter to building fully functional cross-platform applications.",
  },
  {
    title: "Garuda Hacks",
    cardImage: "assets/images/experience-page/6.jpg",
    description:
      "MLH sponsored Indonesia's premier Global Virtual Hackathon on 14 - 16th August 2020.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "HakinCode",
    image: "assets/images/experience-page/hakin.png",
    time: "06/2020 - 08/2020",
    desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
  {
    title: "Google Summer of Code",
    image: "assets/images/experience-page/gsoc.png",
    time: "03/2020 - 08/2020",
    desp: "<li>Google Summer of Code is a global program focused on introducing students to open source software development.</li><hr /><li>It is a great platform to explore new areas, maybe discover a new career path!</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
