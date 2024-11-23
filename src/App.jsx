




const app = () => {
  console.log(import.meta.env.VITE_NODE_ENV); // This should log 'development'
  
  return (
    <div>
      <h1>Hello, World!</h1>
      
    </div>
  );
};

export default app;