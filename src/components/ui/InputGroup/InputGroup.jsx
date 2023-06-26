import styles from "./InputGroup.module.scss";

const InputGroup = ({
    id = "defaultId",
    type = "text",
    placeholder = "",
    helpText,
    label,
    className = "",
    icon,
    onKeyUp = () => {},
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label htmlFor={id} className="form-label">
                    {label}
                </label>
            )}

            <div className={`input-group ${styles.inputGroup}`}>
                <input
                    placeholder={placeholder}
                    type={type}
                    name={id}
                    className="form-control"
                    id={id}
                    onKeyUp={onKeyUp}
                    aria-describedby={`${id}Help`}
                />

                {icon && (
                    <div className={`input-group-append ${styles.inputIcon}`}>
                        {icon}
                    </div>
                )}
            </div>

            {helpText && (
                <div id={`${id}Help`} className="form-text text-danger">
                    {helpText}
                </div>
            )}
        </div>
    );
};

export default InputGroup;
