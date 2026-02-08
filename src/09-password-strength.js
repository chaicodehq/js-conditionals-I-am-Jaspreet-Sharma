/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if(typeof password !== "string") return "weak";
  const length = password.length;
  if(length === 0) return "weak";
  var count_of_uppercase = 0;
  var count_of_lowercase = 0;
  var count_of_number = 0;
  var count_of_special = 0;
  for(var i = 0; i < length; i++)
  {
    var ch = password.charAt(i);
    if(Number(ch) >= 0 && Number(ch) <= 9) count_of_number++;
    else if(ch === ch.toUpperCase() && ch !== ch.toLowerCase()) count_of_uppercase++;
    else if(ch === ch.toLowerCase() && ch !== ch.toUpperCase()) count_of_lowercase++;
    else count_of_special++;
  }
  var criteria_1 = length >= 8;
  var criteria_2 = count_of_uppercase >= 1;
  var criteria_3 = count_of_lowercase >= 1;
  var criteria_4 = count_of_number >= 1;
  var criteria_5 = count_of_special >= 1;
  var criteria = [criteria_1, criteria_2, criteria_3, criteria_4, criteria_5];
  var count = 0;
  for(var i = 0; i < criteria.length; i++)
  {
    if(criteria[i]) count += 1;
  }
  if(count == 5) return "very strong";
  else if(count == 4) return "strong";
  else if(count == 2 || count == 3) return "medium";
  else return "weak";
}
