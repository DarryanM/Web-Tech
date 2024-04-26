


var features = '';
function searchPage(features)
{
    $('#SiteSearch1-dialog').dialog('open');
    $('#SiteSearch1-dialog').empty();
    searchResults('SiteSearch1', 'SiteSearch1-dialog', 250, 5, false, true, false, false, '_parent', 'No results', ' result(s) found for search term: ', 'seconds');
    $('#SiteSearch1-dialog').dialog('option', 'position', 'center');
    return false;
}

$(document).ready(function()
{
    searchParseURL('SiteSearch1');
    $("#SiteSearch1-dialog").dialog(
    {
        modal: true,
        width: 400,
        height: 300,
        position: { my: 'center', at: 'center', of: window },
        resizable: true,
        draggable: true,
        closeOnEscape: true,
        show: false,
        hide: false,
        autoOpen: false,
        buttons:
        {
            Close: function()
            {
                $(this).dialog('close');
            }
        }
    });
});

// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
    this.url = url;
    this.title = title;
    this.keywords = keywords;
    this.description = description;
    return this;
}

function SearchDatabase()
{
    database_length = 0;
    this[database_length++] = new SearchPage("index.html", "Outter Space", "city   ", "");
    this[database_length++] = new SearchPage("planets.html", "MERCURY", "This is the closest planet to the sun, at a distance of 57.91 million kilometers or 35.98 million miles away It takes sunlight 3.2 minutes to travel from the Sun to Mercury and only 88 earth days to go completely arround the sun Mercury orbits the sun at a speed of about 29 miles or 47 kilometers per second Mercury has a diameter of 4.879 kilometers or 3.032 miles, which makes it only a little bigger than the Earth's Moon It is the smallest planet in our solar system with a size of about a third of our Earth   ", "");
    this[database_length++] = new SearchPage("planets.html", "VENUS", "The 2nd planet away from the Sun at a distance of 108.2 million kilometers or 67.24 million miles  Light from the sun takes 6 minutes to reach Venus This planet has a diameter of 12.104 kilometers or 7.521 miLes, which makes it a little smaller than Earth Venus is the hottest planet because its atmosphere is made up of mainly carbon dioxide and thick suphuric acid cloud cover which traps the heat from the sun It takes 224 Earth days for Venus to circle the Sun at a speed of 35 km/s  78,000 mph     ", "");
    this[database_length++] = new SearchPage("planets2.html", "EARTH", "The 3rd planet from the sun and our home, at a distance of 147 million kilometers or 35.98 million miles. It takes 365 days to orbit the sun at a speed of 67,000 mph (107,000 km/h). Sunlight 8 minutes and 20 seconds to travel to Earth. Earth is the only know planet in our solar system that supports life. 71% of the surface is covered by water and 29% by land. The atmosphere is 78% nitrogen, 21% oxygen, 0.9% argon, and 0.1% other gases. Earth has a diameter of 7,926 miles (about 12,756 kilometers), a little less than twice the size of MARS. ", "");
    this[database_length++] = new SearchPage("planets2.html", "MARS", "The Red planet. 4th planet which is 227.9 million kilometers or 141.6 million miles away from the Sun. Light from the sun takes 13 minutes to get to this planet. With a diameter of 4,222 miles (6,794 km), Mars is about half the size of Earth. The gravity is about 38% that of Earth. Mars has a reddish look becasue of oxidization or rusting, of the iron in the rocks on the surface. This rust gets eventually swept up into the atmposhere. A day on Mars takes 24.6 hours, while a complete orbit around the sun takes 687 days. ", "");
    this[database_length++] = new SearchPage("planets3.html", "JUPITER", "The largest planet in our solar system with a diameter of 88.846 miles / 142.984 kilometers. It is about 11 times bigger than Earth. Jupiter has a distance of 779 million kilometers, or 484 million miless away from the Sun. Jupiter's surface is mostly swirling gasses and liquids. Jupiter is made up of 90% hydrogen and 10% helium. A similar composition to the sun. Jupiter has 79 moons and has 3 faint, dark, and narrow planetary rings which is made up of tiny rock fragments and dust. Jupiter takes 10 hours to complete a rotation and 11.86 years (4,333 days) to orbit the Sun at a speed of 29,236 mph or 13.07 km/s. Jupiter has centries-old storms, some of which are bigger than the earth.  ", "");
    this[database_length++] = new SearchPage("planets3.html", "SATURN", "The planet with the rings.The 5th planet and second largest planet which is 1.4 billion kilometers / 886 million miles away from the Sun. As a result it takes sunlight 80 minutes to get to Saturn. Saturn is almost 9.5 times bigger than Earth with a diameter of 74,897 miles (120,500 kilometers). Just like Jupiter, Saturn is made up of hydogen and helium. One day on Saturn takes 10.7 hours and one full orbit around the Sun takes 29.4 Earth years (10,756 Earth days). At Last count Saturn had 146 moons attached to its orbit. The rings are made up of comets, asteroids, or shattered moon fragments that got caughtin its powerful gravitaional force.  ", "");
    this[database_length++] = new SearchPage("planets4.html", "URANUS", "One of the two Ice Giant Planets. Uranas is the 7th planet away from the sun Uranus is the seventh planet from the Sun, with a distance of around 1.78 billion miles or 2.9 billion kilometers away. Uranus has a diameter of 31,763 miles (51,118 kilometers), thus making it the 3rd Largest planet in our Solar System. It is about 4 times wider than Earth. With a speed of 15,290 miles per hour, It takes 17 hours to make a full roation and 84 Earth years (30,687 Earth days) to orbit the Sun, the longest amongst all the 8 planets. Sun light takes 2 hours and 40 minutes to get to Uranus. The atmosphere consists mainly of hydrogen and helium. The surface is significantly enriched in water, ammonia and methane. Amongst all the planets, Uranas has the coldest atmosphere.  ", "");
    this[database_length++] = new SearchPage("planets4.html", "NEPTUNE", "The Furtherest planet and the fourth largest planet in our solar system. Neptune also know to have very powerful winds. Neptune and Uranus are called the ICE GIANTS because they have extremely cold tempretures, as sunlight takes 4.16 hours or 250 minutes to reach neptune. Neptune's atmosphere is made up of helium and hydrogen with traces of methane. The planet’s surface is consists of hot dense fluid of “icy” materials (water, methane, and ammonia). Neptune is about four times wider than Earth with diameter of 49,528 km (30,775 miles). It takes about 16 hours for one rotation and 165 Earth years (60,190 Earth days) to orbit the Sun. ", "");
    this[database_length++] = new SearchPage("sun.html", "The SUN", "At the center of our Solar System is a star called THE SUN. The sun is the largest object in our solar system with a diameter of about 865,000 miles (1.4 million kilometers). Some describe it as a glowing sphere of hot gas. The sun is actually made up of gases and plasma. The Sun has a composition of about 73% Hydrogen, 25% Helium ( which is formed by the constant fusing together of the hydrogen, through a process called Nuclear Fusion), and the remaining 2% is made up of small amounts of Iron, Nickel, Oxygen, Silicon, Sulfur, Magnesium, Carbon, Neon, Calcium, and Chromium. Quick Sun Facts. The Sun is the closest star to our planet. The Sun is about 4.5 billion years old. The sun warms our planet, provides us with light and is crucial to all life on Earth. The distance between the Sun and Earth is about 149.6 million kilometres or 93 million miles. The Sun’s light takes about 8.3 minutes to reach Earth. The Sun is around 15 million °C (27 million °F) at its core and 5,500°C (9932°F) on its surface. The Sun is so huge that it can it 1.3 million Earths within it.  ", "");
    this[database_length++] = new SearchPage("solarsystem.html", "SOLAR SYSTEM", "Our solar system is made up of: One Star: The SUN Eight Planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune. Atleast 290 Moons Five Dwarf Planets: Pluto, Ceres, Makemake, Haumea, and Eris and millions of asteroids, comets, and meteoroids. All of which are bound together by the force of gravity. Our solar System is located within the Milky Way Galaxy. It's exact location is in the Orion Arm, an outter spiral arm of the Milky Way Galaaxy. Travelling around at speeds of 515,000 mph or 828,000 kph, it is estimated that our solar system takes 230 million years to complete one orbit around the galaxy center. Come Along as we explore the wonders of our Solar System.  ", "");

    return this;
}

