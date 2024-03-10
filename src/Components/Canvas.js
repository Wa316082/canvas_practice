import { fabric } from "fabric";
import React from 'react';
const Canvas = () => {
    const fabricRef = React.useRef(null);
    const canvasRef = React.useRef(null);
  
    React.useEffect(() => {
      const initFabric = () => {
        fabricRef.current = new fabric.Canvas(canvasRef.current,{
            width: 500,
            height: 500,
            backgroundColor: 'lightgrey'
        });
      };
  
      const addRectangle = () => {
        const rect = new fabric.Rect({
          top: 50,
          left: 50,
          width: 50,
          height: 50,
          fill: "red"
        });
  
        const text = new fabric.Text(
          'hello world', { left: 100, top: 100, fill:'red' }
        );
  
        fabricRef.current.add(rect);
        fabricRef.current.add(text)
      };
  
      const disposeFabric = () => {
        fabricRef.current.dispose();
      };
  
      initFabric();
      addRectangle();
  
      return () => {
        disposeFabric();
      };
    }, []);
  
    return <canvas ref={canvasRef} />;
}

export default Canvas
