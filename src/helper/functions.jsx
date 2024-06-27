// In windows, pass in the flag emoji to make it work
//https://emojipedia.org/flags
// Go into the above link to get the flag icon you need first, then pass it the this function below
// 127462 - A
const flagemojiToPNG = (flag) => {
  const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
    .map((char) => String.fromCharCode(char - 127397).toLowerCase())
    .join("");

  return (
    <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  );
};

export { flagemojiToPNG };
