import restaurant from './restaurant.jpg';


const about = function(){

    const parentElement = document.getElementById('content');
    const story = document.createElement('div');
    const textContainer = document.createElement('div');
    const storyTitle = document.createElement('h2');
    const storyText = document.createElement('div');
    const storyImage = document.createElement('img');

    story.classList.add('story')
    textContainer.classList.add('text-container')
    storyTitle.classList.add('story-title')
    storyText.classList.add('story-text')
    storyImage.classList.add('story-image')
    story.classList.add('story')

    const storyString = `In the early 1980s, the Moretti family, hailing from the small town of Verona in Italy, set their sights on the United States in search of new opportunities. With dreams of sharing their culinary heritage with the American palate, they landed in the vibrant city of New York in 1983.<br><br>
    Overwhelmed by the hustle and bustle of the city, the Morettis encountered countless challenges as they navigated their way through the complexities of starting a new life in a foreign land. Undeterred by the obstacles, they stumbled upon a quaint building in the heart of Brooklyn, with its faded exterior reflecting the struggles they were about to face.<br><br>
    With their limited savings and an unwavering determination, the Morettis transformed the space into an enchanting restaurant, opening its doors to the public on July 4, 1984. They aptly named it "Spiceo" as a homage to the rich blend of spices that would set their dishes apart from the rest.<br><br>
    As the tantalizing aromas wafted through the streets, Spiceo quickly became a local sensation. The Morettis infused their Italian heritage into every aspect of the restaurant, from the rustic decor reminiscent of their ancestral home to the traditional family recipes passed down through generations.<br><br>
    The secret behind Spiceo's success lay in the Morettis' carefully guarded spice blends. Each dish on the menu was elevated by the magical combination of herbs, spices, and secret family ingredients, creating a symphony of flavors that captivated the taste buds of patrons. The rich tomato sauces, handmade pasta, and wood-fired pizzas made Spiceo a culinary destination like no other.<br><br>
    As the years passed, Spiceo continued to thrive, attracting a loyal following of locals and tourists alike. The Morettis' warm hospitality and dedication to their craft made every visit to Spiceo an unforgettable experience. The walls of the restaurant told the family's story, adorned with vintage photographs showcasing their journey from Verona to Brooklyn, creating an ambiance that transported guests to the heart of Italy.<br><br>
    Spiceo became an integral part of the Brooklyn community, a place where families celebrated milestones, friends gathered to catch up, and love blossomed over candlelit dinners. With each passing year, the Morettis expanded their menu, introducing new dishes that blended traditional Italian recipes with innovative twists, keeping Spiceo at the forefront of the culinary scene.<br><br>
    Now, over four decades later, Spiceo stands as a testament to the Moretti family's legacy. Their commitment to quality, authenticity, and their beloved spice blends has allowed them to endure and flourish in the ever-evolving culinary landscape of New York City. Today, patrons can still savor the flavors and experience the warmth of the Moretti family's hospitality, making Spiceo a true gem in the city's dining scene.`;
    

    storyTitle.innerHTML = 'Our Story'
    storyText.innerHTML = storyString
    storyImage.src = restaurant



    parentElement.appendChild(story);
    story.appendChild(textContainer);
    textContainer.appendChild(storyTitle);
    textContainer.appendChild(storyText);
    story.appendChild(storyImage)


}

export {about}