function init() {
    var player = videojs('my-player', {
        autoplay: true,
        muted: true
    });
}

function openPic1() {
    document.getElementById("overlay1").style.width = "100%";
}

function closePic1() {
    document.getElementById("overlay1").style.width = "0%";
}

function openPic2() {
    document.getElementById("overlay2").style.width = "100%";
}

function closePic2() {
    document.getElementById("overlay2").style.width = "0%"; }

function openPic3() {
    document.getElementById("overlay3").style.width = "100%";
}

function closePic3() {
    document.getElementById("overlay3").style.width = "0%";
}

function openPic4() {
    document.getElementById("overlay4").style.width = "100%";
}

function closePic4() {
    document.getElementById("overlay4").style.width = "0%";
}

function openPic5() {
    document.getElementById("overlay5").style.width = "100%";
}

function closePic5() {
    document.getElementById("overlay5").style.width = "0%";
}

function openPic6() {
    document.getElementById("overlay6").style.width = "100%";
}

function closePic6() {
    document.getElementById("overlay6").style.width = "0%";
}

function openPic7() {
    document.getElementById("overlay7").style.width = "100%";
}

function closePic7() {
    document.getElementById("overlay7").style.width = "0%";
}

function openPic8() {
    document.getElementById("overlay8").style.width = "100%";
}

function closePic8() {
    document.getElementById("overlay8").style.width = "0%";
}

function openPic9() {
    document.getElementById("overlay9").style.width = "100%";
}

function closePic9() {
    document.getElementById("overlay9").style.width = "0%";
}

function openPic10() {
    document.getElementById("overlay10").style.width = "100%";
}

function closePic10() {
    document.getElementById("overlay10").style.width = "0%";
}

function openPic11() {
    document.getElementById("overlay11").style.width = "100%";
    document.getElementById("player1").src="https://www.youtube.com/embed/KVMnXHetaHk?playlist=KVMnXHetaHk&loop=1&version=3&enablejsapi=1&autoplay=1&mute=1";
}
function closePic11() {
    document.getElementById("overlay11").style.width = "0%";
        document.getElementById("player1").src="";
}

function openPic12() {
    document.getElementById("overlay12").style.width = "100%";
}
function closePic12() {
    document.getElementById("overlay12").style.width = "0%";
}


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
