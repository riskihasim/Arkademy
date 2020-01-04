console.log(substring_count("arkademy", "a"))
console.log(substring_count("javascript", "x"))
console.log(substring_count("peace!", "!"))

function substring_count(source_str, search_str, index) {
    source_str += "", search_str += "";
    var count = -1, index_inc = Math.max(search_str.length, 1);
    index = (+index || 0) - index_inc;
    do {
        ++count;
        index = source_str.indexOf(search_str, index + index_inc);
    } while (~index);
    return count;
}
