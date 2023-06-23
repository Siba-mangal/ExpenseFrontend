function resetPassword(e) {
  e.preventDefault();
  const emailId = e.target.email.value;
  axios.post(
    "https://expense-tracker-woys.onrender.com/password/forgotPassword",
    { emailId }
  );
  e.target.email.value = "";
}
