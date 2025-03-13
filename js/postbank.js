
document.addEventListener('DOMContentLoaded', function() {
    const accountNumber = document.getElementById('accountNumber');
    const copyButton = document.getElementById('copyButton');
  
    copyButton.addEventListener('click', function() {
      const tempInput = document.createElement('input');
      tempInput.value = accountNumber.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
  
      // Provide visual feedback
      copyButton.textContent = 'Copied!';
      setTimeout(() => {
        copyButton.textContent = 'Copy';
      }, 2000); // Reset button text after 2 seconds
  
      // Add a subtle animation on copy.
      accountNumber.style.transition = 'transform 0.2s ease-in-out';
      accountNumber.style.transform = 'scale(1.1)';
      setTimeout(() => {
          accountNumber.style.transform = 'scale(1)';
      }, 200);
    });
  });
  
  