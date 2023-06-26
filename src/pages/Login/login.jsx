import styles from "./login.module.scss";
import woman from "../../assets/images/woman_relax.svg";
import InputGroup from "../../components/ui/InputGroup/InputGroup";
import Button from "../../components/ui/Button/Button";
import { FaEnvelope, FaEye } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const proxy = "https://dot-radical-crocodile.glitch.me/";
const url = "http://bookbuzz.cronhex.com/api/v1/account/login";

const Login = () => {
    let loginForm = <></>;
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");

    useEffect(() => {
        // console.log(emailValue);
    }, [emailValue]);

    const loginHandler = async (ev) => {
        ev.preventDefault();
        setLoading(true);

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
            }),
        };

        try {
            const response = await fetch(proxy + url, options);
            const respData = await response.json();

            if (respData.isError) {
                setError(respData.errorMessage);
            } else {
                localStorage.setItem("token", respData.result.jwt);
                navigate("/products", { replace: true });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    // if (error) console.log(error);

    if (loading) loginForm = <div>loading...</div>;
    else
        loginForm = (
            <form className={styles.loginForm}>
                {error && (
                    <div className="text-danger mb-5">{data.errorMessage}</div>
                )}
                <InputGroup
                    id="email"
                    className="mb-4"
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    icon={<FaEnvelope />}
                    onKeyUp={(e) => {
                        setEmailValue(e.target.value);
                    }}
                />
                <InputGroup
                    id="password"
                    className="mb-4"
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    icon={<FaEye />}
                    onKeyUp={(e) => setPasswordValue(e.target.value)}
                />
                <Button onclick={loginHandler} className="w-100 mt-3">
                    Log In
                </Button>
            </form>
        );

    return (
        <section className={styles.loginPage}>
            <div className="container">
                <div className="row">
                    <div className="offset-1 col-md-5">
                        <img src={woman} alt="" />
                    </div>
                    <div className="col-md-5">
                        <h1>Log In</h1>
                        {loginForm}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
