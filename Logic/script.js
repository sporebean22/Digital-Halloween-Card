
function SetMessage(value)
{
  const message = document.getElementById('NameBar');
  message.innerHTML = value;
}

function reset()
{
  const message = document.getElementById('NameBar');
  let input = document.getElementById('NameInput');
  input.value = null;
  message.innerText = ' ';
}

function RecieveUsersName() 
{
  let value = document.getElementById('NameInput').value;
  console.log(`Value: ${value.length}`);
  if(value.length == 0)
    SetMessage(' ');
  else
    SetMessage(value);
}