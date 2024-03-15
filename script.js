function validate()
{
  var username = document.getElementById('name').value
  var password = document.getElementById('password').value

  switch(username)
  {
      case "Prad":
          switch(password)
          {
              case "Prad123":
                window.location.href = "result.html";
                return false;
              default:
                alert("incorrect password")
                return false
          }
      default:
        alert("no user");
      return false;
  }
}