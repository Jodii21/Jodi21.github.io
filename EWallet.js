const form = document.getElementById('form');
const formData = document.getElementById('form-data');
const jenisData = document.getElementById('jenis-data');
const noData = document.getElementById('no-data');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const jenis = document.getElementById('jenis').value;
  const no = document.getElementById('noCek').value;
  jenisData.innerText = `Name: ${jenis}`;
  noData.innerText = `nomor: ${no}`;
  formData.classList.remove('hide');
  form.classList.add('hide');
});
