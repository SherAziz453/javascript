// ==========================================
// 1. ARITHMETIC OPERATORS (+, -, *, /, %)
// ==========================================
let a = 10;
let b = 3;

console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.33...
console.log("Remainder (%):", a % b);  // 1 (10 / 3 leaves remainder 1)


// ==========================================
// 2. ASSIGNMENT OPERATORS (=, +=, -=, *=, /=)
// ==========================================
let d = 10;

d += 5; // Shortcut for d = d + 5 -> 15
d -= 3; // Shortcut for d = d - 3 -> 12
d *= 2; // Shortcut for d = d * 2 -> 24
d /= 4; // Shortcut for d = d / 4 -> 6
console.log("Final Assignment Value:", d);


// ==========================================
// 3. COMPARISON OPERATORS (==, ===, !=, !==, >, <)
// ==========================================
let num = 5;
let str = "5";

console.log("Loose Equal (==):", num == str);   // true (checks value only)
console.log("Strict Equal (===):", num === str); // false (checks value & type)
console.log("Not Equal (!=):", num != 10);      // true
console.log("Greater Than (>):", num > 3);      // true


// ==========================================
// 4. LOGICAL OPERATORS (&&, ||, !)
// ==========================================
let isAdult = true;
let hasLicense = false;

// AND (&&): Both must be true
console.log("Logical AND:", isAdult && hasLicense); // false

// OR (||): At least one must be true
console.log("Logical OR:", isAdult || hasLicense);  // true

// NOT (!): Flips the value
console.log("Logical NOT:", !isAdult);              // false


// ==========================================
// 5. INCREMENT (++) AND DECREMENT (--)
// ==========================================

// --- INCREMENT ---
let inc = 5;
console.log("Pre-Increment (++inc):", ++inc); // 6 (Add first, then show)

let postInc = 5;
console.log("Post-Increment (postInc++):", postInc++); // 5 (Show first, then add)
console.log("Value after Post-Inc:", postInc);         // 6

// --- DECREMENT ---
let dec = 5;
console.log("Pre-Decrement (--dec):", --dec); // 4 (Subtract first, then show)

let postDec = 5;
console.log("Post-Decrement (postDec--):", postDec--); // 5 (Show first, then subtract)
console.log("Value after Post-Dec:", postDec);         // 4
