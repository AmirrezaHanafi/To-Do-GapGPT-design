export default function PlusIcon({ className }) {
  return (
    <svg
      className={`cursor-pointer  ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
}
