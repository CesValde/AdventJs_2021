# Help the elf to list the gifts

> What a mess 😵! An elf is helping Santa Claus. He thought it would come to him already ordered from each gift how many units he should get.... and he got a letter ✉️! Help him!

You have received a letter ✉️ with all the gifts you have to prepare. The thing is that it is a text string and it is very difficult to read 😱. Thank goodness they have put each gift separated by space! (although **be careful,** because being children, maybe they have put more spaces than necessary).

Above we have noticed that some words come with a `_` in front of the word, for example `_playstation` , which means that it is **corked and does not have to be counted.

Transform the text to an object containing the name of each gift and the number of times it appears. For example, if we have the text:

`const letter = 'bike car ball _playstation bike car teddy car'`.

Executing the method should return the following:

``` javascript
const gifts = listGifts(letter);

console.log(gifts);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
```

Please note that the tests may be more comprehensive.... 😝 Be careful with counting blanks!