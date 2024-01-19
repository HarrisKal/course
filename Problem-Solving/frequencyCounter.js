// Frequency Counters are a way to find how often an el is found
// in a data structure or a string.

function charsInStr(str) {
   if (typeof str == 'string' && str.length > 0) {
      let result = {};
      for (let char of str) {
         char = char.toLowerCase()
         if (/\w/.test(char)) {
            result[char] = ++result[char] || 1;
         }
      }
      return result;
   }
   return 'Invalid input'
}

// Verify that two strings are anagrams.
function isAnagram(str1, str2) {
   // Check for simple cases
   if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;
   if (str1.length !== str2.length) return false;
   if (str1 == str2) return true;

   // If srt2 has a char in str1, remove it from str2 until it is empty.
   for (let char of str1) {
      if (!str2.includes(char)) {
         str2 = str2.replace(str2[str2.indexOf(char)], '');
      }
   }
   if (str2.length !== 0) return false;
   return true;
}

// Frequency counter way
function validAnagram(first, second) {
   if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;
   if (str1 == str2) return true;

   if (first.length !== second.length) return false;
   const lookup = {};

   for (let letter of first) {
      lookup[letter] = (lookup[letter] || 0) + 1;
   }

   for (let letter of second) {
      if (!lookup[letter]) return false;
      lookup[letter]--;
   }
   return true;
}

// Best way
function isValidAnagram(str1, str2) {
   // Check for simple cases
   if (typeof str1 !== 'string' || typeof str2 !== 'string') return false;
   if (str1.length !== str2.length) return false;
   if (str1 == str2) return true;

   // If srt2 has all chars of str1, remove it from str2 until it is empty.
   for (let char of str1) {
      if (!str2.includes(char)) return false;
   }
   return true;
}