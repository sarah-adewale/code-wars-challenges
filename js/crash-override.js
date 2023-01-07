function aliasGen(first, last) {
  if('0123456789'.indexOf(first[0]) != -1 || '0123456789'.indexOf(last[0]) != -1) {
    return 'Your name must start with a letter from A - Z.';
  }
  first = first.toUpperCase();
  last = last.toUpperCase();
  return firstName[first[0]] + ' ' + surname[last[0]];
}
