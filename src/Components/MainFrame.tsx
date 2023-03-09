const MainFrame = () => {
  const standardTouch: string =
    'border-2 rounded border-teal-600 text-stone-50 text-center cursor-pointer hover:bg-slate-900';
  const egalTouch: string =
    'border-2 rounded border-teal-600 bg-teal-600 text-slate-800 text-center cursor-pointer hover:bg-teal-700 hover:text-white';

  return (
    <div className="w-96 border border-teal-600 rounded p-1 h-56">
      <div className="text-white text-center rounded border mb-2">Resultat</div>
      <div className="grid grid-rows-5 grid-flow-col gap-2">
        <div className={standardTouch}>(</div>
        <div className={standardTouch}>7</div>
        <div className={standardTouch}>4</div>
        <div className={standardTouch}>1</div>
        <div className={standardTouch}>0</div>
        <div className={standardTouch}>)</div>
        <div className={standardTouch}>8</div>
        <div className={standardTouch}>5</div>
        <div className={standardTouch}>2</div>
        <div className={standardTouch}>.</div>
        <div className={standardTouch}>%</div>
        <div className={standardTouch}>9</div>
        <div className={standardTouch}>6</div>
        <div className={standardTouch}>3</div>
        <div className={egalTouch}>=</div>
        <div className={standardTouch}>AC</div>
        <div className={standardTouch}>/</div>
        <div className={standardTouch}>x</div>
        <div className={standardTouch}>-</div>
        <div className={standardTouch}>+</div>
      </div>
    </div>
  );
};

export default MainFrame;
