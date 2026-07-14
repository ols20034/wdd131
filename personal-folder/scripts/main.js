 const facts = [
  "Mountainmen often traveled 20–30 miles a day on foot.",
  "The rendezvous was the biggest social event of the year.",
  "Beaver pelts were once worth more than gold.",
  "Mountainmen relied heavily on Native American knowledge."
];

const factBtn = document.getElementById("fact-btn");
const factBox = document.getElementById("fact-box");

factBtn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const fact = facts[randomIndex];

  factBox.textContent = fact;

  if (fact.includes("gold")) {
    factBox.style.color = "var(--accent2)";
  } else {
    factBox.style.color = "black";
  }
});

const events = [
  {
    title: "School Days",
    image: "images/schooldays.png",
    alt: "School Days living history event",
    description: `A hands‑on educational experience designed for students to explore the daily life, 
    skills, and culture of the 1800s frontier. School groups rotate through interactive stations 
    featuring blacksmithing, trapping, fire‑starting, crafts, and historical demonstrations. 
    Perfect for teachers seeking an immersive history field trip.`
  },
  {
    title: "Boar Black Powder Shoot",
    image: "images/boarshoot.png",
    alt: "Boar black powder shoot",
    description: `A competitive black powder shooting event featuring boar‑themed targets and 
    traditional marksmanship challenges. Participants test their accuracy and skill using 
    period‑appropriate firearms in a safe, supervised environment. Spectators are welcome to 
    watch and learn about frontier shooting traditions.`
  },
  {
    title: "Mountainman Rendezvous",
    image: "images/rendezvous.png",
    alt: "Mountainman Rendezvous",
    description: `Our signature gathering celebrating the rugged lifestyle of the 1800s mountainmen. 
    Enjoy primitive camping, trading, storytelling, competitions, and demonstrations of 
    frontier skills. Whether you're a reenactor or a first‑time visitor, the Rendezvous offers 
    an unforgettable living‑history experience.`,
    flyer: "images/rendezvous_flyer.docx"
  },
  {
    title: "Thanksgiving Turkey Shoot",
    image: "images/turkeyshoot.png",
    alt: "Thanksgiving turkey shoot",
    description: `A seasonal black powder shooting event held in the spirit of friendly competition. 
    Shooters compete for prizes—including turkeys—using traditional muzzleloaders. A fun and 
    festive way to celebrate the Thanksgiving season while honoring frontier marksmanship.`
  }
];