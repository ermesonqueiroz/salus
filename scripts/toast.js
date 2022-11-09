function showToast(message, error = 'success') {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: 'bottom',
    position: 'right',
    stopOnFocus: true,
    style: {
      background: error === 'success'
      ? 'linear-gradient(to right, rgb(67 56 202), rgb(96 165 250))'
      : 'linear-gradient(to right, rgb(217 119 6), rgb(248 113 113))',
    },
  }).showToast();
}