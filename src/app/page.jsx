import FormPage from "./fomrPage/page.jsx";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-10 ">Welcome</h1>

      <div>
         <FormPage />
     </div>
       
     
    </div>

    
  );
}

export default HomePage;
