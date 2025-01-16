function showPoem() {
    const poem = document.getElementById('poem');
    if (poem.style.display === 'none') {
        poem.style.display = 'block';
    } else {
        poem.style.display = 'none';
    }
}
