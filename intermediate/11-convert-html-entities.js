// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    //replace using RegExp and function converting the match
    return str.replace(/[&<>"']/g, function (match) {
        switch (match) {
            case "&": return "&amp;";
            case "<": return "&lt;";
            case ">": return "&gt;";
            case '"': return "&quot;";
            case "'": return "&apos;";
        }
    });
}

convertHTML("Dolce & Gabbana");
