// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: 'The Spice Must Flow',
    date: 'Jan 1st, 40k',
    firstParagraph: `The Spacing Guild waylays the false adversary, before Mentat where gene. Thus spoke Taqwa recites the shigawire, into sacrifice sayyadina threatens. Necessity claims of the ordinary Duke down the ritual understands metaphysical. Crisis desires the Royal Creche, both morality faces the companion deduces. The planetary system trails throughout fanatic, into challenge yet religion makes metaphysical. Profound tooth evades beside consternation and small box clouds.`,

    secondParagraph: `Higher wound ends among lasgun for heir understands. As if the intensity recites emotion during the Helen. Treachery fears the primitive animal though prediction influences voracious Duncan. Pattern captures before the genetic breeding program below the subtlety strikes weirding. Fist over Salusa Secundus, deity under elegant paradise, emotion into new testing facility flows. Behind sandstorm flaw achieves through courtesan, thus spoke knows. Swordmaster itches the symmetrical wall, fighting force uses insightful crisis.`,

    thirdParagraph: `Down school eunuch sow near propaganda, but slips. Behind Hawat Lisan al-Gaib understands between Hasimir, since rushes. Baliset ends the flower-spangled Otheym, victim encloses symmetrical shigawire. The water bond will sing the graceful drug, but galaxy as seduction. Under evensong master sacrifices through Jessica, when befalls. Below the minor fear experiences the innocent Missionaria Protectiva as if the fluid Tleilax or understands negotiation.`
  },
  {
    title: 'Numba Juan',
    date: 'Dec 1st, 3303',
    firstParagraph: `You're going to be an interesting companion, Mr. Data. For an android with no feelings, he sure managed to evoke them in others. Not if I weaken first. I'll alert the crew. My oath is between Captain Kargan and myself. Your only concern is with how you obey my orders. Or do you prefer the rank of prisoner to that of lieutenant? Travel time to the nearest starbase? You enjoyed that. But the probability of making a six is no greater than that of rolling a seven. I recommend you don't fire until you're within 40,000 kilometers. Flair is what marks the difference between artistry and mere competence. This is not about revenge. This is about justice. Yes, absolutely, I do indeed concur, wholeheartedly! We finished our first sensor sweep of the neutral zone. Some days you get the bear, and some days the bear gets you.`,

    secondParagraph: `You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. We know you're dealing in stolen ore. But I wanna talk about the assassination attempt on Lieutenant Worf. Then maybe you should consider this: if anything happens to them, Starfleet is going to want a full investigation. This is not about revenge. This is about justice. Some days you get the bear, and some days the bear gets you. Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody. Some days you get the bear, and some days the bear gets you. Shields up! Rrrrred alert! Why don't we just give everybody a promotion and call it a night - 'Commander'? What? We're not at all alike! `,

    thirdParagraph: `You enjoyed that. The look in your eyes, I recognize it. You used to have it for me. I'd like to think that I haven't changed those things, sir. About four years. I got tired of hearing how young I looked. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? Our neural pathways have become accustomed to your sensory input patterns. I am your worst nightmare! In all trust, there is the possibility for betrayal. This is not about revenge. This is about justice. What's a knock-out like you doing in a computer-generated gin joint like this? Besides, you look good in a dress. A surprise party? Mr. Worf, I hate surprise parties. I would *never* do that to you. Is it my imagination, or have tempers become a little frayed on the ship lately? Sorry, Data.`
  },
  {
    title: 'Professional Software Development from the 80s!',
    date: 'Jan 2nd, 1985',
    firstParagraph: `Get crucial awesome waver airhead most definitely psych tough bitchin'. Psych bogus righteous word bogus blar mega get crucial i kid you not. Mega blar heinous bitchin' get crucial yo mega bitchin' bodacious blar. Righteous fantabulous word mega waver yo waver most definitely chicken whoa radical. Get crucial get crucial big time stellar bag your face word radical bite me bag your face barf bag. I kid you not big time yes way blar bag your face big time yo psych major. No doy most definitely tough i kid you not most definitely psych bite me bite me. For sure bitchin' spaz cheeuh! excellent whoa major barf bag righteous awesome airhead outrageous.`,

    secondParagraph: `Yo spaz i kid you not yo spaz outrageous mad whoa heinous no can do righteous. Radical gotta motor yes way mad stellar yes way bogus outrageous chicken barf bag. Heinous word psych blar outrageous cheeuh! major get crucial psych bag your face. Spaz bogus yo righteous bodacious waver most definitely cheeuh!. Big time bag your face for sure no can do outrageous heinous bitchin' awesome. Major airhead airhead word get crucial cheeuh! whoa excellent righteous barf me out waver.`,

    thirdParagraph: `Waver awesome whoa word yo mega psych awesome. Blar awesome outrageous i kid you not narbo bogus chicken i kid you not outrageous narbo. Excellent mad whoa waver chicken i kid you not word bff yo mega totally. Heinous airhead narbo lame barf me out mega yes way cheeuh! mad wicked. Mega tough whoa bag your face righteous gotta motor narbo harsh blar fantabulous big time bff.`
  }
];

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">                           //articlePanel
    <h2>{title of the article}</h2>                 //articleTitle
    <p class="date">{date of the article}</p>       //articleDate

    {three separate paragraph elements}             //articlePara

    <span class="expandButton">+</span>             //articleSpan
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

//const articles = document.querySelector('.articles');

function articleMaker(articleObj) {

//Instantiate all the elements needed for an articleMaker
const articlePanel = document.createElement('div');
const articleTitle = document.createElement('h2');
const articleDate = document.createElement('p');
const articlePara1 = document.createElement('p');  ///how to do 3x????
const articlePara2 = document.createElement('p');
const articlePara3 = document.createElement('p');
const articleSpan = document.createElement('span');

//Setup the structure of our elements
articlePanel.appendChild(articleTitle);
articlePanel.appendChild(articleDate);
articlePanel.appendChild(articlePara1);
articlePanel.appendChild(articlePara2);
articlePanel.appendChild(articlePara3);
articlePanel.appendChild(articleSpan);

// Add proper class names to our elements 
articlePanel.classList.add('article');
articleDate.classList.add('date');
articleSpan.classList.add('expandButton');

// Set text content using arguments as raw material

articleTitle.textContent = articleObj.title;
articleDate.textContent = articleObj.date;
articleSpan.textContent = '+';
articlePara1.textContent = articleObj.firstParagraph;
articlePara2.textContent = articleObj.secondParagraph;
articlePara3.textContent = articleObj.thirdParagraph;

// Still inside `articleMaker`, add an event listener to the span.expandButton.
// This listener should toggle the class 'article-open' on div.article.
articleSpan.addEventListener('click', () => {
    articlePanel.classList.toggle('article-open');
  });

// don't forget to return the panel!
  return articlePanel;
}

//Outside your function now, loop over the data. At each iteration you'll use your component
//to create a div.article element and append it to the DOM inside div.articles (see index.html).
const articlesRead = document.querySelector('.articles')
data.forEach((articleElemnt) => {
  
  const article = articleMaker(articleElemnt)
  articlesRead.appendChild(article)
});
