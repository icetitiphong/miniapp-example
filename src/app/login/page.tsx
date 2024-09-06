import { initAuth } from "@/lib/frontend";
import "./page.scss";

const Login = () => {
  return (
    <div className="w-full h-full full-background">
      <div className="container">
        <div className="btn-wrapper">
          <button
            type="button"
            className="text-white"
            // onClick={() =>
            // console.log('hi')
            // initAuth(
            //   (result) => {
            //     // add logic to handle accessToken here
            //     console.log(result);
            //     sessionStorage.setItem("accessToken", result.accessToken);
            //   },
            //   (errorCode, errorDescription) => {
            //     console.error(errorCode, errorDescription);
            //   }
            // )
            // }
          >
            Login with Paotang
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
