
const menuButton = document.getElementsByClassName('login');
const mag_product = document.getElementsByClassName('mag-product');
mag_product.style.display='block';
menuButton.addEventListener('click', () => {
  mag_product.style.display = 'block';
  });
  document.addEventListener('click', (event) => {
    // التحقق من أن الضغط خارج القائمة وخارج زر فتح القائمة
    if (!mag_product.contains(event.target) && event.target !== menuButton) {
      hideMenu();
    }
  });
  
  // دالة لإخفاء القائمة والخلفية
  function hideMenu() {
    mag_product.style.display = 'none';
  }
// ==========================================


