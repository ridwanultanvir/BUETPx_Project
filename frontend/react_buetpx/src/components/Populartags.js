
  
  const Tinput = ({ type, plc, value, clas, onChange }) => (
    <div className={clas}>
      <input
        value={value}
        type={type ? type : "text"}
        placeholder={plc}
        onChange={onChange}
      />
    </div>
  );
  
  const Tspan = ({ title, clas }) => (
    <div className={clas}>
      <span>{title}</span>
    </div>
  );
  

  export {  Tspan, Tinput };
  