'use client'
import React, { useState } from 'react';
import { analizar } from '@/module/generador';

const Page = () => {
  const [expressions, setExpressions] = useState('');
  const [result, setResult] = useState('');

  const inputChange = (e) => {
    const input = e.target.value;

    setExpressions(input);
    };


  const analizador = () => {
    const inputWithOutComments = expressions.replace(/(\/\/[^\n]*)|\/\*[\s\S]*?\*\//g, '')
    const inputLines = inputWithOutComments.split('\n'); // Dividir el input en líneas
    const validLines = inputLines.filter(line => line.trim().length > 0); // Filtrar líneas vacías con trim(eliminar espacios en blanco)
    const cleanInput = validLines.join('\n'); // Unir las líneas limpias nuevamente
    console.log(cleanInput);
    console.log(inputWithOutComments);
    if(/^[a-zA-Z0-9+\-*/().= \n\r]+$/.test(cleanInput)){
      const calculatedResult = analizar(cleanInput);
      //console.log(calculatedResult);
      setResult(calculatedResult.toString());
    }else{
      setResult('Error de sintaxis')
    }
      
    
  };
  const clearArea= ()=>{
    setExpressions('');
    setResult('');
  };

  return (
    <main className='h-screen w-screen font-sans bg-pink-100 place-content-center'>
      <section className='text-fuchsia-950 font-bold text-center '>
        <h1 className='text-3xl'>Practica 1</h1>
        <h1 className='m-2 text-2xl'>Calculadora con ANTLR4</h1>
        <h1 className='m-3 text-2xl'>Ilse Machado</h1>
        <p className='bg-pink-300 ml-4 mr-4 text-xl'>
          Instrucciones de uso: Ingresa cualquier expresión aritmética dentro del cuadro de texto.
          <br/>Reconoce números, letras, solo puedes realizar aritmetica<br/>Puedes calcular múltiples expresiones.
        </p>
        <p className='bg-pink-200 ml-4 mr-4 text-xl'>¡Haz tu primer cálculo!</p>
      </section>
      <section className='flex justify-center items-center'>
        <textarea
          className='  border-dashed border-2 border-pink-700 w-full mt-4 ml-4 mr-4 pt-3 pr-3 pl-3'
          value={expressions}
          onChange={inputChange}
          placeholder='Ingresa tus expresiones matemáticas separadas por un Enter'
        />
      </section>
      <section className='flex justify-center items-center'>
        <h2 className='text-fuchsia-950 font-bold mt-4'>Resultados</h2>
      </section>
      <section className='flex justify-center items-center m-3 rounded-md'>
        <textarea className=' border-dashed border-2 border-pink-700 w-full mt-4 ml-4 mr-4 pt-3 pr-3 pl-3 ' value= {`El resultado es: ${result}`} readOnly />
      </section>

      <section className='flex justify-center items-center'>
        <button
          className='bg-pink-900 rounded-md p-3 shadow-lg hover:bg-pink-300 text-white m-3'
          onClick={analizador}
        >
          Calcular
        </button>
        <button  className='bg-pink-900 rounded-md p-3 shadow-lg hover:bg-pink-300 text-white m-3'
          onClick={clearArea}> 
          Limpiar
        </button>
      </section>
    </main>
  );
};

export default Page;
