function lastLetterSort(stringArray) {
  function byLastLetter(item1, item2) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
    var char1 = item1.substr(item1.length - 1);
    var char2 = item2.substr(item2.length - 1);

    if (char1 < char2) {
      return -1;
    } /* end if */ else if (char1 > char2) {
      return 1;
    } /* end else if */ else {
      return 0;
    } // end else
  } // end byLastLetter
  stringArray.sort(byLastLetter);
  return stringArray;
} // end lastLetterSort
