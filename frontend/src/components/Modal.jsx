/**
 * Description:
 *      Versatile modal/overlay component for displaying focus-heavy content.
 *      Used for forms, detailed views, and administrative actions.
 */

/*------------------------------------------------------------------------------
                            MAIN COMPONENT DEFINITION
------------------------------------------------------------------------------*/

/**
 * @brief Generic overlay/modal container.
 * 
 * @param {boolean} open Whether the modal is currently visible.
 * @param {string} title Text to display in the modal header.
 * @param {React.ReactNode} children Content to be rendered inside the modal body.
 * @param {Function} onClose Callback function triggers when closing the modal.
 * @returns {JSX.Element|null} The rendered modal component.
 */
export default function Modal({ open, title, children, onClose }) {
  // Render nothing if the modal is not active
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-lg">

        {/* Header: Title and Close Button */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 font-semibold hover:bg-slate-100"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body: Custom Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
