import "./ToastStack.css";
import { FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const iconByType = {
  success: <FaCheckCircle aria-hidden="true" />,
  warning: <FaExclamationTriangle aria-hidden="true" />,
  info: <FaInfoCircle aria-hidden="true" />,
};

const ToastStack = ({ toasts, onDismiss }) => {
  return (
    <div className="toast-stack" aria-live="polite" aria-atomic="true">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast-item toast-${toast.type ?? "info"} ${toast.isLeaving ? "is-leaving" : ""}`}
        >
          <span className="toast-icon">{iconByType[toast.type] ?? iconByType.info}</span>
          <span className="toast-message">{toast.message}</span>
          <button type="button" onClick={() => onDismiss(toast.id)} aria-label="Dismiss notification">
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastStack;
