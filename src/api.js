export const serverLogin = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => data.success);
};

export const serverCard = async (
  cardNumber,
  cardDate,
  cardUserName,
  cardCvc
) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${cardDate}&cardName=${cardUserName}&cvc=${cardCvc}&token=AUTH_TOKEN`,
    { method: "POST" }
  )
    .then((res) => res.json())
    .then((data) => data);
};
