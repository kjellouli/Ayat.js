#Ayat.js jQuery Plugin
###### Generate Qur'anic Verses by Topics, Languages, Reciters and other Options

---

##Description
**Ayat.js** is a jQuery plugin to embed into your website to show Qur'anic verses by choosing among a list of:

* **_300+_** Topics
* **_15_** Reciters
* Verses Translation in **_40_** Languages
* Styling Options: Font-size, Width, Height, Theme...
* Social Links: Email, Facebook and Twitter

---

##Dependencies
* [jQuery 1.8.3+](http://code.jquery.com/jquery-1.11.0.min.js)
* [IcoMoon](http://icomoon.io/) - Icons such as play/pause, verse details, share...

---

##Usage

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

##Settings
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

##Lists
- A theme can be chosen from the following list by making it lower case and concatenating with underscore terms separated by white space, _e.g. Jesus => jesus, Queen Sheba => queen\_sheba_

####_Topics_
> Aad, Aaron, Ablution, Abraham, Abrogation, Abu Lahab, Acacia, Adam, Adultery, Adversity, Aging, Ahmad, Al Imran, Al Medinah, Al Rass, Alcohol, Allah, Allah Mockery, Alliances, Angels, Anger, Ants, Apes, Apostasy, Arabic Quran, Arguments/Attacks, Ark, Armor, Astronomy, Atoms, Ayub, Azar, Baal, Badr, Bakkah, Beasts, Bedouin, Bees, Behavior, Belief, Believers, Bible, Biology, Birds, Booty, Borders, Botany, Builders, Burden, Burial, Business, Byzantines, Cain Abel, Calendar, Canaan, Captives, Cattle, Celestial Mechanics, Charity, Chastity, Children, Children of Israel, Christians, Churches, Clothing, Clouds, Commandments, Conservation, Constellations, Contract Law, Corruption, Cosmology Universe, Covenants, Creation, Creatures, Crystal, Danger, Date Palms, Dates, David, Day, Death, Deities Allah, Devil, Dhul-Qarnayn, Disbelievers, Disbelievers Muhammad, Disciples, Divers, Diversity, Divorce, Dogs, Donkeys, Drugs, Earth, Earth Rotation, Earthquake, Elephant, Elijah, Elisha, Embryology, Evolution, Ezra, Family, Fasting, Fighting, Figs, Fire, Flood, Food, Forgetting, Fornication, Friends, Future, Gabriel, Gambling, Pre-Islamic Arabian Deities, Gog Magog, Gold, Golden Armlets, Golden Calf, Goliath, Gospel, Government, Grain, Grave, Greed, Greetings, Guardianship, Hagar Ishmael, Hajj, Haman, Harut and Marut, Health, Hearing, Heaven, Hell, Homosexuality, Honey, Horses, Houries, Housing, Hud, Humankind, Hunayn, Hunting, Hydrology, Hypocrites, Iblis, Idolatry, Idris, Immorality, Imposters, Inheritance, In sha' Allah, Interest Loans, Intoxicants, Iram of the Pillars, Iron, Isaac, Ishmael, Jacob, Jesus, Jews, Jihad, Jinn, Job, John Baptist (Yahya), Jonah, Jordan, Joseph, Judgement, Kaaba, Killing, Knowledge, Kufr, Language, Laws Allah and Prophet, Life, Lightning, Lion, Literacy, Litigants, Livestock, Locusts, Lot, Lote Tree, Luqman, Madyan, Magians, Manna, Marriage, Mary, Materialism, Mecca, Menstruation, Metallurgy, Milk, Mineralogy, Monastic, Monks, Months, Moon, Moses, Mosque, Motion Universe, Mountains, Muhammad, Mules, Native Peoples, Necessity, Nepotism, Night, Noah, Nuclear, Oaths, Old Testament, Olive, Oppression, Orbiting Solar, Orphans, Parables, Patience, Patriarchy, Pearls, Pen, Persecuted, Persecutors, Pharaoh, Piety, Planets, Poets, Pollution, Pomegranates, Prayer, Prayer Times, Pregnancy, Privacy, Prophet, Prostration, Psalms, Qarun, Quail, Queen Sheba, Quran, Quraysh, Rabbi, Rain, Ramadan, Record, Red Sea, Refugees, Religion, Religious, Resurrection, Revelation, Ruby, Sabbath, Sabians, Sacrifice, Safa Al Marwah, Salih, Samaritan, Saul, Sea, Sects, Sex, Sex Conception, Sexes, Sexes Equality, Sheba, Ships, Shuayb, Sight, Silk, Silver, Sin, Sinai, Sirius, Skin, Sky, Slaves, Solomon, Sorcery, Spider, Spirit Hearings, Spouses, Stars, Stealing, Storms, Sun, Sunrise, Sunset, Swine, Synagogues, Tabuk, Ten Commandments, Thamud, Thunder, Time, Torah, Treachery, Tree Zaqqum, Trees, Trinity, Tubba, Twelve Tribes, Uhud, Usury, Water, Weather, Widows, Wills, Wind, Wine, Women, Wools, Wrong Customs, Zachariah.

####_Reciters_
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

####_Languages_
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

##References
* [GlobalQuran](http://globalquran.com) - Browse, Search, and Listen to the Holy Quran. With accurate quran text and quran translations in various languages.
* [Everyayah](http://everyayah.com) - Verse By Verse Quran Audio Files.
* [Quran Indexing](http://www.searchtruth.com/quran_topics_index.php) - Complete indexing of Quran Topics from A to Z.
* [Verse Border Image](https://www.flickr.com/photos/martinlatter/sets/72157612793274058/detail/) - Image showing islamic mosaic pattern around verses

---

##License

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

##Author

Kamal Jellouli

---

##Notes

[Quranindex.info](http://quranindex.info) was developed using the Ayat.js plugin