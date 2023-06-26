const AuthVeriy = ({ history }) => {
    history.listen(() => {
        const token = JSON.parse(localStorage.getItem("token"));

        const decodedJwt = parseJwt(token);

        console.table(decodedJwt.exp, Date.now());
    });
    return <div>AuthVeriy</div>;
};

export default withRouter(AuthVeriy);

const parseJwt = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
        return null;
    }
};
