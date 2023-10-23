import { Alert } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function AlertCustom({ variant, text }) {
  return (
    <Alert key={variant} variant={variant}>
      {text}
    </Alert>
  );
}

export default AlertCustom;
