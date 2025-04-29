export function suggestOutfit(
  temp: number,
  style: string,  // "casual", "formal", "sporty"
  weather: string,
  gender: string
): string {
  let outfit = "";
  const normalizedWeather = weather.toLowerCase();

  // Gender-based and temperature-based outfit suggestion logic
  if (gender === "male") {
    if (style === "formal") {
      if (temp < 0) {
        outfit = `Men's formal wear: heavy coat, thermal shirt, woolen cap, gloves, leather boots`;
      } else if (temp < 6) {
        outfit = `Men's formal wear: wool blazer, thermal shirt, scarf, formal trousers, leather boots`;
      } else if (temp < 11) {
        outfit = `Men's formal wear: suit jacket, dress shirt, formal trousers, dress shoes`;
      } else if (temp < 16) {
        outfit = `Men's formal wear: dress shirt, light blazer, trousers, loafers`;
      } else if (temp < 21) {
        outfit = `Men's formal wear: dress shirt, chinos, formal shoes`;
      } else if (temp < 26) {
        outfit = `Men's formal wear: polo shirt, chinos, loafers`;
      } else if (temp < 31) {
        outfit = `Men's formal wear: breathable cotton shirt, linen trousers, loafers`;
      } else {
        outfit = `Men's formal wear: lightweight formal shirt, linen or tropical wool pants, loafers`;
      }
    }
    // Casual and sporty remain unchanged
    else if (style === "casual") {
      if (temp < 0) {
        outfit = `Men's casual wear: puffer jacket, hoodie, woolen cap, gloves, snow boots`;
      } else if (temp < 6) {
        outfit = `Men's casual wear: jacket, hoodie, jeans, boots`;
      } else if (temp < 11) {
        outfit = `Men's casual wear: sweater, denim jacket, chinos, sneakers`;
      } else if (temp < 16) {
        outfit = `Men's casual wear: sweatshirt, jeans, sneakers`;
      } else if (temp < 21) {
        outfit = `Men's casual wear: t-shirt, jeans, sneakers`;
      } else if (temp < 26) {
        outfit = `Men's casual wear: t-shirt, shorts, sneakers`;
      } else if (temp < 31) {
        outfit = `Men's casual wear: tank top, shorts, sandals`;
      } else {
        outfit = `Men's casual wear: breathable cotton t-shirt, shorts, flip-flops`;
      }
    } else if (style === "sporty") {
      if (temp < 0) {
        outfit = `Men's sporty wear: thermal base layer, fleece jacket, insulated gloves, snow boots`;
      } else if (temp < 6) {
        outfit = `Men's sporty wear: sports hoodie, track pants, running shoes`;
      } else if (temp < 11) {
        outfit = `Men's sporty wear: athletic jacket, joggers, trainers`;
      } else if (temp < 16) {
        outfit = `Men's sporty wear: t-shirt, track pants, running shoes`;
      } else if (temp < 21) {
        outfit = `Men's sporty wear: t-shirt, shorts, sneakers`;
      } else if (temp < 26) {
        outfit = `Men's sporty wear: tank top, running shorts, athletic shoes`;
      } else if (temp < 31) {
        outfit = `Men's sporty wear: lightweight t-shirt, shorts, flip-flops`;
      } else {
        outfit = `Men's sporty wear: breathable t-shirt, shorts, sandals`;
      }
    }
  } else if (gender === "female") {
    if (style === "formal") {
      if (temp < 0) {
        outfit = `Women's formal wear: wool coat, thermal shirt, scarf, gloves, knee-high boots`;
      } else if (temp < 6) {
        outfit = `Women's formal wear: tailored coat, wool sweater, tights, dress boots`;
      } else if (temp < 11) {
        outfit = `Women's formal wear: blazer, blouse, pencil skirt or trousers, formal shoes`;
      } else if (temp < 16) {
        outfit = `Women's formal wear: blouse, tailored trousers, flat shoes`;
      } else if (temp < 21) {
        outfit = `Women's formal wear: blouse, chinos, loafers`;
      } else if (temp < 26) {
        outfit = `Women's formal wear: button-up shirt, skirt or light pants, ballet flats`;
      } else if (temp < 31) {
        outfit = `Women's formal wear: short-sleeve blouse, breathable trousers or skirt, sandals`;
      } else {
        outfit = `Women's formal wear: cotton blouse, linen trousers or skirt, sandals`;
      }
    }
    // Casual and sporty remain unchanged
    else if (style === "casual") {
      if (temp < 0) {
        outfit = `Women's casual wear: puffer jacket, scarf, gloves, snow boots`;
      } else if (temp < 6) {
        outfit = `Women's casual wear: sweater, jacket, jeans, boots`;
      } else if (temp < 11) {
        outfit = `Women's casual wear: hoodie, leggings, boots`;
      } else if (temp < 16) {
        outfit = `Women's casual wear: sweater, jeans, sneakers`;
      } else if (temp < 21) {
        outfit = `Women's casual wear: t-shirt, jeans, sneakers`;
      } else if (temp < 26) {
        outfit = `Women's casual wear: t-shirt, shorts, sneakers`;
      } else if (temp < 31) {
        outfit = `Women's casual wear: tank top, shorts, flip-flops`;
      } else {
        outfit = `Women's casual wear: cotton t-shirt, shorts, sandals`;
      }
    } else if (style === "sporty") {
      if (temp < 0) {
        outfit = `Women's sporty wear: thermal base layer, fleece jacket, snow boots`;
      } else if (temp < 6) {
        outfit = `Women's sporty wear: athletic jacket, leggings, running shoes`;
      } else if (temp < 11) {
        outfit = `Women's sporty wear: sports top, joggers, sneakers`;
      } else if (temp < 16) {
        outfit = `Women's sporty wear: t-shirt, leggings, running shoes`;
      } else if (temp < 21) {
        outfit = `Women's sporty wear: tank top, shorts, sneakers`;
      } else if (temp < 26) {
        outfit = `Women's sporty wear: sports bra, shorts, running shoes`;
      } else if (temp < 31) {
        outfit = `Women's sporty wear: lightweight t-shirt, shorts, flip-flops`;
      } else {
        outfit = `Women's sporty wear: breathable top, shorts, sandals`;
      }
    }
  }

  // Add weather-specific accessories
  let accessories: string[] = [];
  if (normalizedWeather.includes("rain")) {
    accessories.push("carry umbrella or raincoat");
  }
  if (normalizedWeather.includes("snow")) {
    accessories.push("wear waterproof boots");
  }
  if (normalizedWeather.includes("sun") && temp > 20) {
    accessories.push("wear sunglasses and apply sunscreen");
  }
  if (normalizedWeather.includes("wind")) {
    accessories.push("wear a windbreaker");
  }

  if (accessories.length > 0) {
    outfit += ", " + accessories.join(", ");
  }

  return outfit;
}
