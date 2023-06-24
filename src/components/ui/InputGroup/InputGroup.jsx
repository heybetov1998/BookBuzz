import styles from "./InputGroup.module.scss";

const InputGroup = ({
    id = "defaultId",
    type = "text",
    placeholder = "",
    helpText,
    label,
    className = "",
    icon,
}) => {
    return (
        <div className={`${className}`}>
            {label && (
                <label for={id} className="form-label">
                    {label}
                </label>
            )}

            <div className={`input-group ${styles.inputGroup}`}>
                <input
                    placeholder={placeholder}
                    type={type}
                    className="form-control"
                    id={id}
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
