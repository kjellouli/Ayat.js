# Ayat.js jQuery Plugin
###### Generate Qur'anic Verses by Topics, Languages, Reciters and other Options

---

## Description
**Ayat.js** is a jQuery plugin to embed into your website to show Qur'anic verses by choosing among a list of:

* **_800+_** Topics
* **_15_** Reciters
* Verses Translation in **_40_** Languages
* Styling Options: Font-size, Width, Height, Theme...
* Social Links: Email, Facebook and Twitter

---

## Dependencies
* [jQuery 1.8.3+](http://code.jquery.com/jquery-1.11.0.min.js)
* [IcoMoon](http://icomoon.io/) - Icons such as play/pause, verse details, share...

---

## Usage

Html:
```html
    <div id="container"></div>
```
    
Javascript:
```javascript
    $("#container").Ayat({
	    theme: 'women',
	    reciter: 'shuraym',
	    lang: 'fr',
 	    delay: '5',
	    width: '500',
 	    height: 'auto',
	    fontSize: '23',
	    skin: 'dark',
	    details: 1,
	    mailto: 1,
	    facebook: 1,
	    twitter: 1
	 });
```
	 
Style:

The full CSS stylesheet can be found in the repository or downloaded by [clicking here](https://github.com/kjellouli/Ayat.js/blob/master/css/style.css)

---

## Settings
<table class='options'>
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>theme</td>
            <td>'prayer'</td>
            <td>Theme name e.g. abraham, charity, jesus, prayer... Mutliple themes can be triggered by separating them with comma</td>
        </tr>
        <tr>
            <td>lang</td>
            <td>'ar'</td>
            <td>Choose from the language list at the bottom e.g. en,fr,es...</td>
        </tr>
        <tr>
            <td>reciter</td>
            <td>'sudais'</td>
            <td>Choose from the reciter list at the bottom e.g. abdul_basit, alafasy, shuraim...</td>
        </tr>
        <tr>
            <td>delay</td>
            <td>-</td>
            <td><i>Optional</i>, change verses every x seconds for topic(s) chosen. If it's not set, it will be fix and user has to refresh the webpage to get another verse</td>
        </tr>
        <tr>
            <td>width</td>
            <td>-</td>
            <td><i>Optional</i>, container width</td>
        </tr>
        <tr>
            <td>height</td>
            <td>'auto'</td>
            <td><i>Optional</i>, container height</td>
        </tr>
        <tr>
            <td>fontsize</td>
            <td>'23'</td>
            <td><i>Optional</i>, default is 23px</td>
        </tr>
        <tr>
            <td>theme</td>
            <td>'light'</td>
            <td><i>Optional</i>, choose either light or dark</td>
        </tr>
        <tr>
            <td>details</td>
            <td>0</td>
            <td><i>Optional</i>, Link to the original Qu'ran verse on Quran.com for more context, explanation (tafsir)...</td>
        </tr>
        <tr>
            <td>mailto</td>
            <td>0</td>
            <td><i>Optional</i>, Send by email the verse to a friend</td>
        </tr>
        <tr>
            <td>facebook</td>
            <td>0</td>
            <td><i>Optional</i>, Share the verse on Facebook</td>
        </tr>
        <tr>
            <td>twitter</td>
            <td>0</td>
            <td><i>Optional</i>, Share the verse on Twitter</td>
        </tr>
    </tbody>
</table>

---

## Lists
- A theme can be chosen from the following list by making it lower case and concatenating with underscore terms separated by white space, _e.g. Jesus => jesus, Queen Sheba => queen\_sheba_

#### _Topics_
> Aad, Aaron, Ablution, Abraham, Abrogation, Abu lahab, Abundance, Acacia, Actions, Adam, Adultery, Adversity, Advice, Affection, Aging, Ahmad, Al imran, Al medinah, Al rass, Alcohol, Allah, Allah mockery, Allah names, Alliances, Ancestors, Angels, Anger, Animals, Ants, Apes, Apostasy, Arabic quran, Arguments attacks, Ark, Armor, Army, Arrogance, Astronomy, Atom, Aunt, Authority, Ayub, Azar, Baal, Babylon, Back, Backbit, Badr, Bakkah, Balance, Barrier, Battle, Beasts, Bed, Bedouin, Bees, Behavior, Belief, Believers, Belly, Benefactors, Bequest, Betrayal, Bewitched, Bible, Biology, Birds, Blame, Blast, Blaze, Blessing, Bliss, Boasting, Bone, Books, Booty, Borders, Botany, Bow, Bracelet, Brass, Bread, Brocade, Brotherhood, Builders, Building, Burden, Burial, Business, Byzantines, Cain abel, Calamities, Calendar, Calf, Camel, Canaan, Captives, Caravan, Carrion, Castle, Cattle, Cave, Celestial mechanics, Certainty, Charity, Chastity, Children, Children of Israel, Christians, Churches, City, Clay, Cloak, Clothing, Clouds, Coin, Coldness, Colour, Columns, Command, Commandments, Community, Companion, Competition, Compulsion, Conjecture, Consequence, Conservation, Constellations, Constraint, Consultation, Consuming, Contract law, Contradiction, Coral, Corpse, Corruption, Cosmology universe, Couch, Counsel, Covenants, Cover, Cow, Cowardice, Cradle, Creation, Creatures, Crime, Crops, Crow, Crystal, Cultivation, Cup, Curse, Cushion, Custodian, Danger, Dates, David, Day, Deaf, Death, Deities allah, Descendants, Desert, Desires, Devil, Dhul qarnayn, Disbelievers, Disbelievers muhammad, Disciples, Divers, Diversity, Divorce, Dogs, Donkeys, Dream, Drop, Drugs, Ear, Earth, Earth rotation, Earthquake, East west, Eating, Eden, Egypt, Elephant, Elijah, Elisha, Embryology, Enjoyment, Envy, Esteem, Eternal, Event, Evil, Evolution, Exactitude, Example, Excess, Expel, Expiation, Exposure, Exultation, Eye, Ezra, Faction, Fainting, Faithfuls, Falsehood, Family, Fasting, Fat, Fatigue, Fear, Female, Fighting, Figs, Filth, Finery, Finger, Fire, Firewood, Fish, Flaw, Flood, Fly, Food, Fool, Footstep, Forbidden, Forehead, Forelock, Forgetting, Forgiveness, Forgoing, Fornication, Fortress, Fountain, Friends, Frog, Fruit, Fuel, Future, Gabriel, Gambling, Garden, Gathering, Generation, Gentleness, Gift, Ginger, Girl, Giving, Glass, Glorification, Goat, Gods, Gods preislamic Arabs, Gog magog, Gold, Golden armlets, Golden calf, Goliath, Good words, Goods, Gospel, Government, Governor, Grain, Grandchildren, Grapes, Grateful, Grave, Greed, Green, Greetings, Guarantor, Guardian, Guardianship, Guidance, Hagar ishmael, Haman, Happiness, Hardship, Harut and Marut, Hatred, Healing, Health, Hearing, Heart, Heaven, Heed, Hell, Help, Herb, Hereafter, Heritage, Hill, Holy, Homosexuality, Honey, Hoopoe, Hopes, Horizon, Horse, Horses, Hospitality, Hostility, Hour, Houries, House, Housing, Hud, Human, Humankind, Humility, Hunayn, Hunger, Hunting, Husband, Hydrology, Hypocrites, Iblis, Idolatry, Idris, Ignorance, Illness, 2Immorality, Imposters, Impurity, Imran, Infant, Infertility, Inhabitant, Inheritance, Ink, Inshallah, Insight, Insolence, Inspiration, Intention, Intercession, Interest loans, Interpretation, Intoxicants, Iram pillars, Iron, Isaac, Ishmael, Islam, Israel, Jacob, Jesus, Jewelry, Jews, Jihad, Jinn, Job, John baptist, Jonah, Jordan, Joseph, Journey, Joy, Judge, Judgement, Justice, Kaaba, Key, Killing, Kingship, Kinship, Knife, Knowledge, Kufr, Labour, Ladder, Lame, Lamp, Land, Language, Lash, Last day, Laughter, Law, Lawful, Laws Allah Prophet, Leader, Leaves, Left, Lentil, Leper, Lesson, Lie, Life, Light, Lightning, Limits, Lion, Lip, Literacy, Litigants, Livelihood, Livestock, Locusts, Loss, Lot, Lote tree, Louse, Love, Luqman, Madyan, Magians, Manna, Marriage, Mary, Materialism, Meal, Measure, Meat, Mecca, Menstruation, Mercy, Metallurgy, Milk, Mineralogy, Monastic, Monks, Monotheism, Months, Moon, Moses, Mosque, Motion universe, Mountains, Muhammad, Mules, Naked, Name, Nation, Native peoples, Nearness, Necessity, Neighbor, Nepotism, News, Niche, Nickname, Night, Noah, Noon, Notification, Nurse, Oaths, Obedience, Obscenity, Obstinate, Obstruction, Oil, Old, Old testament, Olive, Onion, Oppression, Orbiting solar, Ornament, Orphans, Pact, Pages, Pair, Palace, Palms, Parables, Paradise, Parents, Partner, Patience, Patriarchy, Pattern, Payment, Peace, Pearls, Pen, Penalty, Persecuted, Persecution, Persecutors, Pharaoh, Piety, Pilgrimage, Pious, Planets, Plant, Poet, Poets, Pollution, Pomegranate, Pomegranates, Ponder, Poor, Poverty, Powerlessness, Praise, Prayer, Prayer times, Precaution, Pregnancy, Priest, Prison, Privacy, Prophet, Prostration, Psalms, Qarun, Qibla, Quail, Quarrel, Queen sheba, Quilt, Quran, Quraysh, Rabbi, Race, Rage, Rain, Ramadan, Ransom, Reconciliation, Record, Red sea, Refugees, Region, Regret, Rejoice, Relatives, Religion, Religious, Remembrance, Reminder, Repayment, Repentance, Resting, Resurrection, Retreat, Revelation, Revenge, Reward, Rich, Riding, Righteous, River, Rock, Romans, Roof, Ruby, Rug, Sabbath, Sabians, Sacrifice, Safa al Marwah, Salih, Salt, Samaritan, Satan, Saul, Sea, Secret, Sects, Sex, Sex conception, Sexes, Sexes equality, Sheba, Ships, Shuayb, Sight, Silk, Silver, Sin, Sinai, Sincere, Sirius, Sister, Skin, Sky, Slaughter, Slaves, Sleep, Smoke, Snake, Soil, Solomon, Sorcery, Spider, Spirit hearings, Spouses, Springs, Stars, Stealing, Storms, Sun, Sunrise, Sunset, Swine, Synagogues, Table, Tablets, Tabuk, Talut, Tax, Ten commandments, Thamud, Theft, Thirst, Throat, Throne, Thunder, Time, Time relativity, Tiredness, Tongue, Torah, Town, 2Trade, Transaction, Travel, Traveller, Treachery, Treasure, Treaty, Tree zaqqum, Trees, Trench, Trial, Tribes, Tribute, Trinity, Troop, Trunk, Trust, Tubba, Tuwa, Twelve tribes, Tyrant, Uhud, Uncle, Unclean, Understanding, Ungrateful, Unity, Universe, Unlettered, Unseen, Usury, Uzayr, Valley, Vegetables, Veil, Vein, Victorious, Victory, Virgin, Vision, Voice, Vow, Wage, Wall, War, Warning, Water, Wave, Weakness, Weather, White, Widows, Wife, Wills, Wind, Wine, Wing, Wisdom, Witness, Wolf, Womb, Women, Wool, Wools, Words, World, Worm, Worship, Wrong customs, Yathrib, Youth, Zachariah, Zaqqum, Zayd.

#### _Reciters_
* **abdul_basit**: Abdul Basit Abdu Samad
* **al_afasy**: Mishary Rashid Alafasy
* **al_ajamy**: Ahmed ibn Ali al-Ajmy
* **al_juhany**: Abdullah Awad Al Juhany
* **basfar**: Abdullah Basfar
* **bukhatir**: Ahmed Bukhatir
* **ghamadi**: Saad El Ghamidi
* **hudhaify**: Ali Al Hudhaify
* **husary**: Mahmoud Khalil Al-Hussary
* **minshawy**: Mohamed Siddiq El-Minshawi
* **muaiqly**: Maher al-Muaiqly
* **rifai**: Hani Ar-Rifai
* **shaatri**: Abu Bakr al-Shaatri
* **shuraym**: Saud Al-Shuraim
* **sudais**: Abdul Rahman Al-Sudais

#### _Languages_
* **sq**:  Albanian
* **ar**:  Arabic
* **az**:  Azerbaijani
* **bn**:  Bengali
* **bn**:  Bosnian
* **bg**:  Bulgarian
* **zh**:  Chinese
* **cs**:  Czech
* **nl**:  Dutch
* **en**:  English
* **fr**:  French
* **de**:  German
* **ha**:  Hausa
* **hi**:  Hindi
* **id**:  Indonesian
* **it**:  Italian
* **ja**:  Japanese
* **ko**:  Korean
* **ku**:  Kurdish
* **ms**:  Malay
* **ml**:  Malayalam
* **no**:  Norwegian
* **fa**:  Persian
* **pl**:  Polish
* **pt**:  Portuguese
* **ro**:  Romanian
* **ru**:  Russian
* **sd**:  Sindhi
* **si**:  Slovenian
* **so**:  Somali
* **es**:  Spanish
* **sw**:  Swahili
* **sv**:  Swedish
* **tg**:  Tajik
* **ta**:  Tamil
* **tt**:  Tatar
* **th**:  Thai
* **tr**:  Turkish
* **ur**:  Urdu
* **ug**:  Uyghur
* **uz**:  Uzbek 

---

## References
* [GlobalQuran](http://globalquran.com) - Browse, Search, and Listen to the Holy Quran. With accurate quran text and quran translations in various languages.
* [Everyayah](http://everyayah.com) - Verse By Verse Quran Audio Files.
* [Quran Indexing](http://www.searchtruth.com/quran_topics_index.php) - Complete indexing of Quran Topics from A to Z.
* [Verse Border Image](https://www.flickr.com/photos/martinlatter/sets/72157612793274058/detail/) - Image showing islamic mosaic pattern around verses

---

## License

Ayat.js is freely distributable under the 
terms of an MIT-style [license](https://github.com/kjellouli/Ayat.js/blob/master/license.txt).

The MIT License (MIT)

Copyright (c) 2014 Kamal Jellouli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## Author

Kamal Jellouli

---

## Notes

[Quranindex.info](http://quranindex.info) was developed using the Ayat.js plugin
