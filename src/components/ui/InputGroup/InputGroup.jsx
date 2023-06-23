import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import styles from "./InputGroup.module.scss";

const InputGroup = ({
    id = "defaultId",
    helpText = "Something is incorrect",
    label = "Label name",
    needHelp = false,
    type = "text",
    placeholder = "",
}) => {
    return (
        <div className="mb-3">
            <label for={id} className="form-label">
                {label}
            </label>

            <div className={`input-group ${styles.inputGroup}`}>
                <input
                    placeholder={placeholder}
                    type={type}
                    className="form-control"
                    id={id}
                    aria-describedby={`${id}Help`}
                />

                {type == "email" && (
                    <div className={`input-group-append ${styles.inputIcon}`}>
                        <FaEnvelope />
                    </div>
                )}

                {type == "password" && (
                    <div className={`input-group-append ${styles.inputIcon}`}>
                        <FaEye />
                        <FaEyeSlash />
                    </div>
                )}
            </div>

            {needHelp && (
                <div id={`${id}Help`} className="form-text text-danger">
                    {helpText}
                </div>
            )}
        </div>
    );
};

export default InputGroup;
