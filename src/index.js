/**
 * Validate a credit card number using the Luhn algorithm
 * @param {string} cardNumber - The credit card number to validate
 * @returns {object} - Returns an object with validity and issuer information
 */
function validateCreditCard(cardNumber) {
    // Remove all non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    let sum = 0;
    let shouldDouble = false;

    // Loop through the card number digits in reverse order
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i), 10);

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    const isValid = sum % 10 === 0;

    // Determine the card issuer using regex
    let issuer = "Unknown";
    const cardPatterns = {
        "Visa": /^4[0-9]{12}?$/,
        "Visa": /^4[0-9]{15}?$/,
        "MasterCard": /^5[1-5][0-9]{14}$/,
        "American Express": /^3[47][0-9]{13}$/,
        "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
        "Diners Club": /^3[0-9]{13}?$/,
        "Discover": /^6011[0-9]{12}?$/,
        "EnRoute": /^2014|2149[0-9]{11}$/,
        "Voyager": /^8699[0-9]{11}?$/,
        "Hiper Card": /^6062[0-9]{12}?$/,
        "Aura": /^50[0-9]{14}?$/,
    };

    for (const [key, pattern] of Object.entries(cardPatterns)) {
        if (pattern.test(cardNumber)) {
            issuer = key;
            break;
        }
    }

    return {
        isValid,
        issuer
    };
}

// Example usage
const cardNumber = "3028 674969 7529";
const result = validateCreditCard(cardNumber);
console.log(`Card Number: ${cardNumber}`);
console.log(`Valid: ${result.isValid}`);
console.log(`Issuer: ${result.issuer}`);
