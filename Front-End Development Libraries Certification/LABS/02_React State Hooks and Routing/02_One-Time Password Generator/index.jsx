const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const [OTP, setOTP] = useState(null);
  const [countdown, setCountdown] = useState(0);

  const generateOTP = () => {
    let newOTP = "";

    for (let i = 1; i <= 6; i++) {
      newOTP += Math.floor(Math.random() * 10);
    }

    setOTP(newOTP);
    setCountdown(5);
  };

  useEffect(() => {
    if (countdown <= 0) return;

    const countdownInterval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {OTP ? OTP : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live="polite">
        {!OTP
          ? ""
          : countdown
            ? `Expires in: ${countdown} seconds`
            : "OTP expired. Click the button to generate a new OTP."}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={countdown}
      >
        Generate OTP
      </button>
    </div>
  );
};
