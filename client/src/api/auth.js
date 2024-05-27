export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };

  // Save user in db & get token
  fetch(`${process.env.REACT_APP_API_URL}/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //save token inj local storage
      localStorage.setItem("room-token", data.token);
    });
};

export const saveBooking = (bookingData) => {
  // Post method fetch
  return fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
};
///dsd
export const BookingDataRemove = (bookingData) => {
  // Post method fetch
  return fetch(`http://localhost:8000/restart/${bookingData._id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });
};
