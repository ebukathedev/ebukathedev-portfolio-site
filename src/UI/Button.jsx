/* eslint-disable react/prop-types */
const buttonStyles =
	"relative block transition-normal border rounded-md border-green hover:-translate-x-1 hover:-translate-y-1 text-green";

const Button = ({ children, className, innerClassName, bgColor, onClick }) => {
	return (
		<button
			className={`relative block focus:outline-none capitalize ${className}`}
			onClick={onClick}
		>
			<span
				className={`${buttonStyles} ${innerClassName || "px-4 py-2"} ${
					bgColor || "bg-navy-green"
				}  `}
			>
				{children}
			</span>
			<span className="absolute inset-0 rounded-md -z-10 bg-green"></span>
		</button>
	);
};

export default Button;
