import styles from "./login.module.scss";
import woman from "../../assets/images/woman_relax.svg";
import InputGroup from "../../components/ui/InputGroup/InputGroup";
import Button from "../../components/ui/Button/Button";
import { FaEnvelope, FaEye } from "react-icons/fa6";
import useFetch from "../../hooks/useFetch";

const url = "http://bookbuzz.cronhex.com/api/v1/account/login";
const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: "bob@bob.xyz", password: "n0rM@N!" }),
};

const Login = () => {
    const { data, loading, error } = useFetch(url, options);

    if (error) console.log(error);

    if (loading) console.log("loading...");

    if (data) console.log(data);

    return (
        <section className={styles.loginPage}>
            <div className="container">
                <div className="row">
                    <div className="offset-1 col-md-5">
                        <img src={woman} alt="" />
                    </div>
                    <div className="col-md-5">
                        <h1>Log In</h1>
                        <form className={styles.loginForm}>
                            <InputGroup
                                className="mb-4"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                icon={<FaEnvelope />}
                            />
                            <InputGroup
                                className="mb-4"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                icon={<FaEye />}
                            />
                            <Button className="w-100 mt-3">Log In</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
