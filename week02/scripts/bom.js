const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
// Check to make sure the input is not blank
  if (input.value.trim() !== '') {
    // Create li and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = input.value;

    deleteButton.textContent = '❌';
    // deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Delete li when clicking  ❌
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    li.append(deleteButton);

    list.append(li);

    input.value = '';
  }

  input.focus();
});