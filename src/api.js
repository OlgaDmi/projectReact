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
  let cardData = {
    cardNumber: cardNumber,
    cardDate: cardDate,
    cardUserName: cardUserName,
    cardCvc: cardCvc,
  };
  return fetch(
    `https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${cardDate}&cardName=${cardUserName}&cvc=${cardCvc}&token=AUTH_TOKEN`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(cardData),
    }
  )
    .then((res) => res.json())
    .then((data) => data);
};

export const serverRegistration = async (email, password, name, surname) => {
  let user = {
    email: email,
    password: password,
    name: name,
    surname: surname,
  };
  return fetch(`https://loft-taxi.glitch.me/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const serverAddressList = async () => {
  return fetch(`https://loft-taxi.glitch.me/addressList`)
    .then((res) => res.json())
    .then((data) => data.addresses);
};

export const serverRoute = async (address1, address2) => {
  return fetch(
    ` https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  )
    .then((res) => res.json())
    .then((data) => data);
};
