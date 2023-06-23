import styles from "./login.module.scss";
import woman from "../../assets/images/woman_relax.svg";
import InputGroup from "../../components/ui/InputGroup/InputGroup";
import Button from "../../components/ui/Button/Button";

const Login = () => {
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
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                            />
                            <InputGroup
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
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
