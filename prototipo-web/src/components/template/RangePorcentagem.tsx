// 1. Importar useRef e useEffect
import { useState, useRef, useEffect } from "react";

interface RangePorcentagemProps {
  htmlFor: string;
  classeNameLabel?: string;
  textoLabel: string;
  classNameDiv?: string;
  idInput: string;
  minRange: string;
  maxRange: string;
  classNameInput?: string;
  isPorcentagem?: "sim"|"nao"
}

export function RangePorcentagem({
  classeNameLabel = '',
  htmlFor,
  textoLabel,
  classNameDiv,
  idInput,
  maxRange,
  minRange,
  classNameInput = '',
  isPorcentagem = "sim"
}: RangePorcentagemProps) {
  const [valor, setValor] = useState(50);
  
  // 2. Adicionar os refs para o input e o tooltip
  const rangeRef = useRef<HTMLInputElement>(null);
  const tooltipRef = useRef<HTMLOutputElement>(null);

  const handleChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    setValor(Number(evento.target.value));
  };

  useEffect(() => {
    const rangeElement = rangeRef.current;
    const tooltipElement = tooltipRef.current;

    const min = Number(minRange);
    const max = Number(maxRange);

    if (rangeElement && tooltipElement) {
      const thumbWidth = 20;
      const trackWidth = rangeElement.offsetWidth;

      const percent = (valor - min) / (max - min);
      const thumbPosition = percent * (trackWidth - thumbWidth);
      const tooltipPosition = thumbPosition + (thumbWidth / 2) - (tooltipElement.offsetWidth / 2);

      tooltipElement.style.left = `${tooltipPosition}px`;
    }
  }, [valor, minRange, maxRange]);

  return (
    <div className={classNameDiv}>
      <label htmlFor={htmlFor} className={`block text-sm font-bold text-gray-700 ${classeNameLabel}`}>
        {textoLabel}
      </label>
      {isPorcentagem === "sim" ? (
        <div className="relative flex items-center gap-1 pt-8">
        <output
          ref={tooltipRef}
          className="absolute text-center bg-blue-500 text-white text-sm font-semibold py-1 px-2 rounded-md -top-1 pointer-events-none"
          style={{  top: "2%",transform: 'translateX(50%)' }} 
        >
          {valor}%
        </output>

        {`${minRange}%`}
        <input
          ref={rangeRef}
          type="range"
          id={idInput}
          min={minRange}
          max={maxRange}
          value={valor}
          onChange={handleChange}
          className={`
            w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 
            [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full
            ${classNameInput}
          `}
        />
        {`${maxRange}%`}
      </div>
      ):(
        <div className="relative flex items-center gap-1 pt-8">
        <output
          ref={tooltipRef}
          className="absolute text-center bg-blue-500 text-white text-sm font-semibold py-1 px-4 rounded-md -top-1 pointer-events-none"
          style={{  top: "2%",transform: 'translateX(10%)' }} 
        >
          {valor}
        </output>

        {`${minRange}`}
        <input
          ref={rangeRef}
          type="range"
          id={idInput}
          min={minRange}
          max={maxRange}
          value={valor}
          onChange={handleChange}
          className={`
            w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 
            [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 
            [&::-webkit-slider-thumb]:rounded-full
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 
            [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:rounded-full
            ${classNameInput}
          `}
        />
        {`${maxRange}`}
      </div>
      )}
    </div>
  );
}