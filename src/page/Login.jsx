// src/pages/Login.jsx
import Loader from "../components/Loader";
import AuthPanels from "../components/AuthPanels";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import useAuthLogic from "../hooks/useAuthLogic";
import "@fortawesome/fontawesome-free/css/all.css";

const Login = () => {
  const {
    isSignUpMode,
    isLoading,
    setIsSignUpMode,
    handleSignInSubmit,
    handleSignUpSubmit,
  } = useAuthLogic();

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      {isLoading && <Loader />}
      <div className="forms-container">
        <div className="signin-signup">
          {isSignUpMode ? (
            <SignUpForm onSubmit={handleSignUpSubmit} isLoading={isLoading} />
          ) : (
            <SignInForm onSubmit={handleSignInSubmit} isLoading={isLoading} />
          )}
        </div>
      </div>
      <AuthPanels
        onSignUp={() => setIsSignUpMode(true)}
        onSignIn={() => setIsSignUpMode(false)}
      />
    </div>
  );
};

export default Login;
