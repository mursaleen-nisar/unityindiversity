// Change NavBar style on scroll

window.addEventListener("scroll", () => {
    document
      .querySelector("nav")
      .classList.toggle("window-scroll", window.scrollY > 0);
  });

// Show/Hide NavBar Menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open_menu_btn");
const closeBtn = document.querySelector("#close_menu_btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// Close Nav Menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);


// Change languages of sentences

document.addEventListener('DOMContentLoaded', function() {
    // Set English as the default language and highlight the corresponding button
    changeLanguage('english');
});

const languages = {
    kashmiri: [
        "Mutahid aes khada che, takseem che aes giraan: ethaadas manz taqat, takseemas manz kamzoori.",
        "Ethaad chu soun taqat, akh zabardast taqat yus aese eke voute challenge'an peth kabu karnuk ekhtyaar chu devan.",
        "Mukhtalif zabane che Hindustanuk ethaad banavan, yus mushtarke warastuk akh barpuur tapestry chu.",
        "Waryah zabane, akh jazbe - Hindustanuk taqat chu lisane tanu'ass manz.",
        "Tanu'ass manz ham aahange: zabane che mutahid gashan, akh mutharik saqafte symphony banavan.",
        "Hindustanech lisane mosaic: mukhtalif zabane, ethaad te tanu'ech akh daleel.",
    ],
    english: [
        "United we stand, divided we fall: strength in unity, vulnerability in division.",
        "Unity is our strength, a formidable force that empowers us to overcome challenges together.",
        "Diverse languages weave India's unity, a rich tapestry of shared heritage.",
        "Many tongues, one spirit — India's strength lies in linguistic diversity.",
        "Harmony in diversity: languages unite, creating a vibrant cultural symphony.",
        "India's linguistic mosaic: different languages, one story of unity and diversity.",
    ],
    urdu: [
        "Ham mutahid khaday hai, munqasim hai: ethaad mai taqat, takseem mai kamzoori.",
        "Ethaad hamare taqat hai, aik zabardast qovut hai jo hamai mil kr challengu par kabu panay ke taqat dete hai.",
        "Matnu zabane Hindustan kay ethaad ko jodte hai, mushtarka warsay ke aik barpoor tasveer.",
        "Kaie zabane, aik jazba - Hindustan ke taqat lasane tanu mai hai.",
        "Tanu mai ham aahange: zabane mutahid hote hai, aik mutharik saqafte symphony paida karte hai.",
        "Hindustan ke lasane mosaic: mukhtalif zabane, ethaad aur tanu ke aik kahani.",
    ],
    punjabi: [
        "Asin ekjut ham, vande hoye ham, asin digde han: ekta witch takat, wand witch kamazori.",
        "Ekta saadi takat hai, ik shaktishali takat hai jo sanu mil ke chunautian noon door karan di shakti dindi hai.",
        "Vibhinn bhashavan bharat di ekta noon bundian hana, joe sanjhi virasat di ik ameer misaal hai.",
        "Bahut sarian bhashavan, ik bhavna - bharat di takat bhashai vibhinnta witch hai.",
        "Vibhinnta witch sadbhavana: bhashavan ekjut hundiyan han, ik jeewant sabhyacharak symphony banaundian han.",
        "Bharat da bhashai mosaic: vakh-vakh bhashavan, ekta ate vibhinnta di ek kahani.",
    ],
    hindi: [
        "Ekjut hum khade hai, vibhajit ham girte hai: ekta mai takat, vibhajan mai bhedyataa.",
        "Ekta hamari takat hai, ek durjey shakti hai jo hamai ek saath chunautiyon ko door karne ke liye sashakt banati hai.",
        "Vividh bhashaen bharat ki ekta ka taana-baana bunati hain, sajha virasat ka ek samriddh hissa hai.",
        "Kaie bhashayen, ek bhavna - bharat ki takat bhashai vividhta mai nihit hai.",
        "Vividhta mai sadbhav: bhashaen ekjut hoti hai, ek jeevant sanskritik symphony banati hai.",
        "Bharat ke bhashai mosaic: vibhinn bhashaen, ekta aur vividhta ki ek kahani.",
    ],
    tamil: [
        "Ondrupattu nirkirom, pilavupadugirom: otrumaiyil palam, pilavupaduvathil palaveenam.",
        "Otrumai enbathu namadhu palam, savaalgalai ondraaga samalika namakku adhikaaramalikkum oru valimaiyaana sakthi.",
        "Palveru mozhigal indiavin ottrumaiyai nesavu seikindrana, pagirapatta barampariyathin valamaana kalanjiyam.",
        "Pala mozhigal, ore unarvu - indiavin palam mozhi panmugathanmaiyil ullathu.",
        "Vetrumaiyil nallinakkam: mozhigal ondrinaindhu, thudippaana kalachara symbonia uruvaakkugindrana.",
        "Indiavin mozhiyiyal: palveru mozhigal, ottrumai matrum panmugathanmaiyin oru kadhai.",
    ]
};

function changeLanguage(language) {
    const languageDivs = document.querySelectorAll('.language_sentences');
    const languageSwitchingButtons = document.querySelectorAll('.language_switching-bar button');

    // Remove 'active' class from all buttons
    languageSwitchingButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    const activeButton = Array.from(languageSwitchingButtons).find(button => button.textContent.toLowerCase() === language);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    languageDivs.forEach((languageDiv, index) => {
        const sentenceId = `sentence${index + 1}`;
        const sentenceElement = languageDiv.querySelector(`#${sentenceId}`);
        
        if (sentenceElement) {
            sentenceElement.textContent = languages[language][index];
        }
    });
}
