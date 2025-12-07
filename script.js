// JavaScript function to validate password match
function validate() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return false;
  }
  
  // Alert on successful registration
  alert('Registration successful');
  return true;
}
