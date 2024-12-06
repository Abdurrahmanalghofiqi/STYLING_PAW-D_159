document.getElementById('addTodoButton').addEventListener('click', () => {
    document.getElementById('todoModal').classList.remove('hidden');
  });
  
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('todoModal').classList.add('hidden');
  });
  
  document.getElementById('todoForm').addEventListener('submit', (event) => {
    event.preventDefault();
  
    // Ambil data dari form
    const title = document.getElementById('todoTitle').value;
    const description = document.getElementById('todoDescription').value;
  
    // Tambahkan card baru ke daftar todo
    const todoList = document.querySelector('.todo-list');
    const card = document.createElement('div');
    card.className = 'todo-card';
    card.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <button>Edit</button>
      <button>Delete</button>
    `;
    todoList.appendChild(card);
  
    // Reset form dan tutup modal
    document.getElementById('todoForm').reset();
    document.getElementById('todoModal').classList.add('hidden');
  });
  