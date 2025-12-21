function ButtonLink({
  href,
  label,
  download = true,
  newTab = false,
  icon = null,
}) {
  return (
    <a
      href={href}
      download={download}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="inline-block"
    >
      <button
        className="
          flex items-center gap-2
          border bg-white text-[1.4rem]
          px-4 py-2 rounded-2xl
          transition-colors duration-200
          hover:bg-[#f2552e]/80 hover:text-white hover:border-black
        "
      >
        {icon && <span className="">{icon}</span>}
        {label}
      </button>
    </a>
  );
}

export default ButtonLink;
