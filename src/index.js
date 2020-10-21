module.exports = function toReadable (number) {
    let res =  '';
    let strNum = number.toString();
    let numLength = strNum.length;
    if (numLength == 3) {
        res = hundreds (strNum).trim();
    };
    if (numLength == 2) {
        res =  tens (strNum).trim();
    };
    if (numLength == 1) {
        res =  strNum[0] == 0? 'zero': units (strNum);
    };
    return res.trim();
};

let hundreds = function (digit) {
    switch (digit[0]) {
        case '1':
            return 'one hundred ' + tens (digit.slice(1));
        case '2':
            return 'two hundred ' + tens (digit.slice(1));
        case '3':
            return 'three hundred ' + tens (digit.slice(1));
        case '4':
            return 'four hundred ' + tens (digit.slice(1));
        case '5':
            return 'five hundred ' + tens (digit.slice(1));
        case '6':
            return 'six hundred ' + tens (digit.slice(1));
        case '7':
            return 'seven hundred ' + tens (digit.slice(1));
        case '8':
            return 'eight hundred ' + tens (digit.slice(1));
        case '9':
            return 'nine hundred ' + tens (digit.slice(1));
    };

};

let tens = function (digit) {
    switch (digit[0]) {
        case '0':
            return units (digit.slice(1));
        case '1':
            return units (digit);
        case '2':
            return 'twenty ' + units (digit.slice(1));
        case '3':
            return 'thirty ' + units (digit.slice(1));
        case '4':
            return 'forty ' + units (digit.slice(1));
        case '5':
            return 'fifty ' + units (digit.slice(1));
        case '6':
            return 'sixty ' + units (digit.slice(1));
        case '7':
            return 'seventy ' + units (digit.slice(1));
        case '8':
            return 'eighty ' + units (digit.slice(1));
        case '9':
            return 'ninety ' + units (digit.slice(1));
    };
};

let units = function (digit) {
    if (digit.length == 1) {
        switch (digit[0]) {
            case '0':
                return '';
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        };
    } else {
        switch (digit[1]) {
            case '0':
                return 'ten';            
            case '1':
                return 'eleven';
            case '2':
                return 'twelve';
            case '3':
                return 'thirteen';
            case '4':
                return 'fourteen';
            case '5':
                return 'fifteen';
            case '6':
                return 'sixteen';
            case '7':
                return 'seventeen';
            case '8':
                return 'eighteen';
            case '9':
                return 'nineteen';
        };
    };
};