/* Translate the provided string to pig latin.
 *
 * Pig Latin takes the first consonant (or consonant cluster) of an English word,
 * moves it to the end of the word and suffixes an "ay".
 * If a word begins with a vowel you just add "way" to the end.
 * 
 * Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {

    var i = str.search(/a|e|i|o|u|y/);

    //if the word begins with a vowel, returns the word+way
    if (i === 0) {
        return str += "way";
    } else {
        //otherwise adds the first consonant cluster+ay to the end of the word
        return (str.slice(i, str.length)) + (str.slice(0, i) + "ay");
    }
}

translatePigLatin("glove");
