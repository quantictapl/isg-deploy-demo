function GenerateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaText = '';
    for (let i = 0; i < 5; i++) {
      captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return captchaText;
  }
  export default GenerateCaptcha;