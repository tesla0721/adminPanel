function getFormData(form) {
    return Object.fromEntries(new FormData(form));
}

const modalPopup = document.querySelector('.modal');
const alertMsg = modalPopup.querySelector('.alert-msg');
const alertClose = modalPopup.querySelector('.alert-close');

let errorMsg = '';
let papitkeq = 0;

function somethingWrong() {
    modalPopup.classList.add('show');
    alertMsg.innerHTML = errorMsg;
}

alertClose.addEventListener('click', () => {
    modalPopup.classList.remove('show');
});

const form = document.querySelector('.login-cont');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = getFormData(form);

    if (formData.username.trim() === '' && formData.username.trim() === '') {
        errorMsg = 'Հատուկ դալբայոբների համար, կոնկրետ քո, Աշ։ Պտի լոգին պառոլ գրես։'
        somethingWrong();
    } else {
        const SUPABASE_URL = 'https://imftjhczknccvuauqxqw.supabase.co'
        const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltZnRqaGN6a25jY3Z1YXVxeHF3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5ODk0OTAsImV4cCI6MTk5NjU2NTQ5MH0.51XFNkKLi5WaTzy8hZQc-qVF7u-Dss0XKvj0p8o9hc8'

        const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

        const { data, error } = await _supabase.from('users').select('*').eq('username', formData.username).eq('password', formData.password);
        if (error) {
            alert(error);
        } else if (data.length === 1) {
            window.location.replace(window.location.href + '/pages/mainPage/');
        } else {
            papitkeq++;
            if (papitkeq === 1) {
                errorMsg = 'Սխալ ես գրել աաաաաաաա'
            } else if (papitkeq === 2) {
                errorMsg = 'Չես ջոգում ապե՜ր'
            } else if (papitkeq === 3) {
                errorMsg = 'Սիկտիր էլի արա'
            } else if (papitkeq === 4) {
                errorMsg = 'Արա Ռոմ կարողա պառոլը մոռցել ե՞ս'
            } else if (papitkeq === 5) {
                errorMsg = 'Ապե կառոչի դու անհասկացող գանդոն ես, սիկտիր էլի'
            } else if (papitkeq === 6) {
                errorMsg = 'Աշոտ կարողա՞ դու ես'
            } else if (papitkeq === 7) {
                errorMsg = 'Աշոտ դու ծծիր'
            }
            somethingWrong();
        }
    }
});