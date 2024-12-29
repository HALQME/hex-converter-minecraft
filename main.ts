let index = 0;
let current_Num = 0;
let result = 0;
let result2 = "";
let hex_string = "";
let input = "";
let input2 = "";
let input3 = "";
let result4 = "";
function hex2num(text: string) {
    index = text.length;
    for (let character of text) {
        current_Num = 9;
        if (0 <= parseInt(character) && parseInt(character) <= 9) {
            current_Num = parseInt(character);
        } else if (character == "A") {
            current_Num = 10;
        } else if (character == "B") {
            current_Num = 11;
        } else if (character == "C") {
            current_Num = 12;
        } else if (character == "D") {
            current_Num = 13;
        } else if (character == "E") {
            current_Num = 14;
        } else if (character == "F") {
            current_Num = 15;
        }
        result += current_Num * 16 ** (index - 1);
        index += -1;
    }
    return result;
}
function arr2hex(hex_array: number[]) {
    for (let character2 of hex_array) {
        if (character2 <= 9) {
            result2 = "" + result2 + character2;
        } else {
            if (character2 == 10) {
                result2 = "" + result2 + "A";
            } else if (character2 == 11) {
                result2 = "" + result2 + "B";
            } else if (character2 == 12) {
                result2 = "" + result2 + "C";
            } else if (character2 == 13) {
                result2 = "" + result2 + "D";
            } else if (character2 == 14) {
                result2 = "" + result2 + "E";
            } else if (character2 == 15) {
                result2 = "" + result2 + "F";
            }
        }
    }
    return result2;
}
function string2hex(text: string) {
    let result3: string[] = [];
    let strings_code: number[] = [];
    for (let char of text) {
        strings_code.push(char.charCodeAt(0));
    }
    for (let strings_code_item of strings_code) {
        result3.push(num2hex(strings_code_item));
    }
    return result3;
}
function hex2string(hex: string[]) {
    for (let hex_item of hex) {
        result4 = "" + result4 + String.fromCharCode(hex2num(hex_item));
    }
    return result4;
}
function num2hex(num: number) {
    let arr_hex: number[] = [];
    current_Num = num;
    if (current_Num == 0) {
        return "0";
    }
    while (current_Num != 0) {
        arr_hex.push(current_Num % 16);
        current_Num = (current_Num - (current_Num % 16)) / 16;
    }
    arr_hex.reverse();
    if (arr2hex(arr_hex).length > 4) {
        return "0x00";
    } else {
        hex_string = arr2hex(arr_hex);
        for (let index2 = 0; index2 < 4 - arr2hex(arr_hex).length; index2++) {
            hex_string = "0" + hex_string;
        }
    }
    return hex_string;
}
player.onChat("hex2string", function () {
    input = "3.141592653589793238462643383";
    player.say(string2hex(input));
    player.say(hex2string(string2hex(input)));
});
player.onChat("string2hex", function () {
    input2 = "Hello, World!";
    player.say(string2hex(input2));
});
player.onChat("hex2num", function () {
    input3 = "00FFFF";
    player.say(hex2num(input3));
});

