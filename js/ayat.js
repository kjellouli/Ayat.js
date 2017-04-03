/*! Ayat.js - Quranic Verses jQuery Plugin
 * A plugin for Quranic verses by topics, language, reciter, and other options
 * version 1.0.2, February 8th, 2014
 * by Kamal Jellouli
 */
(function ($) {

    $.Ayat = function (element, options) {

        var defaults = {
            theme: 'prayer', // theme name e.g. salat, zakat, sawm, issa
            lang: 'ar', // default language
            reciter: '', // optional, if reciter (sudais, shuraim, alafasy...) is chosen, then audio option appear
            delay: '', // change verse every min
            width: '', // optional, container width
            height: "auto", // optional, container height
            fontSize: "23", // optional, default: 16px
            skin: "light", // optional, default: light. available: sepia, dark..
            details: 0, // link to original aya on quran.com
            mailto: 0, // mailto aya to a friend
        }

        // Current instance of the object
        var plugin = this;

        // Show debug messages
        var debug = 0;

        // Default and user-provided options
        plugin.settings = {}

        // Reference to DOM object
        var $element = $(element),
            element = element;

        // Constructor method
        plugin.init = function () {

            // Merge defaults and user options into one settings var
            plugin.settings = $.extend({}, defaults, options);

            // Init var
            var souratname_css = "";

            // Set CSS
            $(element).css({
                width: options.width,
                height: options.height,
                fontSize: options.fontSize
            });

            // Set dark skin
            if (options.skin == "dark") {
                $(element).css({
                    background: "rgb(104, 89, 80)",
                    textShadow: "none",
                    color: "rgb(246, 248, 189)",
                    letterSpacing: "2px"
                });
                souratname_css += "background:rgb(104, 89, 80);text-shadow:none;color:#fff;";
            }

            // Set Language
            plugin.settings.lang = _setLanguage(plugin.settings.lang);

            // Set reciter
            if (plugin.settings.reciter) {
                // plugin.settings.reciter = _setReciter(plugin.settings.reciter);
                plugin.settings.audio = 1;
            } else
                plugin.settings.audio = 0;

            // Lowercase theme
            plugin.settings.theme = plugin.settings.theme.toLowerCase();

            // Set CSS of sourat name depending on lang and font size
            if (plugin.settings.lang != "quran-simple")
                souratname_css += "left:-5px;text-align:right;font-size:" + 0.82608695652 * plugin.settings.fontSize + "px";

            // Check if multiple themes were chosen, if yes choose random one
            if (plugin.settings.theme.indexOf(",") != -1) {
                var multiplethemes = plugin.settings.theme.split(",");
                plugin.settings.theme = multiplethemes[Math.floor((Math.random() * (multiplethemes.length)))];
            }

            // Get Ayat if theme exist
            var themeExist = 1;
            try {
                eval(topics[plugin.settings.theme]);
            } catch (e) {
                var themeExist = 0;
            }
            if (!themeExist)
                $element.text("Theme not found. Please choose one from the list");
            else
                _showRandomVerse(souratname_css);

            // Change verse every settings.delay mn if there are more than one verse in theme
            if (topics[plugin.settings.theme].length > 2 && plugin.settings.delay)
                setInterval(function () {
                    _changeVerse(souratname_css)
                }, plugin.settings.delay * 1000);

        }

        /*>>>> PUBLIC METHODS <<<<<*/

        // Show debug
        plugin.debug = function (str) {
            var d = new Date();
            var curr_hour = d.getHours();
            var curr_min = d.getMinutes();
            var curr_sec = d.getSeconds();
            if (curr_hour < 10) curr_hour = "0" + curr_hour;
            if (curr_min < 10) curr_min = "0" + curr_min;
            if (curr_sec < 10) curr_sec = "0" + curr_sec;
            var result = curr_hour + ":" + curr_min + ":" + curr_sec + " - ";
            if (debug) console.log(result + str);
        }

        // Put leading 0s in front of sourat and ayat numbers for recitation
        plugin.pad = function (number, length) {
            var str = '' + number;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }

        // Play audio
        plugin.playAudio = function (sourat, ayatFrom, ayatTo, multiple) {

            // get reciter
            reciter = _setReciter(plugin.settings.reciter);
            try {
                var audios = document.getElementById('audio_player');
                var toggler = document.getElementById('icon-play');
                if (audios.paused) {
                    if (!audios.src) {
                        if (multiple === undefined) { // play on aya only
                            audios.src = "http://www.everyayah.com/data/" + reciter + this.pad(sourat, 3) + this.pad(ayatFrom, 3) + ".mp3";
                            // change toggle player to pause when audio is done
                            audios.addEventListener("ended", function () {
                                // toggler.style.background = "url(player-play.png)";
                                $("#icon-pause").attr("id", "icon-play");
                            });
                        } else if (multiple == 1) { // play multiple ayat
                            var ayatmp3 = new Array();
                            var current = 0;
                            for (var i = ayatFrom; i <= ayatTo; i++) { // push ayat to array
                                ayatmp3.push(this.pad(sourat, 3) + this.pad(i, 3));
                            }
                            audios.src = "http://www.everyayah.com/data/" + reciter + this.pad(sourat, 3) + this.pad(ayatFrom, 3) + ".mp3";
                            audios.play();
                            // play next ayats until last one
                            audios.addEventListener("ended", function () {
                                current++;
                                if (current != ayatmp3.length) {
                                    audios.src = "http://www.everyayah.com/data/" + reciter + ayatmp3[current] + ".mp3";
                                    audios.play();
                                } else // change toggle player to pause when audio is done        
                                // toggler.style.background = "url(player-play.png)";
                                    $("#icon-pause").attr("id", "icon-play");
                            });

                        }
                    }
                    audios.play();
                    // toggler.style.background = "url(player-pause.png)";
                    $("#icon-play").attr("id", "icon-pause");
                } else {
                    audios.pause();
                    $("#icon-pause").attr("id", "icon-play");
                    // toggler.style.background = "url(player-play.png)";
                }

            } catch (e) {
                // Fail silently but show in F12 developer tools console
                if (window.console && console.error("Error:" + e));
            }

        }

        // Show share buttons
        plugin.showShareButtons = function (elm) {

            // elm.style.display="none";

            // show only once onmouseover
            elm.onmouseover = null;

            var slideLeft = "slide-left";
            var slideRight = "slide-right";
            // // check language to swap audio and share buton, and sliding direction
            // if(plugin.settings.lang != "quran-simple"){ // not arabic
            //     var temp = slideLeft;
            //     slideLeft = slideRight;
            //     slideRight = temp;
            // } 

            // delay of 1sec if icons are shown, else toggle without delay
            if ($(".share-icons").parent().parent().hasClass(slideRight))
                setTimeout(function () {
                    $(".share-icons").toggle();
                }, 1000);
            else
                $(".share-icons").toggle();

            // add slide left effect for icons when they are shown and when share button is triggered
            if ($(".share-icons").parent().parent().hasClass(slideRight))
                $(".share-icons").parent().parent().toggleClass(slideLeft).removeClass(slideRight);
            else
                $(".share-icons").parent().parent().toggleClass(slideRight).removeClass(slideLeft);
        }

        /*>>>> PRIVATE METHODS <<<<<*/

        // Get random salat verse
        var _showRandomVerse = function (css) {

            // Get params
            var lang = plugin.settings.lang;
            var audio = plugin.settings.audio;
            var details = plugin.settings.details;
            var mailto = plugin.settings.mailto;
            var reciter = plugin.settings.reciter;
            var verses = topics[plugin.settings.theme];

            // Store sourat name for multiple ayat to show only once
            var sourat_name = "";

            // Set sourat name in arabic or english for other languages
            var souratname_lang = (lang == "quran-simple") ? "arabic_name" : "english_name";

            // get random verse
            var verse = verses[Math.floor((Math.random() * (verses.length - 1)))];

            // Split chapter and ayat #
            var chapterNumber = verse.split(":")[0];
            var ayatRange = verse.split(":")[1].split("-");

            // check if aya > 10 to arrange css of aya number circle
            var ayaNb_css = "";
            if (ayatRange[0] > 9)
                ayaNb_css = "padding: 2px 3px 1px 3px";

            // Check if we are asking for multiple ayat
            if (verse.indexOf("-") != -1)
                var isMultipleAyat = 1;

            // Show verse #
            plugin.debug("Verse# " + verse);

            // Handle case of 1 ayat, then multiple ayats (sync ajax to show them in order)
            if (!isMultipleAyat) {
                $.getJSON("http://api.globalquran.com/ayah/" + verse + "/" + lang + "?jsoncallback=?quranData", function (data) {
                    $.each(data.quran, function (i, by) {
                        $.each(by, function (verseNo, line) {

                            if (lang != "quran-simple") // other than arabic lang
                                $('<div class="aya_container">').html(" <span style='" + ayaNb_css + "'>" + ayatRange[0] + "</span>" + ". " + line.verse).appendTo($element);
                            else
                                $('<div class="aya_container">').html(line.verse + " <span style='" + ayaNb_css + "'>" + ayatRange[0] + "</span>").appendTo($element);
                            $(".aya_container").append("<div id='souratname' style='" + css + "'>" + _getSouratName(line.surah) + ' ' + line.ayah + "</div>");

                            // append options to sourat name floating them right
                            $('<ul id="aya-options" style="float:right;padding:0;margin:0">').appendTo("#souratname");

                            // append and set options such as play, details, mailto
                            var params = {
                                isMultipleAyat: 0,
                                souratNb: chapterNumber,
                                souratName: _getSouratName(line.surah),
                                ayaContent: line.verse,
                                ayaFrom: ayatRange[0],
                                ayaTo: ayatRange[1]
                            }
                            _setOptions($($element).attr("id"), params);

                            // if other than arabic, float options to left instead of right and margin top lilbit
                            if (lang != "quran-simple")
                                $("#aya-options").css({
                                    "float": "left",
                                    "margin-top": "-3px"
                                });
                        });
                    });

                });
            } else {
                var completeVerse = ""; // append whole verse to this string
                var floatleftOptions = 0; // float left for multiple ayat and lang other than arabic

                // call function to show async multiple ayat
                showMultiAya(ayatRange[0]);

                // function show multiple ayat
                function showMultiAya(ayaNb) {

                    // return if we reached the end of aya range
                    if (ayaNb > ayatRange[1]) {
                        // append complet multiple ayat (incl. sourat name and ayat #s) to container
                        $('<div class="aya_container">').html(completeVerse).appendTo($element);
                        $(".aya_container").append("<div id='souratname' style='" + css + "'>" + sourat_name + ' ' + ayatRange[0] + "-" + ayatRange[1] + "</div>");

                        // append options to sourat name floating them right
                        $('<ul id="aya-options" style="float:right;padding:0;margin:0">').appendTo("#souratname");

                        // if other than arabic, float options to left instead of right and margin top lilbit
                        if (floatleftOptions && lang != "quran-simple")
                            $("#aya-options").css({
                                "float": "left",
                                "margin-top": "-3px"
                            });

                        // append and set options such as play, details, mailto
                        var params = {
                            isMultipleAyat: 1,
                            souratNb: chapterNumber,
                            souratName: sourat_name,
                            ayaContent: completeVerse,
                            ayaFrom: ayatRange[0],
                            ayaTo: ayatRange[1]
                        }
                        _setOptions($($element).attr("id"), params);

                        // done w/ ajax from showing multiple aya
                        return;
                    }

                    // Ajax
                    var jqxhr = $.ajax({
                        url: "http://api.globalquran.com/ayah/" + chapterNumber + ":" + ayaNb + "/" + lang + "?jsoncallback=?quranData",
                        dataType: "json",
                        success: function (data) {
                            if (data) {
                                $.each(data.quran, function (i, by) {
                                    $.each(by, function (verseNo, line) {
                                        if (lang != "quran-simple") // other than arabic lang
                                            completeVerse += "<span>" + ayaNb + "</span>. " + line.verse;
                                        else {
                                            completeVerse += line.verse + " <span>" + ayaNb + "</span>";
                                        }

                                        // get sourat name if its null
                                        if (!sourat_name)
                                            sourat_name = _getSouratName(line.surah);

                                        // last aya to apply float left for options
                                        if (ayaNb == ayatRange[1]) {
                                            floatleftOptions = 1;
                                        }
                                    });
                                });
                            }
                        }
                    }).complete(function () { //when done ajax, callback function to show next aya
                        ayaNb++;
                        showMultiAya(ayaNb);
                    });
                }

            }
        }

        // Switch verse with another random one
        var _changeVerse = function (souratname_css) {
            $($element).contents().remove();
            $($element).hide().fadeIn(2000);
            _showRandomVerse(souratname_css);
        }

        // Get sourat name in arabic or english depending on lang param
        var _getSouratName = function (nb) {
            if (plugin.settings.lang == "quran-simple")
                return chapters[nb - 1].name;
            else
                return chapters[nb - 1].english;
        }

        // Set language
        var _setLanguage = function (mylang) {
            if (mylang == "ar") return "quran-simple";
            if (mylang == "bs") return "bs.korkut";
            if (mylang == "az") return "az.mammadaliyev";
            if (mylang == "bg") return "bg.theophanov";
            if (mylang == "bn") return "bn.bengali";
            if (mylang == "cs") return "cs.hrbek";
            if (mylang == "de") return "de.aburida";
            if (mylang == "en") return "en.yusufali";
            if (mylang == "es") return "es.cortes";
            if (mylang == "fa") return "fa.ayati";
            if (mylang == "fr") return "fr.hamidullah";
            if (mylang == "ha") return "ha.gumi";
            if (mylang == "hi") return "hi.hindi";
            if (mylang == "id") return "id.indonesian";
            if (mylang == "id") return "id.muntakhab";
            if (mylang == "it") return "it.piccardo";
            if (mylang == "ja") return "ja.japanese";
            if (mylang == "ko") return "ko.korean";
            if (mylang == "ku") return "ku.asan";
            if (mylang == "ml") return "ml.abdulhameed";
            if (mylang == "ms") return "ms.basmeih";
            if (mylang == "nl") return "nl.keyzer";
            if (mylang == "no") return "no.berg";
            if (mylang == "pl") return "pl.bielawskiego";
            if (mylang == "pt") return "pt.elhayek";
            if (mylang == "ro") return "ro.grigore";
            if (mylang == "ru") return "ru.kuliev";
            if (mylang == "sd") return "sd.amroti";
            if (mylang == "si") return "si.naseemismail";
            if (mylang == "so") return "so.abduh";
            if (mylang == "sq") return "sq.ahmeti";
            if (mylang == "sv") return "sv.bernstrom";
            if (mylang == "sw") return "sw.barwani";
            if (mylang == "ta") return "ta.tamil";
            if (mylang == "tg") return "tg.ayati";
            if (mylang == "th") return "th.thai";
            if (mylang == "tr") return "tr.ates";
            if (mylang == "tt") return "tt.nugman";
            if (mylang == "ug") return "ug.saleh";
            if (mylang == "ur") return "ur.jalandhry";
            if (mylang == "uz") return "uz.sodik";
            if (mylang == "zh") return "zh.jian";
        }

        // Set reciter
        var _setReciter = function (reciter) {
            if (reciter == "abdul_basit") return "Abdul_Basit_Mujawwad_128kbps/";
            if (reciter == "al_juhany") return "Abdullaah_3awwaad_Al-Juhaynee_128kbps/";
            if (reciter == "al_afasy") return "Alafasy_64kbps/";
            if (reciter == "al_ajamy") return "Ahmed_ibn_Ali_al-Ajamy_64kbps_QuranExplorer.Com/";
            if (reciter == "bukhatir") return "Salaah_AbdulRahman_Bukhatir_128kbps/";
            if (reciter == "ghamadi") return "Ghamadi_40kbps/";
            if (reciter == "hudhaify") return "Hudhaify_64kbps/";
            if (reciter == "husary") return "Husary_64kbps/";
            if (reciter == "minshawy") return "Menshawi_16kbps/";
            if (reciter == "muaiqly") return "Maher_AlMuaiqly_64kbps/";
            if (reciter == "shaatri") return "Abu_Bakr_Ash-Shaatree_64kbps/";
            if (reciter == "shuraym") return "Saood_ash-Shuraym_64kbps/";
            if (reciter == "sudais") return "Abdurrahmaan_As-Sudais_64kbps/";
        }

        // Set option buttons such as play, details, mailto..
        var _setOptions = function (element, params) {

            // get options and params
            var mailto = plugin.settings.mailto;
            var details = plugin.settings.details;
            var audio = plugin.settings.audio;
            var facebook = plugin.settings.facebook;
            var twitter = plugin.settings.twitter;
            var reciter = plugin.settings.reciter;
            isMultipleAyat = params.isMultipleAyat;
            souratNb = params.souratNb;
            souratName = params.souratName;
            ayaContent = params.ayaContent
            ayaFrom = params.ayaFrom;
            ayaNb = params.ayaFrom; // used for mailto option
            ayatToPlay = params.ayaFrom;

            // options for multiple ayat
            if (isMultipleAyat) {
                ayaFrom = params.ayaFrom + "/" + params.ayaTo;
                ayaNb = ""; // dont include in mailto since ayaContent already include ayat #s
                ayatToPlay = params.ayaFrom + ", " + params.ayaTo + ", 1";
                ayaContent = ayaContent.replace(/<span>|<\/span>/g, " ");
            }

            // set options
            if (facebook)
                $("#aya-options").append('<li><a title="Share on Facebook" alt="Share on Facebook" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http://quranindex.info/surah/' + souratNb + '/' + ayaFrom + '&t=Quran - ' + souratName + ' ' + ayaFrom + '"><div class="icon-container share-icons"><span id="icon-facebook" class="icon" style="float:right;"></span></div></a></li>');
            if (twitter)
                $("#aya-options").append('<li><a title="Share on Twitter" alt="Share on Twitter" target="_blank" href="http://twitter.com/home?status=Quran - ' + encodeURIComponent(souratName) + ' ' + ayaFrom + ' @ http://quranindex.info/surah/' + souratNb + '/' + ayaFrom + '&t=Quran - ' + souratName + ' ' + ayaFrom + '"><div class="icon-container share-icons"><span id="icon-twitter" class="icon" style="float:right;"></span></div></a></li>');
            if (mailto)
                $("#aya-options").append('<li><a title="Email Verse" alt="Email Verse" href="mailto:?subject=Quran - ' + souratName + ' ' + ayaFrom + '&body=' + ayaContent + " " + ayaNb + '"><div class="icon-container share-icons"><span id="icon-mailto" class="icon" style="float:right;"></span></div></a></li>');

            // show share button if facebook, twitter and mailto are all present
            if (mailto && twitter && facebook) {
                $("#aya-options").append('<li><a onmouseover="$(\'#' + element + '\').data(\'Ayat\').showShareButtons(this);"><div class="icon-container"><span id="icon-share" class="icon" style="float:right;cursor: auto;"></span></div></a></li>');
                $(".share-icons").hide();
            }

            if (details)
                $("#aya-options").append('<li><a nohref title="Get Verse Details" alt="Get Verse Details" target="_blank" href="http://quranindex.info/surah/' + souratNb + '/' + ayaFrom + '"><div class="icon-container"><span id="icon-info" class="icon" style="float:right"></span></div></a></li>');
            if (audio)
                $("#aya-options").append('<li><audio id="audio_player"><source src="" type="audio/mp3" ></audio><a title="Play Aya" alt="Play Aya" onclick="$(\'#' + element + '\').data(\'Ayat\').playAudio(' + souratNb + ', ' + ayatToPlay + ')"><div class="icon-container"><span id="icon-play" class="icon" style="float:right"></span></div></a></li>');

            _setFooter();
        }

        var _setFooter = function(){
            $("<span class='qi-link' style='width:"+plugin.settings.width+"px'>Powered by <a target='_blank' href='http://quranindex.info'>Quranindex.info</a></span>").insertAfter(element);
        }

        // Invoke constructor
        plugin.init();
    }

    // Add Ayat plugin to the jQuery.fn object
    $.fn.Ayat = function (options) {
        return this.each(function () {
            if (undefined == $(this).data('Ayat')) {
                var plugin = new $.Ayat(this, options);
                $(this).data('Ayat', plugin);
            }
        });
    }

})(jQuery);