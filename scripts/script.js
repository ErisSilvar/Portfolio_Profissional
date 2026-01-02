 function showSection(sectionId) {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            document.getElementById(sectionId).classList.add('active');
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function sendMessage() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor, preencha todos os campos!');
                return;
            }
            
            alert('Mensagem enviada com sucesso! (Em um site real, isso enviaria um email)');
            
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
            });
        });