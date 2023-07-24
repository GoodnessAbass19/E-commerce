import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Circles
        height="80"
        width="80"
        color="#030712"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
