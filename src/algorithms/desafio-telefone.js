const digits = "23";
const letters = ["", "abc", "def", "ghi", "jkl","mno", "pqrs", "tuv", "wxyz", ""];

const str1 = letters[digits[0]];
const str2 = letters[digits[1]];
const str3 = letters[digits[2]];
const str4 = letters[digits[3]];

const safeSplit = (str) => str ? str.split('') : [];

const combined = safeSplit(string1).flatMap(char1 => 
    safeSplit(string2).flatMap(char2 => 
        safeSplit(string3).flatMap(char3 => 
            safeSplit(string4).map(char4 => 
                char1 + char2 + (char3 || '') + (char4 || '')
            )
        )
    )
);

console.log(combined);
